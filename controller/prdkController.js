const prdk = require("../model/prdk");

exports.getData=async (req,res,next)=>{

   const dataPrdk= await prdk.find();
    res.status(200).json({
        success:true,
        data:dataPrdk
    })
}

exports.postData=async (req,res,next)=>{
    const dataPrdk = new prdk(req.body);
    try {
         await dataPrdk.save();
         res.status(200).json({
            success:true,
            data:dataPrdk
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            data:error
        })
    }
};

exports.update= async(req,res,next)=>{
    const id=req.params.id
    const namaproduk=req.body.namaproduk
    var data=
        {
    
        hargaproduk:"1000000",
        jenisproduk:"Aksesoris"
    }

    
    await prdk.updateMany({_id:{
        $in:[
            "62beba83a6b91aa10cc5545a", "62bfa949f8fce38852477aa4"]
    }},data);
    res.status(200).json({
        success:true,
        data:"Data produk berhasil di update"
    });
}

exports.delete= async(req,res,next)=>{
    const id=req.params.id
    await prdk.deleteOne({_id:id});
    res.status(200).json({
        success:true,
        data:"Data produk berhasil di delete"
    });
}