import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04060d",
        navy: "#0a1020",
        panel: "#0e1630",
        line: "rgba(148,163,209,0.16)",
        mute: "#a9b4d0",
        electric: "#3b6bff",
        violet: "#8b5cf6",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        bar: { "0%,100%": { transform: "scaleY(0.55)" }, "50%": { transform: "scaleY(1)" } },
        travel: { "0%": { left: "0%" }, "100%": { left: "100%" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bar: "bar 3.2s ease-in-out infinite",
        travel: "travel 4s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
