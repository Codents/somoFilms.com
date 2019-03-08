module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
