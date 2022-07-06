const express=require('express');
const mongoose=require('mongoose');
const url='mongodb://localhost/dattadata'


const app=express()

mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected....');
})

app.use(express.json())

const studentRouter=require('./routes/student.routes');
app.use('/students',studentRouter);


app.listen(7000,()=>{
    console.log('Server Connected');
})