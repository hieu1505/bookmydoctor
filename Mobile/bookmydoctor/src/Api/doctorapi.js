import http from "./http";
import axios from "axios";
const doctorApi = {
    getAllDoctor() {
        return http.get('/doctor?page=0&limit=20')
    },
   
    getDetailDoctor(id) {
        return http.get(`/doctor/${id}`)
    }
    }


export default doctorApi