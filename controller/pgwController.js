const pgw = require("../model/pgw");

exports.getData=async (req,res,next)=>{

   const dataPgw= await pgw.find();
    res.status(200).json({
        success:true,
        data:dataPgw
    })
}

exports.postData=async (req,res,next)=>{
    const dataPgw = new pgw(req.body);
    try {
         await dataPgw.save();
         res.status(200).json({
            success:true,
            data:dataPgw
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
    const namapegawai=req.body.namapegawai
    await pgw.updateOne({_id:id},req.body);
    res.status(200).json({
        success:true,
        data:"update success "
    });
}

exports.delete= async(req,res,next)=>{
    const id=req.params.id
    await pgw.deleteOne({_id:id});
    res.status(200).json({
        success:true,
        data:"delete success"
    });
}