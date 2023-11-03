import express from 'express';
import dotenv from 'dotenv';
import path from 'path';


import { router } from './router'


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(router);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})