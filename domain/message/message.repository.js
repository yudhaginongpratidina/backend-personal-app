"use strict";

// ===================================================================
// REPOSITORY LAYER - UNTUK BERKOMUNIKASI DENGAN DATABASE
// ===================================================================
import { prismaClient } from "../../application/database.js";

class MessageRepository {

    static async findAll() {
        const message = await prismaClient.message.findMany({
            select: {
                id: true,
                fullName: true,
                email: true,
                subject: true,
                message: true,
                isRead: true,
                createdAt: true
            }
        });
        return message
    }

    static async findById(id) {
        const message = await prismaClient.message.findUnique({
            where: {
                id : id
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                subject: true,
                message: true,
                isRead: true,
                createdAt: true
            }
        });

        if (!message) {
            throw new Error(`Message with id ${id} not found`);
        }

        return message
    }

    static async create(data) {
        const message = await prismaClient.message.create({
            data : {
                fullName: data.fullName,
                email: data.email,
                subject: data.subject,
                message: data.message
            }
        });

        return message
    }

    static async updateStatusById(id, isRead) {
        const message = await prismaClient.message.update({
            where: {
                id : id
            },
            data: {
                isRead : isRead
            }
        });

        return message
    }

    static async deleteById(id) {
        const message = await prismaClient.message.delete({
            where: {
                id : id
            }
        });

        if (!message) {
            throw new Error(`Message with id ${id} not found`);
        }

        return message
    }

}

export default MessageRepository