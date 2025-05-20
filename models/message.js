const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({
  chatId: {
    // for which message is sent
    type: mongoose.Schema.Types.ObjectId, //
    ref: "chats",
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("message", messageSchema);

// chatId: This references the chat this message belongs to.
// 🔸 type: ObjectId → it's a link to another document (a Chat).
// 🔸 ref: "chats" → it refers to the chats collection (must match the name used in mongoose.model() for your chat schema).

// 🔹 sender: This references the user who sent the message.
// 🔸 It's also an ObjectId referencing the users collection.

