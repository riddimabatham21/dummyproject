const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    // chat happens between two users
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    unreadMesageCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("chats", chatSchema);
