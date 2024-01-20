import antfu from "@antfu/eslint-config";

export default await antfu({
  stylistic: false,
  vue: {
    vueVersion: 2,
  },
  ignores: ["**/vendor/**", "index.js"],
});
