import { StripeSK } from '../public/keys'

const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(StripeSK);


// API

// ~ App config
const app = express();

// ~ Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// ~ API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    //console.log('Payment Request Received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of certain currency (usd)
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// ~ Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/copy-42876/us-central1/api