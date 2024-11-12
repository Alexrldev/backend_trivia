import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next)=>
{
    const {token}=req.cookies;
    
    if(!token)
       return res.status(401).send('No hay token, autorización denegada');
    jwt.verify(token, TOKEN_SECRET,(err, success)=>
    {
        if(err)
            return res.status(403).send("Token invalido");
        //el payload contiene el id del usuario del token (loggeado)
        //req.user=success.payload;
    });
    next();
}