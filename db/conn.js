const mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/formdata')
const dbb="mongodb+srv://puneetsuperstar_312:9958507308am@cluster0.sxdg3.mongodb.net/form?retryWrites=true&w=majority";
mongoose.connect(dbb)
    .then(() => {
        console.log("CONNECTION OPEN!!!!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!!!")
        console.log(err);
    })