import { Request, Response, Router } from "express";

import { upload } from "./multerConfig";
import { PizzasController } from "./controller/ProductController";

const router = Router();

router.get('/', (req, res) => {
    
    // return res.render('../public/index.html');
})

router.post('/pizzas', upload.single("file"), new PizzasController().create);
router.get('/pizzas', new PizzasController().read);
router.delete('/pizzas', upload.single("file"), new PizzasController().delete);


export { router };

