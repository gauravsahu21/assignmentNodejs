const mongoose=require('mongoose');
const superCategorySchema=mongoose.Schema({
    name:{type:String,required:true,unique:true} ,

  
});
const subCategorySchema=mongoose.Schema({
    name:{type:String,required:true,unique:true} ,
    supercategory:{type:mongoose.Schema.Types.ObjectId,ref:'superC',required:true}

});
const childCategorySchema=mongoose.Schema({
    name:{type:String,required:true,unique:true} ,
subcategory:{type:mongoose.Schema.Types.ObjectId,ref:'subCategory',required:true}
});

const superCategoryModel=mongoose.model('superC',superCategorySchema);
const subCategoryModel=mongoose.model('subCategory',subCategorySchema);
const childCategoryModel=mongoose.model('childCategory',childCategorySchema);
module.exports= {
    superCategoryModel,
    subCategoryModel,
    childCategoryModel
}