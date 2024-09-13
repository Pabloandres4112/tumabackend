import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../env/.env") });


export const pool = createPool({
    DB_HOST: 'mysql.railway.internal',
    DB_USER: 'root',
    DB_PASSWORD: 'paTffNyJqIxqoAWULXsTKcMIRaXIaLoW',
    DB_PORT: '3306',
    DB_DATABASE: 'railway'
})

pool.getConnection().then(connect => {
    console.log("Conexión a base de datos exitosa.");
    connect.release();
})
    .catch(error => {
        console.error("Conexion a base de datos fallida. " + error);
})  
