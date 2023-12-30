const express=require('express');

const villaDetailsRouter = require('./villaDetails.routes')
const authRouter = require('./auth.routes')



const router = express.Router();

router.use(villaDetailsRouter)
router.use(authRouter)




module.exports=router
