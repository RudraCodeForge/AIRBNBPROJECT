const express=require('express');

const UserRouter=express.Router();

UserRouter.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});
module.exports=UserRouter;