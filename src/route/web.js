import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app)=>{
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/hoidanit',(req, res) => {
        return res.send('hello hoidanit');
    });
    return app.use("/", router);
}

module.exports = initWebRoutes;