import { Request, Response } from 'express';
import { characters } from '../data';


export default function createCharacter (req:Request, res:Response) {
    
    let {id, name, gender, description} = req.body
    
    characters.push({
        id: Date.now(),
        name,
        gender,
        description
    })
    res.status(200).send("Personagem Adicionado")
}