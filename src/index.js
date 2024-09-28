// STRICT MODE
"use strict";


// LIBRARY YANG DIBUTUHKAN 
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// MIDDLWARE
import loggingMiddleware from "./middleware/logging.middleware.js";


// ROUTES
import skillController from "./domain/skill/skill.controller.js";
import categoryProjectController from "./domain/category-project/category_project.controller.js";
import messageController from "./domain/message/message.controller.js";


// INITIALIZE
dotenv.config();
const app = express();


// GLOBAL MIDDLWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggingMiddleware);


// ROUTES
app.get("/", (req, res) => { res.status(200).json({success: true, message: "Wellcome to our API" });})
app.use("/skills", skillController);
app.use("/category-projects", categoryProjectController);
app.use("/messages", messageController);
app.use("/*", (req, res) => { res.status(404).json({ success: false, message: "not found"});});


// SERVER LISTER
const APP_PORT = process.env.APP_PORT || 3000;
app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});