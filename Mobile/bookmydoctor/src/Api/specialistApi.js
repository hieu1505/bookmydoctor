import http from "./http";

const specialistApi = {
    getAllSpecialist(params) {
        return http.get('/specialty', )
    },
    
    getDetailSpecialist(id) {
        return http.get(`/specialty/${id}`)
    }
}
export default specialistApi