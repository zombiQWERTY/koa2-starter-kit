require('babel-core/register')({
  presets: ['stage-0', 'es2015-node5'],
  plugins: [
    'transform-runtime',
    'syntax-async-functions',
    'transform-class-properties'
  ]
});
