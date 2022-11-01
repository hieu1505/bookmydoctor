import http from "./http";

const specialistApi = {
    getAllSpecialist() {
        return http.get('/specialty', )
    },
    
    getDetailSpecialist(id) {
        return http.get(`/specialty/${id}`)
    }
}
export default specialistApi