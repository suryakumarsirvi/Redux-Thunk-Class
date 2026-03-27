import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const fetchUsers = async () =>{
    return await API.get('/users');
}