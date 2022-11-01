import http from "./http"

http
const clinicApi = {
    getAllClinic() {
        return http.get('/clinic')
    },
    addClinic(data, config) {
        return http.post('/clinic', data, config)
    },
    updateClinic(data, config) {
        return http.put(`/clinic/${data.get('id')}`, data, config)
    },
    getDetailClinic(id){
        return http.get(`/clinic/${id}`)
    }

}
export default clinicApi