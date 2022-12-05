import { character } from './../types';
import { Request, Response } from "express";
import connection from '../connection';
// import { characters } from '../data';

export default async function deleteCharacter(req: Request, res: Response): Promise<void> {


    try {
        const id = Number(req.params.id)
        // const index = characters.findIndex(
        //     character => character.id === id
        // )
        // if (index> -1) characters.splice(index, 1) 

        await connection("character")
            .delete()
            .where( {id} )

        res.status(200).send("Personagem Removido")
    }
    catch {
        res.status(500).send("Erro Inesperado")
    }
}