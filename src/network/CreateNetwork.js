import axios from "axios";
import {API_BASE_URL} from "../AppConfig";
import MidiPlayer from "../service/MidiPlayer";

export const getMusicData = (musicData) => {
    const [atmosphere, atDetail, instrument, bpm, highlow] = musicData;
    axios.post(`${API_BASE_URL}/getMusic`, {
        atmosphere : atmosphere,
        atDetail : atDetail,
        instrument : instrument,
        bpm : bpm,
        highlow : highlow
    })
        .then(response => {
            //
            if (response.status === 200) {
                //sessionStorage.setItem("access_token", response.data.token);
                // window.location.href="/music"; 
                // 음악데이터 받아서 음악보여주는 페이지로 이동
                console.log(response.data);
                console.log(response);
                localStorage.setItem("MUSIC", response.data);

                // console.log(JSON.stringify(response.data));
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("생성 실패")
                window.location.href = "/create";
            }
        });
}