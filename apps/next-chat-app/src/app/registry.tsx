"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native-web";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    // https://github.com/necolas/react-native-web/issues/2196
    // https://github.com/nandorojo/solito/blob/master/develop/appdir/app/styles-provider.tsx
    // ts-ignore
    const sheet = StyleSheet.getSheet();
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: sheet.textContent }}
          id={sheet.id}
        />
        {styles}
      </>
    );
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
