const mongoose=require('mongoose');
const superCategorySchema=mongoose.Schema({
    name:{type:String,required:true,unique:true} ,
  
},{timestamps:true});
const subCategorySchema=mongoose.Schema({
    name:{type:String,required:true,unique:true} ,
    category:{type:String,required:true},
},{timestamps:true});
const childCategorySchema=mongoose.Schema({
    name:{type:String,required:true,unique:true} ,
    category:{type:String,required:true},
    subcategory:{type:String,required:true}

},{timestamps:true});

const superCategoryModel=mongoose.model('superC',superCategorySchema);
const subCategoryModel=mongoose.model('subCategory',subCategorySchema);
const childCategoryModel=mongoose.model('childCategory',childCategorySchema);
module.exports= {
    superCategoryModel,
    subCategoryModel,
    childCategoryModel
}