require("dotenv").config();
const app = require("./app");
const logger = require("./config/logger");
const pool = require('./config/db');
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try{
        await pool.query(`
            CREATE TABLe IF NOT EXISTS users {
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
                 `);
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    }
    catch (error){
        logger.error("Server error", error);
        process.exit();
    }
}

startServer();