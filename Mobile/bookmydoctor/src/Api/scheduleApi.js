import http from "./http"

const scheduleApi = {
    addSchedule(data, config) {
        return http.post('/schedule', data, config)
    },
    getSchedule(id, config) {
        console.log(http.get(`/schedule/doctor/${id}`, config))
        return http.get(`/schedule/doctor/${id}`, config)
        //axios.get(url,config)
    },
    getScheduleById(id) {
        return http.get(`/schedule/${id}`)
    }
}
export default scheduleApi