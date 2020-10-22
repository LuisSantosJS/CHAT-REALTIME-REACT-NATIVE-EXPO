import axios from 'axios';

const URL = 'https://socket-chat-api-nodejs.herokuapp.com';

const api = axios.create({
    baseURL: URL
})


export { URL };
export default api;