import express from "express";
import cors from 'cors';
import router from "../routes";
import bodyParser from 'body-parser';

const app = express();
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

export default app;
