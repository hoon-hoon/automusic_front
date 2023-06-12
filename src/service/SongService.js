import axios from 'axios';

const BACKEND_URL = "http://ykh8746.iptime.org:8080/song";

class SongService {

    getSongs() {
        return axios.get(BACKEND_URL);
    }

    getSongData(fileName) {
        return axios.get(`${BACKEND_URL}/${fileName}`, {
            responseType : 'blob'
        });
    }

    getMySong() {
        const token = localStorage.getItem("USER")
        return axios.get(`${BACKEND_URL}/my`, {
            headers: {
                'Authorization': token
            }
        });
    }

    createSong(musicDto) {
        const [atmosphere, atDetail, instrument, bpm, highlow] = musicDto;
        const token = localStorage.getItem("USER");
        
        return axios.post(BACKEND_URL, 
            {
                atmosphere: atmosphere,
                atDetail: atDetail,
                instrument: instrument,
                bpm: bpm,
                highlow: highlow
            }, 
            {
                headers: {
                    'Authorization': token
                }
            })
    }

    deleteSong(song) {
        const fileName = song.fileName;
        const token = localStorage.getItem("USER")
        return axios.delete(`${BACKEND_URL}/${fileName}`, {
            headers: {
                'Authorization': token
            }
        });
    }

}
const songService = new SongService();
export default songService;