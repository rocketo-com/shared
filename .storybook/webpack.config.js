const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = function({ config }) {
  config.module.rules.unshift(
    {
      test: /\.stories\.js$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /.svg$/,
      loader: 'svg-sprite-loader',
    },
  );

  // This strange piece of code fixed wrong svg-sprite building
  // https://github.com/storybookjs/storybook/issues/6758#issuecomment-495598635
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test.toString().includes('svg')) {
      const test = rule.test
        .toString()
        .replace('svg|', '')
        .replace(/\//g, '');
      return { ...rule, test: new RegExp(test) };
    } else {
      return rule;
    }
  });

  config.plugins.unshift(
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  );

  return config;
};
