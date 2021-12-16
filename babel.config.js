module.exports = (api) => {
  api.cache(true);


  const presets = [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 0.25%", "not ie <= 10", "not op_mini all"],
        },
        modules: false,
      },
    ],
  ];

  return {
    presets,
  };
};
