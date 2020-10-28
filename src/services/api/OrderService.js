/* importar a api */

export default {
    async list() {
        try {
            const res = await api.get("/orders")
            return res.data.coupons
        } catch (error) {
            throw error
        }
    },
    async create(data){
        try {
            const form = ObjectToFormData(data)
            const res = await api.post('/orders', form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async update(data,id){
        try {
            const form = ObjectToFormData(data)
            const res = await api.put(`/orders/${id}`, form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async find(id){
        try {
            const res = await api.get(`/orders/${id}`)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async delete(id){
        try {
            await api.delete(`/orders/${id}`)
        } catch (error) {
            throw error
        }
    },
}