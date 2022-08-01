const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pnjualan = new Schema(
  {
    namapelanggan: {
      type: String
    },
    namaproduk: {
      type: String
    },
    namapegawai: {
      type: String
    },
    tglpenjualan: {
      type: String
    }
  }
);
module.exports = mongoose.model("penjualan", pnjualan);