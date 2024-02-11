const mongoose=require("mongoose");

const darazSchema=mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:"",
    },
    price:{
        type:String,
        default:"",
    },
    discount:{
        type:String,
        default:"",
    },
    inStock:{
        type:Boolean,
        default:true
    }
  
},
{timestamp:true}
)

module.exports=mongoose.model("Daraz",darazSchema)