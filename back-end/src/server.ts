import app from ".";
import {connection} from './db_connection';

connection()

app.listen(process.env.PORT, () => {
    console.log('Port running in port', process.env.PORT);
})