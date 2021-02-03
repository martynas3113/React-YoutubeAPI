import axios from 'axios';
const KEY = 'AIzaSyDVONMZoGcHCEUGPFVSaFFnndrC_RCoasE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
});