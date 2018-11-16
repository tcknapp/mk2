const environment = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT + 1 || 3001}/dist/`
  },
  production: {
    isProduction: true,
    assetsPath: '/dist/'
  }
}[process.env.NODE_ENV || 'development'];

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 27017,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 27017,
  mongodb: 'MONGODB_URI',
  app: {
    title: 'metroKnome',
    description: 'ticktock',
    head: {
      titleTemplate: 'mK',
    }
  }
};

Object.assign(config, environment);

export default config;
