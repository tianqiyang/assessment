import axios from 'axios';

export default axios.create({
    baseURL: "https://assess-server.herokuapp.com/"
});