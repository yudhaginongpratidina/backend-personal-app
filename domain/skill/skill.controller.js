"use strict";
// ===================================================================
// CONTROLLER - LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// ===================================================================
import SkillService from "./skill.service.js";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /skills:
 *   get:
 *     summary: return all skill
 *     tags: [Skill]
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.get("/", async (req, res) => {
    try {
        const response = await SkillService.getAllSkills();
        return res.status(200).json({
            message: "Get All Skills",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /skills/{id}:
 *   get:
 *     summary: return skill by id
 *     tags: [Skill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: skill id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
router.get("/:id", async (req, res) => {
    try {
        const response = await SkillService.getSkillById(req.params.id);
        return res.status(200).json({
            message: "Get Skill By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /skills:
 *   post:
 *     summary: create skill
 *     tags: [Skill]
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
        const response = await SkillService.createSkill(req.body);
        return res.status(201).json({
            message: "Create Skill",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /skills/{id}:
 *   patch:
 *     summary: update skill
 *     tags: [Skill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: skill id
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
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.patch("/:id", async (req, res) => {
    try {
        const response = await SkillService.updateSkillById(req.params.id, req.body);
        return res.status(200).json({
            message: "Update Skill By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


/**
 * @swagger
 * /skills/{id}:
 *   delete:
 *     summary: delete skill
 *     tags: [Skill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: skill id
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad Request
 */
router.delete("/:id", async (req, res) => {
    try {
        const response = await SkillService.deleteSkillById(req.params.id);
        return res.status(200).json({
            message: "Delete Skill By Id",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


export default router