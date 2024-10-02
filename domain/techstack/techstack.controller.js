"use strict";
// ===================================================================
// CONTROLLER - LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// ===================================================================
import TechstackService from "./techstack.service.js";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /techstacks:
 *   get:
 *     summary: return all techstack
 *     tags: [Techstack]
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.get("/", async (req, res) => {
    try {
        const response = await TechstackService.getAllTechstack();
        return res.status(200).json({
            message: "Get All Techstack",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /techstacks/{id}:
 *   get:
 *     summary: return techstack by id
 *     tags: [Techstack]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: techstack id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.get("/:id", async (req, res) => {
    try {
        const response = await TechstackService.getTechstackById(req.params.id);
        return res.status(200).json({
            message: "Get Techstack By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /techstacks:
 *   post:
 *     summary: create techstack
 *     tags: [Techstack]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.post("/", async (req, res) => {
    try {
        const response = await TechstackService.createTechstack(req.body);
        return res.status(201).json({
            message: "Create New Techstack",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

/**
 * @swagger
 * /techstacks/{id}:
 *   patch:
 *     summary: update techstack
 *     tags: [Techstack]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: techstack id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 */
router.patch("/:id", async (req, res) => {
    try {
        const response = await TechstackService.updateTechstackById(req.params.id, req.body);
        return res.status(200).json({
            message: "Update Techstack By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /techstacks/{id}:
 *   delete:
 *     summary: delete techstack
 *     tags: [Techstack]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: techstack id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.delete("/:id", async (req, res) => {
    try {
        const response = await TechstackService.deleteTechstackById(req.params.id);
        return res.status(200).json({
            message: "Delete Techstack By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router
