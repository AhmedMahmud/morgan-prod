module.exports = function morganProd (req, res, next) {
  console.log('Request received')
  next()
}
