// LIBS
// ===========================================================================
import { app } from "./application/app.js";
import { logger } from "./application/logging.js";
import dotenv from "dotenv";
dotenv.config();


// DEFINE ROUTES
// ===========================================================================
import SkillController from "./domain/skill/skill.controller.js";
import TechstackController from "./domain/techstack/techstack.controller.js";
import ProjectController from "./domain/project/project.controller.js";
import MessageController from "./domain/message/message.controller.js";

app.get("/", (req, res) => { res.status(200).json({ message: "Wellcome to API for Personal App" }) })
app.use("/skills", SkillController);
app.use("/techstacks", TechstackController);
app.use("/projects", ProjectController);
app.use("/messages", MessageController);
app.use("/*", (req, res) => { res.status(404).json({ message: "Not Found" }) })



// START SERVER
// ===========================================================================
const APPLICATION_NAME = process.env.APPLICATION_NAME;
const APPLICATION_PORT = process.env.APPLICATION_PORT;

app.listen(APPLICATION_PORT, () => {
    logger.info(`${APPLICATION_NAME} listening on port ${APPLICATION_PORT}`);
})