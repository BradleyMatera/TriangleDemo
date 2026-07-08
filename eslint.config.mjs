import next from "eslint-config-next";

const config = [
  {
    ignores: ["docs/**", ".next/**", "node_modules/**"]
  },
  ...next,
  {
    rules: {
      "react/jsx-props-no-spreading": "off",
      "react-hooks/set-state-in-effect": "off"
    }
  }
];

export default config;
