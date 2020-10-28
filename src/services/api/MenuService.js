/* importar a api */

export default {
    async list() {
        try {
            const res = await api.get("/menus")
            return res.data.coupons
        } catch (error) {
            throw error
        }
    },
    async create(data){
        try {
            const form = ObjectToFormData(data)
            const res = await api.post('/menus', form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async update(data,id){
        try {
            const form = ObjectToFormData(data)
            const res = await api.put(`/menus/${id}`, form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async find(id){
        try {
            const res = await api.get(`/menus/${id}`)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async delete(id){
        try {
            await api.delete(`/menus/${id}`)
        } catch (error) {
            throw error
        }
    },
}