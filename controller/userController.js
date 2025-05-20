const router = require("express").Router();
const Users = require("./../models/user");

const authMidd = require("./../middleware/authMiddleWare");
//Get the Details for current Logged-in-user

///get-logged-user
router.get("/LoginUser", authMidd, async (req, res) => {
  try {
    const getuserdetails = await Users.findOne({ _id: req.user.id });
    res.send({
      message: "userfech successfully",
      success: true,
      data: getuserdetails,
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/getAllUsers", authMidd, async (req, res) => {
  try {
    const allusers = await Users.find({ _id: { $ne: req.user.id } });
    res.send({
      message: "userfech successfully",
      success: true,
      data: allusers,
    });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
