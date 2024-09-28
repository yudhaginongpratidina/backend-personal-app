// ============================================================
// LAYER UNTUK HANDLE BUSINESS LOGIC
// ============================================================
import MessageRespository from "./message.repository.js"

class MessageService {

    // MENGAMBIL SEMUA DATA MESSAGE
    static getAllMessage = async () => {
        const message = await MessageRespository.findAll()
        return message
    }

    // MENGAMBIL DATA MESSAAGE BERDASARKAN ID
    static getMessageById = async (id) => {
        const message = await MessageRespository.findById(id)
        return message
    }

    // MENGAMBIL DATA MESSAAGE BERDASARKAN STATUS
    static getMessageByStatus = async (status) => {
        const message = await MessageRespository.findByStatus(status)
        return message
    }

    // MEMBUAT DATA MESSAAGE
    static createMessage = async (data) => {
        const message = await MessageRespository.create(data)
        return message
    }

    // MELAKUKAN PERUBAHAN STATUS DATA MESSAAGE BERDASARKAN ID
    static updateStatusMessageById = async (id, status) => {
        const message = await MessageRespository.updateStatusById(id, status)
        return message
    }

    // MENGHAPUS DATA MESSAAGE BERDASARKAN ID
    static deleteMessageById = async (id) => {
        const message = await MessageRespository.deleteById(id)
        return message
    }
}

export default MessageService