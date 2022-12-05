import { character } from './../types';
// import { characters } from '../data';
import { Request, Response } from "express"
import connection from "../connection"
// import { character } from "../types"

export default async function getAllCharacter(req: Request, res: Response): Promise<void> {

    try {
        const {name, orderBy, orderType, page} = req.query
        const resultsPerPage = 5

        const offset = resultsPerPage * (Number(page) - 1)


        const characters: character[] = await connection("character")
        // .where("name", "LIKE", `%${name}%`)
        // .orderBy(orderBy as string || "name", orderType as string)
        // .offset(offset)

        res.send(characters)
    }
    catch (error) {
        res.status(500).send("Error")
    }


}