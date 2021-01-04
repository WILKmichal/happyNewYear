import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { InscriptionRoute } from "./routes/inscription";

config(); //process.env
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/register', InscriptionRoute);

app.listen(8888, () => {
    console.log(`Server run to http://localhost:8888`);
})