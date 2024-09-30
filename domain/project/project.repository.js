"use strict";

// ===================================================================
// REPOSITORY LAYER - UNTUK BERKOMUNIKASI DENGAN DATABASE
// ===================================================================
import { prismaClient } from "../../application/database.js";


class ProjectRepository {

    static async create(data) {
        const project = await prismaClient.project.create({
            data: {
                name: data.name,
                description: data.description,
                url_repository: data.url_repository,
                url_demo: data.url_demo
            }
        })

        return project
    }

    static async findAll() {
        const projects = await prismaClient.project.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                url_repository: true,
                url_demo: true,
                createdAt: true
            }
        })
        return projects
    }

    static async findById(id) {
        const project = await prismaClient.project.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true,
                url_repository: true,
                url_demo: true,
                createdAt: true
            }
        })
        return project
    }

    static async updateById(id, data) {
        const project = await prismaClient.project.update({
            where: {
                id: id
            },
            data: {
                name: data.name,
                description: data.description,
                url_repository: data.url_repository,
                url_demo: data.url_demo
            }
        })
        return project
    }

    static async deleteById(id) {
        const project = await prismaClient.project.delete({
            where: {
                id: id
            }
        })
        return project
    }
}


export default ProjectRepository