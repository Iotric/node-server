const env = process.env.NODE_ENV || 'development'; // 'dev' or 'prod'

const dotenv = require('dotenv');
const envFound = dotenv.config();

if (!envFound) {
  // This error  crash whole process
  throw new Error("Couldn't find .env file .️");
}

const development = {
  app: {
    port: 8000
  },
  db: {
    host: process.env.host || 'localhost',
    port: 27017,
    database: process.env.database || 'server',
    username: process.env.dbUser || '',
    password: process.env.dbPassword || ''
  }
};

const production = {
  app: {
    port: 8000
  },
  db: {
    host: '',
    port: 27017,
    database: '',
    username: '',
    password: ''
  }
};

const staging = {
  app: {
    port: 8000
  },
  db: {
    host: '',
    port: 27017,
    database: '',
    username: '',
    password: ''
  }
};
const config = {
  development,
  production,
  staging
};

module.exports = config[env];
