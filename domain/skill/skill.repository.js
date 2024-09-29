"use strict";

// ===================================================================
// REPOSITORY LAYER - UNTUK BERKOMUNIKASI DENGAN DATABASE
// ===================================================================
import { prismaClient } from "../../application/database.js";

class SkillRepository {

    static async findAll() {
        const skills = await prismaClient.skill.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        return skills
    }

    static async findById(id) {
        const skill = await prismaClient.skill.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
            }
        });
        if (!skill) {
            throw new Error(`Skill with id ${id} not found`);
        }
        return skill
    }

    static async create(data) {
        const skill = await prismaClient.skill.create({
            data: {
                name: data.name
            }
        });
        return skill
    }

    static async updateById(id, data) {
        const skill = await prismaClient.skill.update({
            where: {
                id: id
            },
            data: {
                name: data.name
            }
        });
        if (!skill) {
            throw new Error(`Skill with id ${id} not found`);
        }
        return skill
    }

    static async deleteById(id) {
        const skill = await prismaClient.skill.delete({
            where: {
                id: id
            }
        });
        if (!skill) {
            throw new Error(`Skill with id ${id} not found`);
        }
        return skill
    }

}

export default SkillRepository