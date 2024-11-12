import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js"

export function createAccesToken(payload)
{
    return new Promise((resolve,reject)=>
    {
        //con el callback se vuelve asincrono
        jwt.sign({payload},TOKEN_SECRET,{expiresIn:"1d"}, 
        (err,token)=>
        {
            if(err)
                reject(err);
            resolve(token);
        });
    });
}

