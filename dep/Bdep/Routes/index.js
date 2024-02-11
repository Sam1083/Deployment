const express=require("express")
const router=express.Router();
const darazRoute=require("./daraz.route")
const userDataRoute=require("./userdata.route")



router.use("/daraz",darazRoute)
router.use("/userData",userDataRoute)



module.exports=router;
