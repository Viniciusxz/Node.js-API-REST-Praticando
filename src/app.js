// Iniciando toda a biblioteca do Express
import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!")
});

const app = express();
app.use(express.json());


function procurarLivro(id) {
    return livros.findIndex(livros => {
        return livros.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
}); // Passando a responsabilidade de gerenciar as rotas 
// pro express, ao inves de fazer ali no arquivo server.js

app.get("/livros", (req, res) => {
    res.status(200).json(livros); //.json é uma notação de objeto referente ao JS.
});

app.get("/livros/:id", (req, res) => {
    const index = procurarLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!")
});

app.put("/livros/:id", (req, res) => {
    const index = procurarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = procurarLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso.");
});

export default app;

