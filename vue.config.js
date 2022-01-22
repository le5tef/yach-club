module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/yach-club/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
