"use strict";


// LIBS
// ===========================================================================
import express from "express";
import cors from "cors";


// INITIALIZE AND DEFINE GLOBAL MIDDLEWARE
// ===========================================================================
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));