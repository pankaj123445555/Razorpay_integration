const express = require('express');
const app = express();

require('dotenv').config();
const Port = process.env.Port || 5000;
// console.log(process.env.PORT);
app.use(express.json());
const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: process.env.API_KEY,  key_secret: process.env.SECRET_KEY });

app.post('/webhook', (req,res)=>{
  console.log('pankaj',req.body);
})


app.post('/create/orderId', async (req,res)=>{
  console.log(req.body);
  var options = {
    amount: 50000,  
    currency: "INR",
    receipt: "order_rcptid_11"
  };

 const data =  await instance.orders.create(options);

  res.status(200).send({data});
})


app.listen(Port, ()=>{
  console.log(`server is listening on the port ${process.env.Port}`);
})