const express=require('express');
const router =express.Router() 
const Student=require('../models/student.model');


//insert record
router.post('/',async(req,res)=>{
    const student=new Student({
        StudentName:req.body.StudentName,
        age:req.body.age,
        password:req.body.password,
        email:req.body.email
    })
    try{
        const s1=await student.save()
    res.json(s1)
    }catch(err){
        res.send('Error');
    }
})



module.exports=router
