const app = require("./app");
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try{
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    }
    catch (error){
        console.log("Error...");
    }
}

startServer();