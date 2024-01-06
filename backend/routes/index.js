const express=require('express');

const villaDetailsRouter = require('./villaDetails.routes')
const authRouter = require('./auth.routes')
const bookingDetailsRouter = require('./bookingDetails.routes')



const router = express.Router();

router.use(villaDetailsRouter)
router.use(authRouter)
router.use(bookingDetailsRouter)




module.exports=router
