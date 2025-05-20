const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      // select: false, //by slecting false it will noe show in response
      minlength: 8,
    },
    profilePic: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
