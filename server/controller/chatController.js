const router = require("express").Router();

const authMidd = require("../middleware/authMiddleWare");
const chat = require("../models/chat");

router.post("/create-new-chat", authMidd, async (req, res) => {
  const chatting = new chat(req.body);
  const savesChat = await chatting.save();

  res.status(201).send({
    message: "chat created successfully",
    success: true,
    data: savesChat,
  });
});

router.post("/get-All-chat", authMidd, async (req, res) => {
  //   const chatting = new chat(req.body);

  const loggedUserId = req.user.id; // use data from auth middleware
  console.log(loggedUserId, "poornim");
  const allChats = await chat.find({ members: { $in: loggedUserId } });

  res.status(201).send({
    message: "chat fetched successfully",
    success: true,
    data: allChats,
  });
});

module.exports = router;
