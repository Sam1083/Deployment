const Daraz=require("../Model/daraz.model")

exports.store=async(req,res)=>{
    try{
    const daraz =await Daraz.create(req.body)
    res.json({message:"Daraz Created Successfully",status:201,success:true,daraz})
}
catch(err){
    console.log(err)
}
}

exports.index=async(req,res)=>{
try{
    const daraz =await Daraz.find()
    res.json({message:"Daraz Fetched Successfully",status:200,success:true,daraz})
}
catch(err){
    console.log(err)
}
}

exports.get=async(req,res)=>{
    try{
        const daraz =await Daraz.findOne({_id:req.params.id})
        if(!Daraz){
res.json({message:"Daraz not found",status:404,success:false})
        }
        res.json({message:"Daraz Fetched Successfully",status:200,success:true,daraz})
    }
    catch(err){
        console.log(err)
    }
    }

    exports.destroy=async(req,res)=>{
        try{
            const daraz =await Daraz.findOneAndDelete({_id:req.params.id})
            if(!daraz){
    res.json({message:"Daraz not found",status:404,success:false})
            }
            res.json({message:"Daraz Deleted Successfully",status:200,success:true})
        }
        catch(err){
            console.log(err)
        }
        }

        exports.update=async(req,res)=>{
            try{
                const daraz =await Daraz.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                if(!daraz){
        res.json({message:"Daraz not found",status:404,success:false})
                }
                res.json({message:"Daraz Updated Successfully",status:200,success:true,daraz})
            }
            catch(err){
                console.log(err)
            }
            }