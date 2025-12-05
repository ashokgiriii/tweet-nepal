const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "tweet-nepal-uploads",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        public_id: (req, file) => Date.now().toString(),
    },
});

const upload = multer({ storage });
module.exports = upload;
