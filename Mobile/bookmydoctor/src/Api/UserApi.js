import http from "./http"
import axios from "axios"
const userApi = {
    changePassword(id,data) {
        return http.post(`/users/password/${id}`, data)
    },
    updateInfoUser(id,data,token) {
        // return http.put(`/users/${id}`, data)
        axios({
            method:'put',
            url:`https://bookmydoctor-opal.vercel.app/api/users/${id}`,
            data:data,
            headers:{
                'Authorization':token,
                'Content-Type': 'application/json'
            }
        }).then(function(respose){
            return respose.data
        }).catch(function(error){
            alert(error)
        })

    }
}
export default userApi
