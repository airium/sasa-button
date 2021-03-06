module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pwa: {
      name: 'しゃのあボタン',
      msTileColor: '#aa9cb5',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js'
      },
      themeColor: '#aa9cb5'
    },
}