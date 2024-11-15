import Login from "../models/login.model.js";
import bcrytpjs from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";
import  jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const registroUsu= async(req, res)=>
{
    const {usuario, password}=req.body;
    try
    {
        //encriptamos password
        const passwordHash=await bcrytpjs.hash(password, 10);
        
        const usuarioLogin= new Login({usuario, password:passwordHash});
        const usuarioLoginSaved= await usuarioLogin.save();
        //console.log(usuarioLogin, usuarioLoginSaved);

        const token= await createAccesToken({id:usuarioLoginSaved._id});
        //nombre de la cookie, su info
       
        res.cookie("token",token, {httpOnly:true, sameSite:none, secure:true});
        res.send("Usuario creado");

       /* jwt.sign({id:usuarioLoginSaved._id}, "secret",{expiresIn:"1d"}, (err,token)=>
        {
            if(err)
                console.log(err);
            else
            {
                res.cookie('token', token);
                res.send("Usuario creado.");  
            }
        });*/
        
        //res.json("Listo!!!");
    }
    catch(error)
    {
        res.status(500).send(error.message);
    }
}


export const login= async(req, res)=>
{
    const {usuario, password}=req.body;
    try
    {
        const userFound=await Login.findOne({usuario});

        if(!userFound)
            return res.status(400).send("Credenciales no válidas")

        const passwordMatch=await bcrytpjs.compare(password, userFound.password);

        if(!passwordMatch)
            return res.status(400).send("Credenciales no válidas");

        /*if(!userFound||!passwordMatch)
            res.status(400).send("Credenciales no válidas");*/

        const token= await createAccesToken({id:userFound._id});
        //nombre de la cookie, su info
        res.cookie("token",token);

        res.json({usuario:userFound.usuario});

        /* jwt.sign({id:usuarioLoginSaved._id}, "secret",{expiresIn:"1d"}, (err,token)=>
        {
            if(err)
                console.log(err);
            else
            {
                res.cookie('token', token);
                res.send("Usuario creado.");  
            }
        });*/
        
        //res.json("Listo!!!");
    }
    catch(error)
    {
        res.status(500).send(error.message);
    }
}

export function logout(req, res)
{   
    res.cookie("token","", {expire: new Date(0)});
    return res.sendStatus(200);
}


export const verifyToken= async(req,res)=>
{
    const {token}=req.cookies;
    
    if(!token) 
        return res.status(401).send('No autprozado');
    //desciframos el token con jwt.verify con el token y la palabra secreta
    jwt.verify(token, TOKEN_SECRET, async (err, user)=>
    {
        try
        {
            if(err)
                return res.status(401).send('No autorizado');
            //Al parecer nos devuelve un objeto que contiene el payload, aquí está dentro de user
            const userFound= await Login.findById(user.payload.id);
            if(!userFound)
                return res.status(401).send("No autorizado!");
            return res.json({usuario:userFound.usuario});
        }
        catch(e)
        {
            console.log(e);
            return res.status(500).send('Error desconocido... ');
        }
    })
}
