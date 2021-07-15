const NODE_ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production';

module.exports = {
  publicPath: NODE_ENV === 'production'
    ? process.env.PRODUCTION_URL
    : process.env.BASE_URL,
};
