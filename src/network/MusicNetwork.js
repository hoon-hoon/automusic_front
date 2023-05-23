import axios from "axios";
import {API_BASE_URL} from "../AppConfig";

export const getMusicData = (musicData) => {
    axios.get(`${API_BASE_URL}/getMusic`, {

    })
        .then(response => {
            //
            if (response.status === 200) {
                //sessionStorage.setItem("access_token", response.data.token);
                console.log(response.data);
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("생성 실패")
                window.location.href = "/create";
            }
        });
}