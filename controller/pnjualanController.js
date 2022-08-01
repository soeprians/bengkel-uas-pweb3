const pnjualan = require("../model/pnjualan");

exports.getData=async (req,res,next)=>{

   const dataPnjualan= await pnjualan.find();
    res.status(200).json({
        success:true,
        data:dataPnjualan
    })
}

exports.postData=async (req,res,next)=>{
    const dataPnjualan = new pnjualan(req.body);
    try {
         await dataPnjualan.save();
         res.status(200).json({
            success:true,
            data:dataPnjualan
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
    const namapelanggan=req.body.namapelanggan
    await pnjualan.updateOne({_id:id},req.body);
    res.status(200).json({
        success:true,
        data:"update success "
    });
}

exports.delete= async(req,res,next)=>{
    const id=req.params.id
    await pnjualan.deleteOne({_id:id});
    res.status(200).json({
        success:true,
        data:"delete success"
    });
}