const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plnggn = new Schema(
  {
    namapelanggan: {
      type: String
    },
    notlp: {
      type: Number
    },
    alamatpelanggan: {
      type: String
    },
    transaksi: {
      type: String
    }
  }
);
module.exports = mongoose.model("pelanggan", plnggn);