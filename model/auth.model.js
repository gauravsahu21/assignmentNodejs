const mongoose=require('mongoose');
const authSchema=mongoose.Schema({
     name:{type:String,required:true,maxLength:20},
    username:{type:String,required:true,maxLength:50,unique:true},
    phone:{type:String,required:true,maxLength:10,minLength:10},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const authModel=mongoose.model('auth',authSchema);
module.exports=authModel;