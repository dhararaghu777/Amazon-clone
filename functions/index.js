const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
// eslint-disable-next-line max-len
const stripe=require("stripe")("sk_test_51Is4JCSDcFXt3JV7XiG30mYkhseWFjDjGje3EpqH0HDKvBwyxI6oHzte96GLFpzV4FxsJIvr5n6rWrbmqiB0Ee8C00RxLti5Xq");

// API

// -api config
const app=express();

// _Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// API routes

app.get("/", ( req, res)=>res.status(200).send("Hello "));

app.post("/payments/create", async ( request, response)=>{
  const total=request.query.total;
  console.log("Payment>>>>", total);
  const paymentIntent=await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// Listen command
exports.api=functions.https.onRequest(app);

// endpoint url : http://localhost:5001/clone-2534d/us-central1/api

