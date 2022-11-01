import http from "./http";
import axios from "axios";
const doctorApi = {
    getAllDoctor() {
        return http.get('/doctor')
    },
   
    getDetailDoctor(id) {
        return http.get(`/doctor/${id}`)
    }
    }


export default doctorApi