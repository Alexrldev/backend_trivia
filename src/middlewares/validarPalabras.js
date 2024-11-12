import mongoose from "mongoose";

export function validarParametros(req, res, next)
{
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Palabra no encontrada!');
    //parece que el next siempre va al final
    next();
}

export function validarPost(req, res, next) 
{
    const {español, romaji, japohk}=req.body;
    if(!validacion(español,romaji, japohk))
        return res.status(400).send("Error en los parametros");
    next();
}

function validacion(español, romaji, japohk)
{
    console.log(español,romaji,japohk);
    
    if(typeof español==="string"&&español.trim().length!==0&&typeof romaji==="string"&&romaji.trim().length!==0&&typeof japohk==="string"&&japohk.trim().length!==0)
        return true;
    else
        return false;
}
