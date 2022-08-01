const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const prdk = new Schema(
  {
    namaproduk: {
      type: String
    },
    hargaproduk: {
      type: Number
    },
    jenisproduk: {
      type: String
    }
  }
);
module.exports = mongoose.model("produk", prdk);