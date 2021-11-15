const configs = {
  development: {
    SERVER_URI: 'localhost:8000',
  },
  production: {
    SERVER_URI: 'https://petland-app.herokuapp.com',
  },
};

module.exports.config = configs[process.env.NODE_ENV];