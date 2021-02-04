const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
};
