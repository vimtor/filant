/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        transformOptions: {
          presets: ['@babel/preset-react'],
          plugins: ['babel-plugin-filant'],
        },
      },
    ],
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
}
