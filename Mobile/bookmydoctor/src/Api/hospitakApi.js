import http from "./http";

const hospitalApi = {
    getAllHospital(params) {
        return http.get('/hospital', { params: params })
    },
    
    getDetailHospital(id) {
        return http.get(`/hospital/${id}`)
    }
}
export default hospitalApi