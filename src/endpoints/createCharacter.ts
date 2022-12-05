import { Request, Response } from 'express';
import connection from '../connection';
// import { characters } from '../data';


export default async function createCharacter (req:Request, res:Response):Promise<void> {
    
    let {name, gender, description} = req.body
    
        try{
            await connection("character")
            .insert({name, gender, description})

            res.status(200).send("Personagem criado")
        }

        catch(error){
            res.status(500).send("Erro inesperado")

        }

    // characters.push({
    //     id: Date.now(),
    //     name,
    //     gender,
    //     description
    // })
    
}