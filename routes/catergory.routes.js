const router=require('express').Router();
const {postSuperItems,postChildItems,postSubItems,getItems}=require('../controller/catergory.controller');
router.post('/supercategory',postSuperItems);
router.post('/subitems',postSubItems);
router.post('/childitem',postChildItems);
router.get('/getcategory',getItems);
module.exports=router;