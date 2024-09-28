// =====================================================
// LAYER UNTUK BERKOMUNIKASI DENGAN DATABASE
// =====================================================
import prisma from "../../db/index.js";

class MessageRespository {

    // MENDAPATKAN SEMUA DATA MESSAGE
    static findAll = async () => {
        const data = await prisma.message.findMany();
        return data
    }

    // MENDAPATKAN DATA MESSAGE BERDASARKAN ID
    static findById = async (id) => {
        const data = await prisma.message.findUnique({
            where: {
                id : Number(id)
            }
        })
        return data
    }

    // MENDAPATKAN DATA MESSAGE BERDASARKAN STATUS
    static findByStatus = async (status) => {
        const data = await prisma.message.findMany({
            where: {
                status
            }
        })
        return data
    }
    
    // MEMBUAT DATA MESSAGE
    static create = async (data) => {
        const message = await prisma.message.create({
            data : {
                fullname : data.fullname,
                email : data.email,
                message : data.message
            }
        })
        return message
    }

    // MELAKUKAN PERUBAHAN STATUS DATA MESSAGE BERDASARKAN ID
    static updateStatusById = async (id, status) => {
        const message = await prisma.message.update({
            where : {
                id : Number(id)
            },
            data : {
                status
            }
        })
        return message
    }

    // MENGHAPUS DATA MESSAGE BERDASARKAN ID
    static deleteById = async (id) => {
        const message = await prisma.message.delete({
            where : {
                id : Number(id)
            }
        })
        return message
    }
}

export default MessageRespository