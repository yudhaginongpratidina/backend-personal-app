// ============================================================
// LAYER UNTUK HANDLE BUSINESS LOGIC
// ============================================================
import SkillRespository from "./skill.repository.js"

class SkillService {

    static getAllSkill = async () => {
        const data = await SkillRespository.findAll();
        return data;
    }

    static getSkillById = async (id) => {
        const data = await SkillRespository.findById(id);
        return data;
    }

    static createSkill = async (data) => {
        const skill = await SkillRespository.create(data);
        return skill;
    }

    static updateSkill = async (id, data) => {
        const skill = await SkillRespository.update(id, data);
        return skill;
    }

    static deleteSkill = async (id) => {
        const skill = await SkillRespository.deleteById(id);
        return skill;
    }
}

export default SkillService