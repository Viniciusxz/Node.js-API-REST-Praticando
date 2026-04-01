// Iniciando toda a biblioteca do Express

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
}); // Passando a responsabilidade de gerenciar as rotas 
// pro express, ao inves de fazer ali no arquivo server.js

export default app;

