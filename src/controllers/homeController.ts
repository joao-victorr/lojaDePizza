
import { Response, Request } from "express";

import { Pizzas } from "../models/pizzasModel";


export const home = async (req:Request, res: Response) => {

    res.render('home', {

    })
}

