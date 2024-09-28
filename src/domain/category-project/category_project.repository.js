// =====================================================
// LAYER UNTUK BERKOMUNIKASI DENGAN DATABASE
// =====================================================
import prisma from "../../db/index.js";

class CategoryProjectRepository {

    // MENDAPATKAN SEMUA DATA
    static findAll = async () => {
        const data = await prisma.CategoryProject.findMany();
        return data
    }

    // MENDAPATKAN DATA BERDASARKAN ID
    static findById = async (id) => {
        const data = await prisma.CategoryProject.findUnique({
            where: {
                id : Number(id)
            }
        })
        return data
    }

    // MENAMBAHKAN DATA
    static create = async (data) => {
        const category = await prisma.CategoryProject.create({
            data : {
                name : data.name
            }
        })
        return category
    }

    // MELAKUKAN UPDATE DATA BERDASARKAN ID
    static updateById = async (id, data) => {
        const category = await prisma.CategoryProject.update({
            where: {
                id : Number(id)
            },
            data : {
                name : data.name
            }
        })
        return category
    }

    // MENGHAPUS DATA BERDASARKAN ID
    static deleteById = async (id) => {
        const category = await prisma.CategoryProject.delete({
            where: {
                id : Number(id)
            }
        })
        return category
    }

}

export default CategoryProjectRepository