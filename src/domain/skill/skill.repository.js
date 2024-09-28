// =====================================================
// LAYER UNTUK BERKOMUNIKASI DENGAN DATABASE
// =====================================================
import prisma from "../../db/index.js";

class SkillRespository {

    static findAll = async () => {
        const data = await prisma.skill.findMany();
        return data
    }

    static findById = async (id) => {
        const data = await prisma.skill.findUnique({
            where: {
                id : Number(id)
            }
        })
        return data
    }

    static create = async (data) => {
        const skill = await prisma.skill.create({
            data : {
                name : data.name
            }
        })
        return skill
    }

    static update = async (id, data) => {
        const skill = await prisma.skill.update({
            where: {
                id : Number(id)
            },
            data : {
                name : data.name
            }
        })
        return skill
    }

    static deleteById = async (id) => {
        const skill = await prisma.skill.delete({
            where: {
                id : Number(id)
            }
        })
        return skill
    }

}

export default SkillRespository