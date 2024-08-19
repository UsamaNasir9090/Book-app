const mongoose = require("mongoose");
const uri =
  "mongodb+srv://chusama727:l1f21bscs0136@cluster0.icsjdut.mongodb.net/bookStore";
mongoose
  .connect(uri)
  .then(() => console.log("database is connected"))
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose;
