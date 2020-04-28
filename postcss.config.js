module.exports = {
  plugins: [
    require('autoprefixer'),
    // require('postcss-nested'),
    require('postcss-pxtorem')({
      rootValue: 100,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}