import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { tpye: Number }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;