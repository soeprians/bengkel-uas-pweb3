const plnggn = require("../model/plnggn");

exports.getData=async (req,res,next)=>{

   const dataPlnggn= await plnggn.find();
    res.status(200).json({
        success:true,
        data:dataPlnggn
    })
}

exports.postData=async (req,res,next)=>{
    const dataPlnggn = new plnggn(req.body);
    try {
         await dataPlnggn.save();
         res.status(200).json({
            success:true,
            data:dataPlnggn
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
    await plnggn.updateOne({_id:id},req.body);
    res.status(200).json({
        success:true,
        data:"update success "
    });
}

exports.delete= async(req,res,next)=>{
    const id=req.params.id
    await plnggn.deleteOne({_id:id});
    res.status(200).json({
        success:true,
        data:"delete success"
    });
}