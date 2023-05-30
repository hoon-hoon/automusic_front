import axios from "axios";
import {API_BASE_URL} from "../AppConfig";
import MidiPlayer from "../service/MidiPlayer";

const headers = {
    "Authorization": localStorage.getItem("USER")
}

export const getMusicData = () => {

     return axios.post(`${API_BASE_URL}/getMusic`,
        {
            "atDetail" : 1,
            "atmosphere" : 0,
            "bpm" : 80,
            "highlow" : 1,
            "instrument" : {"inst1" : 22, "inst2" : 14, "inst3" : 16, "inst4" : 18, "inst5" :  45}
            },
        {
            headers : {
                "responseType" : "blob",
                "Authorization" : "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ0ZXN0MTIzNCIsImlhdCI6MTY4NTM2Nzk4NiwiZXhwIjoxNjg1MzY5Nzg2fQ.mLaqRcwIdBviMIcQq16JuOa-hJGIdtHHQ1_n0Psu6mA"
            }

        })
        .then(response => {
            //
            if (response.status === 200) {
                //sessionStorage.setItem("access_token", response.data.token);
                // window.location.href="/music"; 
                // 음악데이터 받아서 음악보여주는 페이지로 이동
                const file = new File([response.data], 'audioName');
                const fileReader = new FileReader();

                fileReader.readAsDataURL(response.data);
                return fileReader.onload = (event) => {
                    console.log(fileReader.result);
                    return fileReader.result
                }
                //setSrc(window.URL.createObjectURL(response.data.blob()));

                // console.log(JSON.stringify(response.data));
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("생성 실패")
                //window.location.href = "/create";
            }
        })

}