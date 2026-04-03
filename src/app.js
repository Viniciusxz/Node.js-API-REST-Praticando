// Iniciando toda a biblioteca do Express
import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!")
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = procurarLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso.");
});

export default app;

