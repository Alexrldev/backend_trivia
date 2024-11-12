import loginModel from "../models/login.model.js";
import Palabra from "../models/palabras.model.js"; 

export async function form(req, res)
{
    const {español, romaji, japohk}=req.body;
    
    try
    {
        const userFound= await loginModel.findById(req.user.id)
        const newPalabra= new Palabra({español,romaji,japohk});
        await newPalabra.save();
        //console.log(req.body, newPalabra); 
        res.json({español:newPalabra.español, romaji:newPalabra.romaji, japohk:newPalabra.japohk, id:userFound._id, nombre:userFound.usuario});
    }
    catch(error)
    {
        res.status(500).send(error.message);
    }
    
}