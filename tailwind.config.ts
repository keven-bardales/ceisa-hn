import { THEME_PRESENTATION } from "@/app/(modules)/landing/theme-for-presentation";
import type { Config } from "tailwindcss";

export const LANDING_MAIN_COLORS = {
  "landing-third-50": "#f6f8f9",
  "landing-third-100": "#ebeff2",
  "landing-third-200": "#d4dee3",
  "landing-third-300": "#aec1cb",
  "landing-third-400": "#829fae",
  "landing-third-500": "#638494",
  "landing-third-600": "#4e6b7b",
  "landing-third-700": "#405664",
  "landing-third-800": "#384954",
  "landing-third-900": "#323f48",
  "landing-third-950": "#212a30",
  "landing-third-main": "#ebeff2",
  "landing-primary-50": "#fff5ed",
  "landing-primary-100": "#ffe7d4",
  "landing-primary-200": "#ffcca8",
  "landing-primary-300": "#ffa871",
  "landing-primary-400": "#ff702c",
  "landing-primary-500": "#fe5411",
  "landing-primary-600": "#ef3907",
  "landing-primary-700": "#c62708",
  "landing-primary-800": "#9d210f",
  "landing-primary-900": "#7e1e10",
  "landing-primary-950": "#440b06",
  "landing-primary-main": "#ff702c",
  "landing-secondary-50": "#f2f7fd",
  "landing-secondary-100": "#e5edf9",
  "landing-secondary-200": "#c5d9f2",
  "landing-secondary-300": "#92bae7",
  "landing-secondary-400": "#5896d8",
  "landing-secondary-500": "#3278c5",
  "landing-secondary-600": "#225ea7",
  "landing-secondary-700": "#1d4b87",
  "landing-secondary-800": "#1c4170",
  "landing-secondary-900": "#1c385e",
  "landing-secondary-950": "#13243e",
  "landing-secondary-main": "#1d4b87",
  "landing-first-bg": "#f6f8f9",
  "landing-second-bg": "#FFFFFF",
  "landing-button-bg-primary": "#ff702c",
  "landing-button-bg-secondary": "#1d4b87",
  "landing-button-text-primary-hover": "#ff702c",
  "landing-button-text-secondary-hover": "white",
  "landing-button-text-primary": "white",
  "landing-button-text-secondary": "white",
  "landing-nav-item-text": "white",
};

export const LANDING_SECONDARY_COLORS = {
  "landing-third-50": "#f6f8f9",
  "landing-third-100": "#ebeff2",
  "landing-third-200": "#d4dee3",
  "landing-third-300": "#aec1cb",
  "landing-third-400": "#829fae",
  "landing-third-500": "#638494",
  "landing-third-600": "#4e6b7b",
  "landing-third-700": "#405664",
  "landing-third-800": "#384954",
  "landing-third-900": "#323f48",
  "landing-third-950": "#212a30",
  "landing-third-main": "#ebeff2",
  "landing-primary-50": "#fcffe7",
  "landing-primary-100": "#f5ffc1",
  "landing-primary-200": "#efff87",
  "landing-primary-300": "#edff42",
  "landing-primary-400": "#f4ff0f",
  "landing-primary-500": "#fbfb02",
  "landing-primary-600": "#cfbe00",
  "landing-primary-700": "#a58a03",
  "landing-primary-800": "#886b0b",
  "landing-primary-900": "#74580f",
  "landing-primary-950": "#443004",
  "landing-primary-main": "#FFEB00",
  "landing-secondary-50": "#f2f7fd",
  "landing-secondary-100": "#e5edf9",
  "landing-secondary-200": "#c5d9f2",
  "landing-secondary-300": "#92bae7",
  "landing-secondary-400": "#5896d8",
  "landing-secondary-500": "#3278c5",
  "landing-secondary-600": "#225ea7",
  "landing-secondary-700": "#1d4b87",
  "landing-secondary-800": "#1c4170",
  "landing-secondary-900": "#1c385e",
  "landing-secondary-950": "#13243e",
  "landing-secondary-main": "white",
  "landing-first-bg": "white",
  "landing-second-bg": "#F5F5F5",
  "landing-button-bg-primary": "#FFEB00",
  "landing-button-bg-secondary": "black",
  "landing-button-text-primary-hover": "black",
  "landing-button-text-secondary-hover": "black",
  "landing-button-text-primary": "black",
  "landing-button-text-secondary": "black",
  "landing-nav-item-text": "black",
  "landing-text-primary": "black",
  "landing-text-secondary": "black",
  "landing-text-gray": "#A5A7AB",
  "landing-bg-nav": "black",
  "landing-icon-bg": "#FFEB00",
  "landing-icon-text": "black",
};

const config: Config = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.4rem",
        sm: "0.6rem",
        base: "0.8rem",
        xl: "1.10rem",
        "2xl": "1.25rem",
        "3xl": "1.50rem",
        "4xl": "2rem",
        "5xl": "3rem",
      },
      colors: {
        surface: "var(--surface-ground)",
        "surface-section": "var(--surface-section)",
        "surface-card": "var(--surface-card)",
        overlay: "var(--surface-overlay)",
        border: "var(--surface-border)",
        hover: "var(--surface-hover)",
        text: "var(--text-color)",
        "text-secondary": "var(--text-color-secondary)",
        primary: "var(--primary-color)",
        "primary-text": "var(--primary-color-text)",
        "surface-0": "var(--surface-0)",
        "surface-50": "var(--surface-50)",
        "surface-100": "var(--surface-100)",
        "surface-200": "var(--surface-200)",
        "surface-300": "var(--surface-300)",
        "surface-400": "var(--surface-400)",
        "surface-500": "var(--surface-500)",
        "surface-600": "var(--surface-600)",
        "surface-700": "var(--surface-700)",
        "surface-800": "var(--surface-800)",
        "surface-900": "var(--surface-900)",
        // ...LANDING_MAIN_COLORS,
        ...LANDING_SECONDARY_COLORS,
      },
      fontFamily: {
        sans: "var(--font-family)",
      },
      spacing: {
        inline: "var(--inline-spacing)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      boxShadow: {
        focus: "var(--focus-ring)",
      },
      backgroundColor: {
        mask: "var(--mask-bg)",
        highlight: "var(--highlight-bg)",
      },
      textColor: {
        highlight: "var(--highlight-text-color)",
      },
      gridTemplateColumns: {
        navbar: "250px 1fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
