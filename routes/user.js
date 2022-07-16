const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../model/user");
router.post("/", upload.single("image"), async (req, res) => {
  try {
    
    const result = await cloudinary.uploader.upload(req.file.path);
  
    let user = new User({
      name: req.body.name,
      avatar: result.secure_url,
      Description: req.body.description,
    });
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});
router.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
