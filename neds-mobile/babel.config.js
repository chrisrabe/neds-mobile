module.exports = {
  presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".js", ".jsx", ".ios.js", ".android.js"],
        alias: {
          "@neds": "./src",
          "@assets": "./assets",
        },
      },
    ],
    "jest-hoist",
  ],
};
