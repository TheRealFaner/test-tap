import axios from 'axios';
const server = 'http://localhost:3001/'

export async function Get(route) {
    let request = await axios.get(server+route);
    return request.data;
}