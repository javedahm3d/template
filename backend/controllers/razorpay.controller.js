const app = require('express')()
const { formResponse } = require("../utils/helper");
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const razorpay = new Razorpay({
	key_id: 'rzp_test_MNE13AD2fvw6X1',
	key_secret: 'AlM4miplpziG7QsDTZ9NSOTV'
})



exports.paymentuser = async (req, res) => {

	const amount = req.query.amount;
	console.log(amount);


    const payment_capture = 1
	// const amount = 20
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture,
        
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}


};