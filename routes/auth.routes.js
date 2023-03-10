const router=require('express').Router();
const {postSignup,postLogin,discussion}=require('../controller/auth.controller.js');
const validateSchema=require('../middleware/validate.js');
const {loginValidationSchema,signupValidationSchema}=require('../validate/auth.validate.js');
const validateSignup=validateSchema(signupValidationSchema);
const validateLogin=validateSchema(loginValidationSchema);
const passport=require('passport');
const authenticate=passport.authenticate("jwt",{session:false});
router.post('/signup',validateSignup,postSignup);
router.post('/login',validateLogin,postLogin);
router.get('/disc',authenticate,discussion);

module.exports=router;