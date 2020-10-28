/* importar a api */

export default {
    async list() {
        try {
            const res = await api.get("/calendars")
            return res.data.coupons
        } catch (error) {
            throw error
        }
    },
    async create(data){
        try {
            const form = ObjectToFormData(data)
            const res = await api.post('/calendars', form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async update(data,id){
        try {
            const form = ObjectToFormData(data)
            const res = await api.put(`/calendars/${id}`, form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async find(id){
        try {
            const res = await api.get(`/calendars/${id}`)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async delete(id){
        try {
            await api.delete(`/percents/${id}`)
        } catch (error) {
            throw error
        }
    },
}