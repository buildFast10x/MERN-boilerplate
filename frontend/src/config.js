// config.js
// const dotenv = require('dotenv');
// dotenv.config();

const env = process.env.REACT_APP_REACT_ENV;
// console.log(env);
const dev = {
    app: {
        url: process.env.REACT_APP_DEV_API_URL
    },
    googleLogin: {
        clientid: process.env.REACT_APP_GOOGLE_CLIENT_ID
    }
};

const test = {
    app: {
        url: process.env.REACT_APP_DEV_API_URL
    },
    googleLogin: {
        clientid: process.env.REACT_APP_GOOGLE_CLIENT_ID
    }
};

const production = {
    app: {
        url: process.env.REACT_APP_PROD_API_URL
    },
    googleLogin: {
        clientid: process.env.REACT_APP_GOOGLE_CLIENT_ID
    }
};

const config = {
 dev,
 test,
 production
};

module.exports = config[env];