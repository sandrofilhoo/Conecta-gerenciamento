/* importar a api */

export default {
    async list() {
        try {
            const res = await api.get("/config")
            return res.data.coupons
        } catch (error) {
            throw error
        }
    },
    async create(data){
        try {
            const form = ObjectToFormData(data)
            const res = await api.post('/config', form)
            return res.data
        } catch (error) {
            throw error
        }
    },
    async update(data){
        try {
            const form = ObjectToFormData(data)
            const res = await api.put("/config", form)
            return res.data
        } catch (error) {
            throw error
        }
    },
}