const mongoose = require("mongoose");

mongoose.connect(process.env.mongoURI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("DB connection successfull");
});

//Monoose is an object Data mODELING  LIBRABRY USED FOR MONGODB AND NODE JS PROVIDING HIGHER LEVEL OF ABSTRACTION ODM IS TECHNIQUE WHICH IS USED TO  REPRESENT DATA AS AN OBJECT IN A PROGRAMMING LANGUAGE

//Schema decsribed  how the data will look for  ex which type of value  it   will store and which values are allowed or not

db.on("err", () => {
  console.log("DB connection failed");
});
module.exports = db;
