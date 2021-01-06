import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { InscriptionRoute } from "./routes/inscription";

config(); //process.env
const app = express();
const path = require('path');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/register', InscriptionRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log(`Server run to http://localhost:3000`);
})