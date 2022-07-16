const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();
cloudinary.config({
  cloud_name:process.env.CLOUND_NAME,
  api_key: process.env.CLOUND_API_KEY,
  api_secret:process.env.CLOUND_API_SECRET_KEY,
});

module.exports = cloudinary;
