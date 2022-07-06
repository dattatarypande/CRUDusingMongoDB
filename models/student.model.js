const mongoose=require('mongoose');
const validator=require('validator');
//const bcrypt=require('bcrypt');


const studentSchema=new mongoose.Schema({
    StudentName:{
        type:String,
        required:true,
        trim:true,
        uppercase:true,
        minLength:2,
        maxLength:30

    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error('Age Must Be In Positive Number');
            }
        }
        },
        

    password:{
        type:String,
        required:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error('Email is in valid')
            }
        },
        trim:true
    }
    
})

module.exports=mongoose.model('Student',studentSchema)
