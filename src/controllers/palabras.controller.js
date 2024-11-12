import Palabra from "../models/palabras.model.js"

export const getPalabras= async (req, res)=>
{
    const palabras= await Palabra.find();
    res.json(palabras);
}

export const createPalabra= async (req, res)=>
{
    const {español,romaji, japohk}=req.body;
    //le envia un objeto
    const newPalabra= new Palabra({español,romaji,japohk, /*user:req.user.id*/});
    const palabraSaved=await newPalabra.save();
    res.json(palabraSaved);

}

export const getPalabra= async (req, res)=>
{
    try
    {
        const palabra= await Palabra.findById(req.params.id);
        if(!palabra)
        {    
            return res.status(404).send("Palabra no encontrada");
        }
        res.json(palabra);
    }
    catch(e)
    {
        console.log(e);
    }
}

export const updatePalabra= async (req, res)=>
{
    //con el parametro {new:true} nos devuelve el dato actualizado, no el anterior
    const palabra= await Palabra.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!palabra)
        return res.status(404).send("Palabra no encontrada");
    res.json(palabra);
}

export const deletePalabra= async (req, res)=>
{
    const palabra= await Palabra.findByIdAndDelete(req.params.id);
    if(!palabra)
        return res.status(404).send("Palabra no encontrada");
    res.status(204);//send("Registro borrado satisfactoriamente");
}

/*export async function palabrasAlea(req, res) 
{
       try
       {
        const palabras= await Palabra.find().limit(10);
        res.json(palabras); 
       }
       catch(e)
       {
        console.log(e);
       }

}*/