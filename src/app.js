//aqui van todas la config de app

import express from "express";
import cookieParser from "cookie-parser";
//sirve para permitir que otros (o todos) se puedan comunicar con mi backend
import cors from "cors"
import router from "./routes/auth.routes.js";
import palabraRouter from "./routes/palabras.routes.js"
import bodyParser from "body-parser";

const app=express();

/*app.use(cors({
    //tambien podemos especificar desde que sitios tiene permitido comunicarse y las credenciales en true para establecer las cabeceras en el navegador (incluyendo cookies)
    //origin:"http://localhost:5173",
    origin:"http://187.221.137.0:5173",
    credentials:true
}));*/
app.use(cors());
app.use((req,res)=>
    {
     res.header("Access-Control-Allow-Origin", "http://187.221.137.0:5173");   
    });
//express.json() es para que express pueda recibir datos en formato JSON
app.use(express.json());
//para poder leer y manipular cookies, creo
app.use(cookieParser());




app.use('/api',router);
app.use('/api', palabraRouter);


export default app;
