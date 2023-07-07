// config.js
const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV;

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT)
 },
 db: {
   host: process.env.DEV_DB_HOST,
   name: process.env.DEV_DB_NAME,
   username: process.env.DEV_DB_USERNAME,
   password: process.env.DEV_DB_PASSWORD
 },
 payment: {
   key: process.env.DEV_RAZORPAY_KEY_ID,
   secret: process.env.DEV_RAZORPAY_KEY_SECRET
 }
};

const test = {
 app: {
   port: parseInt(process.env.TEST_APP_PORT)
 },
 db: {
   host: process.env.TEST_DB_HOST ,
   name: process.env.TEST_DB_NAME,
   username: process.env.TEST_DB_USERNAME,
   password: process.env.TEST_DB_PASSWORD
 }
};

const production = {
 app: {
   port: parseInt(process.env.PROD_APP_PORT)
 },
 db: {
   host: process.env.PROD_DB_HOST ,
   name: process.env.PROD_DB_NAME,
   username: process.env.PROD_DB_USERNAME,
   password: process.env.PROD_DB_PASSWORD
 },
 payment: {
   key: process.env.PROD_RAZORPAY_KEY_ID,
   secret: process.env.PROD_RAZORPAY_KEY_SECRET
 }
};

const config = {
 dev,
 test,
 production
};

module.exports = config[env];