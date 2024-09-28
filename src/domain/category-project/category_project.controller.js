// =====================================================
// LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// =====================================================
import express from "express";
import CategoryProjectService from "./category_project.service.js";
const router = express.Router();


// -------------------------------------------------------
// ENDPOINT : /category-projects/
// METHOD   : GET
// DESC     : MENDAPATKAN SEMUA DATA CATEGORY PROJECT
// -------------------------------------------------------
router.get("/", async (req, res) => {
    try {
        const response = await CategoryProjectService.getAllCategoryProject();
        return res.status(200).json({
            message: "Success get all category project",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});


// -------------------------------------------------------  
// ENDPOINT : /category-projects/:id
// METHOD   : GET
// DESC     : MENDAPATKAN DATA CATEGORY PROJECT BERDASARKAN ID
// -------------------------------------------------------
router.get("/:id", async (req, res) => {
    try {
        const response = await CategoryProjectService.getCategoryProjectById(req.params.id);
        return res.status(200).json({
            message: "Success get category project by id",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /category-projects/
// METHOD   : POST
// DESC     : MEMBUAT DATA CATEGORY PROJECT
// -------------------------------------------------------
router.post("/", async (req, res) => {
    try {
        const response = await CategoryProjectService.createCategoryProject(req.body);
        return res.status(201).json({
            message: "Success create category project",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /category-projects/:id
// METHOD   : PATCH
// DESC     : MENGUBAH DATA CATEGORY PROJECT BERDASARKAN ID
// -------------------------------------------------------
router.patch("/:id", async (req, res) => {
    try {
        const response = await CategoryProjectService.updateCategoryProjectById(req.params.id, req.body);
        return res.status(200).json({
            message: "Success update category project",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /category-projects/:id
// METHOD   : DELETE
// DESC     : MENGHAPUS DATA CATEGORY PROJECT BERDASARKAN ID
// -------------------------------------------------------
router.delete("/:id", async (req, res) => {
    try {
        const response = await CategoryProjectService.deleteCategoryProjectById(req.params.id);
        return res.status(200).json({
            message: "Success delete category project",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


export default router;