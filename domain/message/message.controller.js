"use strict";
// ===================================================================
// CONTROLLER - LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// ===================================================================
import MessageService from "./message.service.js";
import express from "express";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const response = await MessageService.getAllMessage();
        return res.status(200).json({
            message: "Get All Message",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


router.get("/:id", async (req, res) => {
    try {
        const response = await MessageService.getMessageById(req.params.id);
        return res.status(200).json({
            message: "Get Message By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


router.post("/", async (req, res) => {
    try {
        const response = await MessageService.createMessage(req.body);
        return res.status(201).json({
            message: "Create Message",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


router.patch("/:id", async (req, res) => {
    try {
        const response = await MessageService.updateStatusMessageById(req.params.id, req.body.isRead);
        return res.status(200).json({
            message: "Update Status Message By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const response = await MessageService.deleteMessageById(req.params.id);
        return res.status(200).json({
            message: "Delete Message By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router