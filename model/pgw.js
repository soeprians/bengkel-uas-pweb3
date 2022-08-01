const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pgw = new Schema(
  {
    namapegawai: {
      type: String
    },
    statuspegawai: {
      type: String
    }
  }
);
module.exports = mongoose.model("pegawai", pgw);