// import http from "http";
import 'dotenv/config';
import app from "./src/app.js";

const PORT = 3000;

console.log(process.env.DB_CONNECTION_STRING);

app.listen(PORT, () => {
    console.log("servidor funcionando!");
});