import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-copy-42876.cloudfunctions.net/api'
    //'http://127.0.0.1:5001/copy-42876/us-central1/api' // The API (cloud function) URL - Local endpoint in BE
});

export default instance