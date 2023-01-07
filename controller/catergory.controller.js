const {superItems,childItems,subItems,getAllItems}=require('../service/category.serive')
const postSuperItems=async(req,res)=>{
  try{
    const result=await superItems(req.body); 
    console.log(result,"result");
    res.status(200).json(result);
  }
  catch(err){
    res.status(404).json({message:err})
  }
}
const postChildItems=async(req,res)=>{
  try{
    const result=await childItems(req.body); 
    console.log(result,"result");
    res.status(200).json(result);
  }
  catch(err){
    res.status(404).json({message:err})
  }
}
const postSubItems=async(req,res)=>{
  try{
    const result=await subItems(req.body); 
    console.log(result,"result");
    res.status(200).json(result);
  }
  catch(err){
    res.status(404).json({message:err})
  }  
}
const getItems=async(req,res)=>{
  try{ console.log("a");
    const result=await getAllItems();
    console.log("b",result);

    res.status(200).json({message:result});
  }
  catch(err)
  {
    res.status(404).json({message:err});
  }
}
module.exports={
    postSuperItems,
    postChildItems,
    postSubItems,
    getItems
}