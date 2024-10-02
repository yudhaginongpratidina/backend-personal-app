"use strict";

// ===================================================================
// SERVICE LAYER - UNTUK HANDLE BUSINESS LOGIC
// ===================================================================
import TechstackRepository from "./techstack.repository.js";

class TechstackService {

    static async getAllTechstack() {
        const techstack = await TechstackRepository.findAll();
        return techstack
    }

    static async getTechstackById(id) {
        const techstack = await TechstackRepository.findById(id);
        return techstack
    }

    static async createTechstack(data) {
        const techstack = await TechstackRepository.create(data);
        return techstack
    }

    static async updateTechstackById(id, name) {
        const techstack = await TechstackRepository.updateById(id, name);
        return techstack
    }

    static async deleteTechstackById(id) {
        const techstack = await TechstackRepository.deleteById(id);
        return techstack
    }
}

export default TechstackService