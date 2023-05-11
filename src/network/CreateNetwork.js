import axios from "axios";
import {API_BASE_URL} from "../AppConfig";

export const getMusicData = (musicData) => {

    axios.post(`${API_BASE_URL}/`, {
            musicData : musicData
        })
        .then(response => {
            //
            if (response.status === 200) {
                //sessionStorage.setItem("access_token", response.data.token);
                window.location.href="/music"; // 음악데이터 받아서 음악보여주는 페이지로 이동
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("생성 실패")
                window.location.href = "/create";
            }
        });
}

