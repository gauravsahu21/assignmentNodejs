const authModel=require('../model/auth.model.js');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const signup=async(body)=>{
   try{ 
    console.log("body",body);
    const {password}=body;
    console.log(password);
    const hashedPassword=await encryptPassword(password);
    console.log("hash",hashedPassword);
    const newUser=new authModel({...body,password:hashedPassword});
    const result=await newUser.save();
    console.log("user");

    return result;
}
    catch(err)
    {
        throw error;
    }
}
const login=async(username,password)=>{
  
    try{
     const user=await authModel.find({username});
     console.log("user",user);
    
     const result=await bcrypt.compareSync(password,user[0].password)
     if(result)
     {console.log(result,user[0]._id);
          
         return {
             isLogged:true,
             ...user,
             
             
         }
     }
     else
     {
         return null;
     }
    }
    catch(error)
    {
       throw error;
    }
 
 
 }
const encryptPassword=async(password)=>{
    console.log("yes12")
    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(password,salt);
    return hashedPassword;
}

const generateToken=async(userId)=>{
    try{
        console.log("userIDgaurav",userId);
        const payload={userId};
        const options={expiresIn:"1h"};
        const token=jwt.sign(payload,"secret",options);
        return token;

    }
    catch(err)
    {
        return err;
    }
};
const findById=async(id)=>{
    try{
        const user=await authModel.findById(id);
        return user;

    }catch(error)
    {
       throw error;
    }
}

module.exports={
    signup:signup,
    encryptPassword,
    login,
    generateToken,
    findById
}