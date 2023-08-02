
import express from "express";
import dotenv from "dotenv";
import path from "path";
import Mustache from "mustache-express";
import { sequelize } from './instances/mysql';

import mainRouter from "./router/index";

dotenv.config();
const server = express();


server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', Mustache());

server.use('/', express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRouter);

server.use((req, res) => {
    res.send("Pagina não encontrada")
});

sequelize.sync().then(() => {
    server.listen(process.env.PORT)
})

