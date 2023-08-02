import { LibraryFormats } from "vite";

export const commonFormats = ["es", "cjs"] as LibraryFormats[];

export const baseOutDir = "./dist";

export const getFileName = (prefix: string, format: string) => {
  switch (format) {
    case "es":
    case "esm":
    case "module":
      return `${prefix}.mjs`;
    case "cjs":
    case "commonjs":
    default:
      return `${prefix}.cjs`;
  }
};
