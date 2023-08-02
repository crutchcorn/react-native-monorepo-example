import { defineConfig } from "vite";
import { getMobileConfig } from "./vite/mobile-config";

export default defineConfig(() => getMobileConfig());
