const mongoose=require('mongoose')

const formDatasch=new mongoose.Schema({
    name:{
        type:String,
    },
    number:String,
    email:String,
    age:String,
    gender:String,
    qualification:String,
    eight:String,
    fav:String,
    mood:String,
    discription:String

});

const Formdatamod=new mongoose.model("DATAFROMFORM",formDatasch);

module.exports=Formdatamod;