"use strict";

// ===================================================================
// SERVICE LAYER - UNTUK HANDLE BUSINESS LOGIC
// ===================================================================
import MessageRepository from "./message.repository.js";

class MessageService {

    static async getAllMessage() {
        const messages = await MessageRepository.findAll();
        return messages
    }


    static async getMessageById(id) {
        const message = await MessageRepository.findById(id);
        return message
    }


    static async createMessage(data) {
        const message = await MessageRepository.create(data);
        return message
    }


    static async updateStatusMessageById(id, status) {
        const message = await MessageRepository.updateStatusById(id, status);
        return message
    }


    static async deleteMessageById(id) {
        const message = await MessageRepository.deleteById(id);
        return message
    }
    
}

export default MessageService