import 'dotenv/config';
import mongoose from 'mongoose';

async function conectaNaDataBase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Conexão com o MongoDB feita com sucesso!");
    } catch (erro) {
        console.error("Erro de conexão:", erro);
    }
    return mongoose.connection;
}

export default conectaNaDataBase;