// ============================================================
// LAYER UNTUK HANDLE BUSINESS LOGIC
// ============================================================
import CategoryProjectRespository from "./category_project.repository.js"

class CategoryProjectService {

    // MENDAPATKAN SEMUA DATA
    static getAllCategoryProject = async () => {
        const category = await CategoryProjectRespository.findAll();
        return category
    }

    // MENGAMBIL DATA BERDASARKAN ID
    static getCategoryProjectById = async (id) => {
        const category = await CategoryProjectRespository.findById(id);
        return category
    }

    // MENAMBAH DATA
    static createCategoryProject = async (data) => {
        const category = await CategoryProjectRespository.create(data);
        return category
    }

    // MENGUBAH DATA BERDASARKAN ID
    static updateCategoryProjectById = async (id, data) => {
        const category = await CategoryProjectRespository.updateById(id, data);
        return category
    }

    // MENGHAPUS DATA BERDASARKAN ID
    static deleteCategoryProjectById = async (id) => {
        const category = await CategoryProjectRespository.deleteById(id);
        return category
    }
}

export default CategoryProjectService