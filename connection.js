const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
MongoDBURI = require("./config.js").MongoDBURI

mongoose.connect(MongoDBURI, {useNewUrlParser: true});

mongoose.connection.once("open", () => {
    console.log("Connection Successful");
  }).on("error", (e) => {
    throw new Error("MongoDB Connection Unsuccessful")
  });

  module.exports = mongoose.connection