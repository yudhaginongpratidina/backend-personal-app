"use strict";
// ===================================================================
// CONTROLLER - LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// ===================================================================
import ProjectService from "./project.service.js";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: return all project
 *     tags: [Project]
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.get("/", async (req, res) => {
    try {
        const response = await ProjectService.getAllProject();
        return res.status(200).json({
            message: "Get All Project",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: return project by id
 *     tags: [Project]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: project id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.get("/:id", async (req, res) => {
    try {
        const response = await ProjectService.getProjectById(req.params.id);
        return res.status(200).json({
            message: "Get Project By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: create project
 *     tags: [Project]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                  type: string
 *               url_repository: 
 *                  type: string
 *               url_demo:
 *                  type: string
 *     responses:
 *       201:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.post("/", async (req, res) => {
    try {
        const response = await ProjectService.createProject(req.body);
        return res.status(201).json({
            message: "Create Project",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /projects/{id}:
 *   patch:
 *     summary: update project
 *     tags: [Project]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: project id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                  type: string
 *               url_repository: 
 *                  type: string
 *               url_demo:
 *                  type: string
 *     responses:
 *       200:
 *         description: A successful response
 */
router.patch("/:id", async (req, res) => {
    try {
        const response = await ProjectService.updateProjectById(req.params.id, req.body);
        return res.status(200).json({
            message: "Update Project By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: delete project
 *     tags: [Project]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: project id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.delete("/:id", async (req, res) => {
    try {
        const response = await ProjectService.deleteProjectById(req.params.id);
        return res.status(200).json({
            message: "Delete Project By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router