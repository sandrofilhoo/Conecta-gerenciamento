/* importar a api */

export default {
    async list() {
        try {
            const res = await api.get("/tables")
            return res.data.coupons
        } catch (error) {
            throw error
        }
    },
    async create(data){
        try {
            const form = ObjectToFormData(data)
            const res = await api.post('/tables', form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async update(data,id){
        try {
            const form = ObjectToFormData(data)
            const res = await api.put(`/tables/${id}`, form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async find(id){
        try {
            const res = await api.get(`/tables/${id}`)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async delete(id){
        try {
            await api.delete(`/tables/${id}`)
        } catch (error) {
            throw error
        }
    },
}