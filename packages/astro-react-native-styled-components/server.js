import React from 'react';
import ReactDOM from 'react-dom/server';
import StaticHtml from './static-html.js';
import { ServerStyleSheet } from 'styled-components';
import reactNative from 'react-native-web';
const { AppRegistry } = reactNative;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	if (children != null) {
		newProps.children = React.createElement(StaticHtml, { value: children });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		html = await renderToNodeStream(vnode);
	} else {
		html = await renderToStaticNodeStream(vnode);
	}
	return { html };
}

async function renderToNodeStream(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	const sheet = new ServerStyleSheet();
	const jsx = sheet.collectStyles(vnode);
	AppRegistry.registerComponent('Main', () => vnode);
	return new Promise((resolve, reject) => {
		let stream = sheet.interleaveWithNodeStream(ReactDOM.renderToNodeStream(jsx));
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					const { getStyleElement } = AppRegistry.getApplication('Main');
					const css = ReactDOM.renderToStaticMarkup(getStyleElement());
					html += `<style>${css}</style>`;
					resolve(html);
				},
			})
		);
	});
}

async function renderToStaticNodeStream(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	const sheet = new ServerStyleSheet();
	const jsx = sheet.collectStyles(vnode);
	AppRegistry.registerComponent('Main', () => vnode);
	return new Promise((resolve, reject) => {
		let stream = sheet.interleaveWithNodeStream(ReactDOM.renderToStaticNodeStream(jsx));
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					const { getStyleElement } = AppRegistry.getApplication('Main');
					const css = ReactDOM.renderToStaticMarkup(getStyleElement());
					html += `<style>${css}</style>`;
					resolve(html);
				},
			})
		);
	});
}

export default {
	check,
	renderToStaticMarkup,
};
