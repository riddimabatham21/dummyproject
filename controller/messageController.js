const router = require("express").Router();
const Message = require("./../models/message"); // capitalize model names by convention
const Chat = require("./../models/chat");

const authMidd = require("./../middleware/authMiddleWare");

router.post("/new-message", authMidd, async (req, res) => {
  try {
    // Save the new message document
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();

    // Update the chat document with lastMessage and increment unreadMessageCount
    const currentChat = await Chat.findOneAndUpdate(
      { _id: req.body.chatId }, // try both keys, depending on your client
      {
        lastMessage: savedMessage._id,
        $inc: { unreadMessageCount: 1 }, // fixed spelling
      },
      { new: true } // return the updated document
    );

    if (!currentChat) {
      return res.status(404).send({
        success: false,
        message: "Chat not found",
      });
    }

    res.status(201).send({
      message: "Message sent successfully",
      success: true,
      data: currentChat,
    });
  } catch (e) {
    console.error(e.message);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
});

router.get("/get-all-messages/:chatId", authMidd, async (req, res) => {
  try {
    let getAllChats = await Message.find({ chatId: req.params.chatId }).sort({
      createdAt: 1,
    });
    res.status(201).send({
      message: "message fetch successfully",
      success: true,
      data: getAllChats,
    });
  } catch (e) {
    res.status(201).send({
      message: "message  unsuccessfully",
      success: false,
      data: [],
    });
    console.log(e.message);
  }
});
module.exports = router;
