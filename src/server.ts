import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import router from "./routes";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        dotenv.config({ path: './.env' });
        this.config();
        this.mongoDBConnection();
    }

    private config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(router);
    }

    private mongoDBConnection(): void {
        const connect = async () => {
            try {
                const con = process.env.MONGO_ENDPOINT || "";
                await mongoose.connect(con, {
                    useNewUrlParser: true,
                    useFindAndModify: true
                });
                console.log('MongoDB Connected')
            } catch (e) {
                console.log(e);
                throw e;
            }
        }
        connect();
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening at port ${this.app.get('port')}`)
        })
    }
}

const server = new Server();

server.start();
