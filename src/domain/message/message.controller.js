// =====================================================
// LAYER UNTUK HANDLE REQUEST, VALIDATION, DAN RESPONSE
// =====================================================
import express from "express";
import MessageService from "./message.service.js";


const router = express.Router();


// -------------------------------------------------------
// ENDPOINT : /messages/
// METHOD   : GET
// DESC     : MENDAPATKAN SEMUA DATA MESSAGE
// -------------------------------------------------------
router.get("/", async (req, res) => {
    try {
        const response = await MessageService.getAllMessage();
        return res.status(200).json({
            message: "Success get all message",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
});


// -------------------------------------------------------
// ENDPOINT : /messages/:id
// METHOD   : GET
// DESC     : MENDAPATKAN DATA MESSAGE BERDASARKAN ID
// -------------------------------------------------------
router.get("/:id", async (req, res) => {
    try {
        const response = await MessageService.getMessageById(req.params.id);
        return res.status(200).json({
            message: "Success get message by id",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /messages/status/:status
// METHOD   : GET
// DESC     : MENDAPATKAN DATA MESSAGE BERDASARKAN STATUS
// -------------------------------------------------------
router.get("/status/:status", async (req, res) => {
    try {
        const response = await MessageService.getMessageByStatus(req.params.status);
        return res.status(200).json({
            message: "Success get message by status",
            data: response
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /messages/
// METHOD   : POST
// DESC     : MEMBUAT DATA MESSAGE
// -------------------------------------------------------
router.post("/", async (req, res) => {
    try {
        const response = await MessageService.createMessage(req.body);
        return res.status(201).json({
            message: "Success create message",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /messages/
// METHOD   : PATCH
// DESC     : UPDATE STATUS MESSAGE BERDASARKAN ID
// -------------------------------------------------------
router.patch("/:id/update/status", async (req, res) => {
    try {
        const response = await MessageService.updateStatusMessageById(req.params.id, req.body.status);
        return res.status(200).json({
            message: "Success update message status",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// -------------------------------------------------------
// ENDPOINT : /messages/:id
// METHOD   : DELETE
// DESC     : MENGHAPUS DATA MESSAGE BERDASARKAN ID
// -------------------------------------------------------
router.delete("/:id", async (req, res) => {
    try {
        const response = await MessageService.deleteMessageById(req.params.id);
        return res.status(200).json({
            message: "Success delete message",
            data: response
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


export default router;