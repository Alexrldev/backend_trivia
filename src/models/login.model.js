import mongoose from "mongoose";

const usuarioLoginSchema= new mongoose.Schema(
    {
        usuario:{type:String, required:true},
        password:{type:String, required:true}
    }
)

export default mongoose.model('Usuario',usuarioLoginSchema);