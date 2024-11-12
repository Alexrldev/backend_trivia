//moongose lo usamos para conectar la base de datos con nuestro proyecto
import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export const connectDB= async()=>
{
    try
    {
        //await mongoose.connect("mongodb://localhost/vocabulario_japo");
        await mongoose.connect(MONGO_URI);
        console.log("La base de datos está conectada");
    }
    catch(error)
    {
        console.log(error);
    }
}