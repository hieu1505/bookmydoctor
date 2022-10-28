import http from "./http";
const doctorApi = {
    getAllDoctor() {
        return http.get('/doctor')
    },
   
    getDetailDoctor(id) {
        return http.get(`/doctor/${id}`)
    }

}
export default doctorApi