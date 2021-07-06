import axios from "axios";

const API = {
    randomEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=30")
    },
}

export default API;

