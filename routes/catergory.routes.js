const router=require('express').Router();
const {postSuperItems,postChildItems,postSubItems}=require('../controller/catergory.controller');
router.post('/supercategory',postSuperItems);
router.post('/subitems',postSubItems);
router.post('/childitem',postChildItems);
module.exports=router;