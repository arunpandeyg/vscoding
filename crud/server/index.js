import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/routes.js';
import bodyParser from 'body-parser';


const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', routes)

const port = 8080;
const username = process.env.db_username;
const password = process.env.db_password;

Connection(username, password);
app.listen(8080, () => console.log(`server is running on ${port}`));
