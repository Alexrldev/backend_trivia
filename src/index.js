import app from './app.js';
import { connectDB } from './db.js';
import { PUERTO } from './config.js';

connectDB();
app.listen(PUERTO,()=>
{
    console.log('Servidor inicializado en '+PUERTO);
});