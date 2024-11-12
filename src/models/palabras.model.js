import mongoose from "mongoose";

//Declaramos un schema con moongose para las validaciones en la base de datos
const validaciones=
{
    type:String,
    required:true
};

const palabraSchema = new mongoose.Schema(
    {
        español:validaciones,
        romaji:validaciones,
        japohk:validaciones,
        /*user: 
        {
            //el id que da mongo en cada archivo no es de tipo string, es de tipo ObjectId
            type:mongoose.Schema.Types.ObjectId,
            //ref, de que hace referencia a la coleccion de usuarios del schema de usuario
            ref:'Usuario',
            required:true
        }*/
    }
); 

//Con mongoose.model podemos hacer CRUD con las validaciones del schema en un modelo llamado 'Palabra'
export default mongoose.model('Palabras', palabraSchema);