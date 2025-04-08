import api from "@/libs/axios/axios.config";


export abstract class EntityRepository<T> {
    public END_POINT: string;
    constructor(endPoint: string) {
        this.END_POINT = endPoint
    }
    public async getById(id: string) {
        return await api.get(`${this.END_POINT}/${id}`)
    }
    public async getAll() {
        return await api.get(`${this.END_POINT}`)
    }
    public async create(data: T) {
        return api.post(`${this.END_POINT}`, { ...data })
    }
    public async update(id: string, data: T) {
        return await api.put(`${this.END_POINT}/${id}`, { ...data })
    }

    public async deleteById(id: string) {
        return await api.delete(`${this.END_POINT}/${id}`)
    }
}
