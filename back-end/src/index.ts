import exp, { Express } from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import {router} from './router/main'

const app: Express = exp();

app.use(bodyParser.json());
app.use(exp.json());
app.use(cors());


app.use('/notes',router);


export default app;