import axios from "axios";
import {API_BASE_URL} from "../AppConfig";

const headers = {
    'Authorization' : localStorage.getItem("USER")
}

export const getMusicData = (musicData) => {
    const audioContext = new AudioContext();

    return axios.get(`${API_BASE_URL}/getMusic`, {headers})
        .then(response => {
            //
            if (response.status === 200) {
                //sessionStorage.setItem("access_token", response.data.token);
                console.log(response.data);
            }
        })
        .then((buffer)=> audioContext.decodeAudioData(buffer))
        .then((decodeData) => {
            const source = new AudioBufferSourceNode();
            source.buffer = decodeData;
            source.connect(audioContext.destination);
            return source;
        })
        .then((source)=>{
            source.start(0);
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("생성 실패")
                window.location.href = "/create";
            }
        });
}

play.onclick = () => {
    getMusicData().then((source) => {
        source.start(0);
        play.setAttribute("disabled", "disabled");
    })
}