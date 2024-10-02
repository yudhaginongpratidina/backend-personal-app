"use strict";

// ===================================================================
// REPOSITORY LAYER - UNTUK BERKOMUNIKASI DENGAN DATABASE
// ===================================================================
import { prismaClient } from "../../application/database.js";

class TechstackRepository {

    static async findAll() {
        const techstacks = await prismaClient.techstack.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        return techstacks
    }

    static async findById(id) {
        const techstack = await prismaClient.techstack.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
            }
        });
        if (!techstack) {
            throw new Error(`techstack with id ${id} not found`);
        }
        return techstack
    }

    static async create(data) {
        const techstack = await prismaClient.techstack.create({
            data: {
                name: data.name
            }
        });
        return techstack
    }

    static async updateById(id, data) {
        const techstack = await prismaClient.techstack.update({
            where: {
                id: id
            },
            data: {
                name: data.name
            }
        });
        if (!techstack) {
            throw new Error(`techstack with id ${id} not found`);
        }
        return techstack
    }

    static async deleteById(id) {
        const techstack = await prismaClient.techstack.delete({
            where: {
                id: id
            }
        });
        if (!techstack) {
            throw new Error(`techstack with id ${id} not found`);
        }
        return techstack
    }

}

export default TechstackRepository