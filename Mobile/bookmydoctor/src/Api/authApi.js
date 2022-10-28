import http from "./http"

const authApi = {
    login(data) {
        return http.post('/auth/login', data)
    },
    signup(data) {
        return http.post('/auth/singup', data)
    },
    resetPassword(data) {
        return http.post('/users/resetpw', data)
    }
}
export default authApi