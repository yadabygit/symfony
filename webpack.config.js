var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')

  .addEntry('base', './assets/js/base.js')
  .addEntry('index', './assets/js/index.js')

  .splitEntryChunks()

  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  .enableSassLoader()
  .enablePostCssLoader()

  .enableReactPreset()

  .copyFiles({
    from: './assets/images',
    to: 'images/[path][name].[ext]',
    pattern: /\.(png|svg|jpg|jpeg|gif|ico)$/
  })
;

module.exports = Encore.getWebpackConfig();
