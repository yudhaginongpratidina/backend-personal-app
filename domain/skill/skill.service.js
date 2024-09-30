"use strict";

// ===================================================================
// SERVICE LAYER - UNTUK HANDLE BUSINESS LOGIC
// ===================================================================
import SkillRepository from "./skill.repository.js";

class SkillService {

    static async getAllSkills() {
        const skills = await SkillRepository.findAll();
        return skills
    }

    static async getSkillById(id) {
        const skill = await SkillRepository.findById(id);
        return skill
    }

    static async createSkill(data) {
        const skill = await SkillRepository.create(data);
        return skill
    }

    static async updateSkillById(id, name) {
        const skill = await SkillRepository.updateById(id, name);
        return skill
    }

    static async deleteSkillById(id) {
        const skill = await SkillRepository.deleteById(id);
        return skill
    }
}

export default SkillService