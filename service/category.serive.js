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
// const getAllItems=async()=>{
//     try{
//     const result=await superCategoryModel.find({});
//     console.log("result",result);
//     const {name:category,_id:id}=result[0];
//     const result2=await subCategoryModel.find({supercategory:id});
//     console.log(result2);
//     const {name:subcategory,_id:id1}=result2[0];
//     // const result1=await subCategoryModel.findOne({supercategory:result._id})
//     // console.log("result1",result1);
//     // const result3=await childCategoryModel.findOne(result1._id);
//     // console.log(result3,"result3");
//      const result3=await childCategoryModel.find({subcategory:id1});
//      console.log(result3);
//      const {name:childcategory}=result3[0];
     
//     return {category,id,subcategory,id1,childcategory};
//     }
//     catch(err)
//     {
//        return err;
//     }

// }
const getSubCayegory=async(superId,supercategoryName)=>{
    console.log(supercategoryName);
    const result=await subCategoryModel.find({supercategory:superId});

    // console.log("1",result);
    result.forEach(async(x)=>{
    //    const {name:subCategory,_id=id}=x;
    


        const ans=await getchildCayegory(x._id,supercategoryName,x.name);
        console.log(ans);
       
        
      
     

    })
  
   


}
const getchildCayegory=async(subId,supercategoryName,subcategoryName)=>{
    console.log(supercategoryName,subcategoryName);
    
    const result=await childCategoryModel.find({subcategory:subId});
   let s=result.map(x=>{
    return {name:x.name};

   })
   

  console.log("sd",s);
    const k={
        category:supercategoryName,
        subcategory:[
            {
                name:subcategoryName,
                childCategoryModel:result.map(x=>{
                    return {name:x.name};
                
                   })
            }
        ]

    }
    console.log("k",k);

    console.log("endddddd");


    // console.log("2",result);


}
const mergethem=(x)=>{

let arr={
    supername:x.subcategory.supercategory.name,
 subname:x.subcategory.name,
 childname:x.name,

}
console.log("1",arr);
return arr;

}

const getAllItems=async()=>{
    try{
    
const ans=await childCategoryModel.find()
.populate([{path:'subcategory',populate:{path:'supercategory'}}]);
const supercategoryItems=await superCategoryModel.find({});
const subcategoryItems=await subCategoryModel.find().populate('supercategory');
console.log("1",supercategoryItems);
console.log("2",subcategoryItems);
console.log(3,ans);
let final=[];
for(let i=0;i<ans.length;i++)
{
    final.push(mergethem(ans[i]));
}
console.log("ad",final);
let parent=final.map(x=>{
    return{"category":x.supername}
})
const result123 = parent.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.category === thing.category 
  ))
)

result123.map(x=>{
    let subA=[];
    let childA=[];
    final.map(y=>{
        if(x.category===y.supername)
        {
            subA.push({name:y.subname});

            
        }
    })
    console.log(subA,"checking");
    subA.forEach(z=>{
        let an=[];
        final.map(y=>{
            if(z.name===y.subname)
            {
              an.push({name:y.childname});  
            }
        })
        
        console.log(an,"An");
        z.childcategory=[an];
    })
    x.subcategory=[subA];
})

console.log(result123,"...");




return result123;
    }
    catch(err)
    {

    }
}
module.exports={
    superItems,
    subItems,
    childItems,
    getAllItems
}