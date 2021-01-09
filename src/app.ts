import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { InscriptionRoute } from "./routes/inscription";
import { paymentRoute } from "./routes/creditCard";



const app = express();
const path = require('path');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/register', InscriptionRoute);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user/cart', paymentRoute);



app.listen(8000, () => {
    console.log(`Server run to http://localhost:8000`);
})