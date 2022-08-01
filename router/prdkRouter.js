const exp = require("express");
const { body } = require("express-validator")
const router = exp.Router();
const prdkController =require("../controller/prdkController");
const plnggnController =require("../controller/plnggnController");
const pgwController =require("../controller/pgwController");
const pnjualanController =require("../controller/pnjualanController");


//Tabel Produk
router.get("/getObjPrdk",prdkController.getData);
router.post("/postObjPrdk",prdkController.postData);
router.delete("/deleteObjPrdk/:id",prdkController.delete);
router.post("/updateproduk/:id",prdkController.update);

//Tabel Pelanggan
router.get("/getObjPlnggn",plnggnController.getData);
router.post("/postObjPlnggn",plnggnController.postData);
router.delete("/deleteObjPlnggn/:id",plnggnController.delete);
router.post("/updatepelanggan/:id",plnggnController.update);

//Pegawai
router.get("/getObjPgw",pgwController.getData);
router.post("/postObjPgw",pgwController.postData);
router.delete("/deleteObjPgw/:id",pgwController.delete);
router.post("/updatepegawai/:id",pgwController.update);

//Penjualan
router.get("/getObjPnjualan",pnjualanController.getData);
router.post("/postObjPnjualan",pnjualanController.postData);
router.delete("/deleteObjPnjualan/:id",pnjualanController.delete);
router.post("/updatepenjualan/:id",pnjualanController.update);

module.exports=router;