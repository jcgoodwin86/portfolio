// uno.config.ts
import { defineConfig, presetWebFonts, presetUno } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      "light": "#5c636e",
      borderColor: "#5c636e", // Define border color directly at the same level
    },
  },
  presets: [
  presetUno({
    theme: {
      // Set the default border color using a CSS variable
      borderColor: {
        DEFAULT: 'var(--un-default-border-color, #5c636e)', // Fallback color if the variable is not set
      },
    },
  }),
  presetWebFonts({
    provider: "google", // default provider
    fonts: {
      // these will extend the default theme
      // sans: "Roboto",
      mono: ["Azeret Mono:300", "Fira Code", "Fira Mono:400,700"],
      satoshi: [
        {
          name: "Satoshi",
          weights: ["400"],
          provider: 'fontshare'
        },
      ],
    },
  }),
]
});
