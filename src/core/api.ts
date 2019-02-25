import axios from 'axios';

const baseURL = "https://demo2592986.mockable.io";

const API = {
    async fetchUsers() {
        debugger;
        return await axios.get(baseURL + '/users');
    }
};

export default API;