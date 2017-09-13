var env = process.env.ENV || "development";
var config = require('./config.json')[env];

config.env = env;

module.exports = config;
