// =====================================================
// LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// =====================================================
import express from "express";
import SkillService from "./skill.service.js";

const router = express.Router();

// -------------------------------------------------------
// ENDPOINT : /skills/
// METHOD   : GET
// DESC     : MENDAPATKAN SEMUA DATA SKILL
// -------------------------------------------------------
router.get("/", async (req, res) => {
    try {
        const response = await SkillService.getAllSkill();
        return res.status(200).json({
            message: "Success get all skill",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});


// -------------------------------------------------------
// ENDPOINT : /skills/:id
// METHOD   : GET
// DESC     : MENDAPATKAN DATA SKILL BERDASARKAN ID
// -------------------------------------------------------
router.get("/:id", async (req, res) => {
    try {
        const response = await SkillService.getSkillById(req.params.id);
        return res.status(200).json({
            message: "Success get skill by id",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});


// -------------------------------------------------------
// ENDPOINT : /skills/
// METHOD   : POST
// DESC     : MEMBUAT DATA SKILL
// -------------------------------------------------------
router.post("/", async (req, res) => {
    try {
        const response = await SkillService.createSkill(req.body);
        return res.status(201).json({
            message: "Success create skill",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});


// -------------------------------------------------------
// ENDPOINT : /skills/:id
// METHOD   : PATCH
// DESC     : MENGUBAH DATA SKILL BERDASARKAN ID
// -------------------------------------------------------
router.patch("/:id", async (req, res) => {
    try {
        const response = await SkillService.updateSkill(req.params.id, req.body);
        return res.status(200).json({
            message: "Success update skill",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});


// -------------------------------------------------------
// ENDPOINT : /skills/:id
// METHOD   : DELETE
// DESC     : MENGHAPUS DATA SKILL BERDASARKAN ID
// -------------------------------------------------------
router.delete("/:id", async (req, res) => {
    try {
        const response = await SkillService.deleteSkill(req.params.id);
        return res.status(200).json({
            message: "Success delete skill",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});

export default router;