import {useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../AppConfig";
export const MusicPlayer = () => {
    const [myAudio, setMyAudio] = useState("");

    axios.post(`${API_BASE_URL}/getMusic`,
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
                "Authorization" : "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ0ZXN0MTIzNCIsImlhdCI6MTY4NTM2OTMzNiwiZXhwIjoxNjg1MzcxMTM2fQ.hqXgE3IdIujv822RJZF4ljeLeiX29r3of_lI0_I4Lw0"
            }

        })
        .then(response => {
            if (response.status === 200) {
                const file = new File([response.data], 'audioName');
                const fileReader = new FileReader();

                fileReader.onload = (event) => {
                    const previewAudio = String(event.target?.result)
                    setMyAudio(previewAudio);
                }
                fileReader.readAsDataURL(file);

            }
        })
        .catch(err => {
            console.log(err)
        })

    return(
        <audio src={`${myAudio}`} controls></audio>
    )
}