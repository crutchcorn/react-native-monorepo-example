import { defineConfig } from 'astro/config';

import reactStyledComponents from "@crutchcorn/astro-react-native-styled-components";

export default defineConfig({
  integrations: [reactStyledComponents()]
});
