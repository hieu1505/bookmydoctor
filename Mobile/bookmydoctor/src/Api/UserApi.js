import http from "./http"
import axios from "axios"
const userApi = {
    changePassword(id,data,config) {
        return http.post(`/users/password/${id}`, data, config)
    },
    updateInfoUser(id,data,config) {
        return http.put(`/users/${id}`, data,config)
       

    }
}
export default userApi
