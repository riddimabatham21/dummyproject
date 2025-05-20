const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoedToken = jwt.verify(token, process.env.Seckret_key); //userId:user._Id
    req.user = { id: decoedToken.userId }; // Here you set req.user.id
    next(); //for the next middleware or an api
  } catch (e) {
    res.send({
      message: e.message,
      success: false,
    });
  }
};
