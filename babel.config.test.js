module.exports = {
  presets: [['@babel/preset-env', { modules: false, targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs'],
};