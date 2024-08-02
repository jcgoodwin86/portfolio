// uno.config.ts
import { defineConfig, presetTypography, presetWebFonts, presetUno } from "unocss";

export default defineConfig({
  presets: [
  presetUno(),
  presetTypography({
    cssExtend: {
      "h1, h2, h3, h4, h5, h6": {
        "font-family": "Lekton",
      },
    },
  }),
  presetWebFonts({
    provider: "google", // default provider
    fonts: {
      // these will extend the default theme
      sans: "Roboto",
      mono: ["Fira Code", "Fira Mono:400,700"],
      // custom ones
      lobster: "Lobster",
      lekton: "Lekton",
      spacemono: "Space Mono",
      lato: [
        {
          name: "Lato",
          weights: ["400", "700"],
          italic: true,
        },
        {
          name: "sans-serif",
          provider: "none",
        },
      ],
    },
  }),
]
});
