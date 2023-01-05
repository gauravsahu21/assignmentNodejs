const {superCategoryModel,subCategoryModel,childCategoryModel}=require('../model/supercategory.model.js');
const superItems=async(body)=>{
    try{
        console.log("0");
        const newCategory=new superCategoryModel({...body});
        console.log("1");
        const result=await newCategory.save();
        console.log("2");
        return result;
    }
    catch(err)
    {
        console.log(err,"Errrr");
        return err;
    }
}
const subItems=async(body)=>{
    try{
        console.log("0");
        const newCategory=new subCategoryModel({...body});
        console.log("1");
        const result=await newCategory.save();
        console.log("2");
        return result;
    }
    catch(err)
    {
        console.log(err,"Errrr");
        return err;
    }
}
const childItems=async(body)=>{
    try{
        console.log("0");
        const newCategory=new childCategoryModel({...body});
        console.log("1");
        const result=await newCategory.save();
        console.log("2");
        return result;
    }
    catch(err)
    {
        console.log(err,"Errrr");
        return err;
    }
}
module.exports={
    superItems,
    subItems,
    childItems
}