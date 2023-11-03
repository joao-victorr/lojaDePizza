import { Request, Response } from 'express';
import * as fs from 'fs';
import path from 'path';


import prismaClient from '../databases/prismaClient';

'../../public/images/uploads/'


export class PizzasController {

  async create(req: Request, res: Response) {

    if (!req.body.name || !req.body.price || !req.body.description) {
      return res.status(400).json({  err: "Informações não preenchidas"})
    }

    const { name, price, description } = req.body;

    if(!req.file) {
        return res.json({err: "Arquivo não enviado"})
    }

    const photo = req.file.filename

    const newProduct = await prismaClient.pizzas.create({
      data: {
        name,
        photo,
        price: parseFloat(price), 
        description,
      },
    });

    return res.json({ newProduct });
  
  }

  async read(req: Request, res: Response) {
    const allProducts = await prismaClient.pizzas.findMany();

    res.json(allProducts);

  };

  async delete(req: Request, res: Response) {

    if(!req.body.id) {
        return res.json({err: "Arquivo não" });
    }

    const { id } = req.body;

    console.log(id);

    const Product = await prismaClient.pizzas.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    console.log(Product);

    if(!Product) {
        return res.status(400).json({err: "Product not found"});
    }

    const filePath = path.join(__dirname, `../../public/images/${Product.photo}`);
    fs.unlink(filePath, (err) => {});

    const deleteProduc = await prismaClient.pizzas.delete({
        where: {
            id: Product.id
        }
    });

    return res.status(200).json({ res: "Deletado com sucesso!", Product });
  };

}
