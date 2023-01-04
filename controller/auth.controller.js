
const {signup,login,generateToken}=require('../service/auth.service.js');
const postSignup=async(req,res)=>{
    const {username,email,password}=req.body;

    try{ console.log("yes");
        const result=await signup(req.body);
        console.log("result",result);
        res.status(200).json(result);
    }
    catch(err){
      res.status(422).json(err);
    }

}
const postLogin=async(req,res)=>{
    try{
        const {username,password}=req.body;
     const result=await login(username,password);
     console.log(result,"controller123");
     if(result)
     {  console.log("ccccc",result[0]._id);
        const token= await generateToken(result[0]._id);
        console.log("token12",token);
        // res.cookie("token",token,{
        //     maxAge:60*60*1000,
        //     httpOnly:true
        // })
     res.status(200).json({username,isLogged:true,token});}
     else
     {
        res.json({message:"incorrect password"});
     }
    }catch(err)
    {
        res.json(err);
    }
}
const discussion=async(req,res)=>{
res.status(200).json({message:"json web token login succesfull"});

}
module.exports={
    postSignup:postSignup,
    postLogin:postLogin,
    discussion:discussion
} 