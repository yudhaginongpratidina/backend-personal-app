"use strict";

// ===================================================================
// SERVICE LAYER - UNTUK HANDLE BUSINESS LOGIC
// ===================================================================
import ProjectRepository from "./project.repository.js";

class ProjectService {

    static async createProject(data){
        const project = await ProjectRepository.create(data)
        return project
    }

    static async getAllProject(){
        const projects = await ProjectRepository.findAll()
        return projects
    }

    static async getProjectById(id){
        const project = await ProjectRepository.findById(id)

        if (!project) {
            throw new Error(`Project with id ${id} not found`)
        }

        return project
    }

    static async updateProjectById(id, data){
        const project = await ProjectRepository.updateById(id, data)
        return project
    }

    static async deleteProjectById(id){
        const project = await ProjectRepository.deleteById(id)
        return project
    }

}

export default ProjectService