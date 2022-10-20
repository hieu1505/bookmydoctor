import http from 'utils/http'

const patientsApi = {
    updatePatient(data) {
        return http.put(`/patients/${data.get('id')}`, data)
    }
}
export default patientsApi
