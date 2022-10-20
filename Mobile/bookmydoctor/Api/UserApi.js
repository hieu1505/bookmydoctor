import http from 'utils/http'

const userApi = {
    changePassword(data) {
        return http.post(`/users/password/${data.id}`, data)
    },
    updateInfoUser(data) {
        return http.put(`/users/${data.get('id')}`, data)
    }
}
export default userApi
