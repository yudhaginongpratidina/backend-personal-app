"use strict";
// ===================================================================
// CONTROLLER - LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// ===================================================================
import MessageService from "./message.service.js";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: return all message
 *     tags: [Message]
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
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


/**
 * @swagger
 * /messages/{id}:
 *   get:
 *     summary: return message by id
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: message id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
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


/**
 * @swagger
 * /messages:
 *   post:
 *     summary: create message
 *     tags: [Message]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
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

/**
 * @swagger
 * /messages/{id}:
 *   patch:
 *     summary: update status message
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: message id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isRead:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
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


/**
 * @swagger
 * /messages/{id}:
 *   delete:
 *     summary: delete message
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: message id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
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