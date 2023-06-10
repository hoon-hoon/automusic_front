import axios from 'axios';

const BACKEND_URL = "http://ykh8746.iptime.org:8080/song";

class SongService{

    getSongs(){
        return axios.get( BACKEND_URL);
    }

    getSong(fileName){
        return axios.get(`${BACKEND_URL}/${fileName}`);
    }

    getMySong(){
        const token = localStorage.getItem(token)
        return axios.get(`${BACKEND_URL}/my`,{
            headers: {
                'Authorization' : token
            }
        });
    }

    createSong(musicDto){
        const token = localStorage.getItem(token);
        return axios.post(BACKEND_URL, musicDto, {
            headers: {
                'Authorization': token
            }
        });
    }

    deleteSong(fileName){
        const token = localStorage.getItem(token)
        return axios.delete(`${BACKEND_URL}/${fileName}`,{
            headers:{
                'Authorization' : token
            }
        });
    }

}

export default new SongService();