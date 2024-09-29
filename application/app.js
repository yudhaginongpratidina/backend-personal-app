"use strict";


// LIBS
// ===========================================================================
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger.js";


// INITIALIZE AND DEFINE GLOBAL MIDDLEWARE
// ===========================================================================
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// INITIALIZE API DOCUMENTATION
// ===========================================================================
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))