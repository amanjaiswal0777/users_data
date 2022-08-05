const express=require('express');
const { urlencoded } = require('express');
require("./db/conn");
const form=require("./model/form");
const path=require('path');

const port=process.env.PORT||8000;
const app=express();
const views_path=path.join(__dirname,"/template/views")
const css_path=path.join(__dirname,"./public")
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(css_path));
app.set("view engine","ejs");
app.set("views",views_path);

app.get('/',function(req,res)
{
    return res.render('index');   
});

app.post('/home',async(req,res)=>
{
    try{
       const formentry=new form({
        name:req.body.name,
        number:req.body.number,
        age:req.body.age,
        gender:req.body.gender,
        qualification:req.body.qualification,
        eight:req.body.eight,
        fav:req.body.fav,
        mood:req.body.mood,
        discription:req.body.discription
       })
       const formsaved=await formentry.save();
       return res.status(201).render('home');

    }
    catch(e){
        res.status(400).send(error);
    }
});

app.listen(port,(e)=>{  
    if(e){
        console.log("error");
    }
    console.log("server establish");
});