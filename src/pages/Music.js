import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import MusicPlayer from '../service/MusicService';
// import DownloadIcon from '@mui/icons-material/Download';
// import AutorenewIcon from '@mui/icons-material/Autorenew';
// import ReplyIcon from '@mui/icons-material/Reply';
// import MidiPlayer from '../service/MidiPlayer';
import { useState } from 'react';
import MidiParser, { parse } from 'midi-parser-js';
import MidiPlayer from '../service/MidiPlayer';
import MidiPlayer2 from '../service/MidiPlayer2';

function Music() {
    // const midiData = localStorage.getItem("MUSIC");
    const [midiData, setMidiData] = useState([]);

    // Base64 문자열을 ArrayBuffer로 변환
    function base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const length = binaryString.length;
        const bytes = new Uint8Array(length);

        for (let i = 0; i < length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    // const a = localStorage.getItem("MUSIC");
    // console.log(a);


    useEffect(() => {
        // 로컬 스토리지에서 직렬화된 MIDI 데이터 가져오기
        const serializedMidiData = localStorage.getItem("MUSIC");

        // MIDI 데이터가 있을 경우에만 파싱 및 설정
        if (serializedMidiData) {
            // MIDI 데이터를 파싱하여 음악 플레이어에 전달 가능한 형식으로 변환
            // const decodedData = atob(serializedMidiData)

            const arrayBuffer = base64ToArrayBuffer(serializedMidiData);
            console.log("arrayBuffer : ", arrayBuffer);

            const uint8Array = new Uint8Array(arrayBuffer);
            console.log("uint8Array : ", uint8Array);

            const parsedMidiData = MidiParser.parse(uint8Array);
            console.log("parsedMidiData : ", parsedMidiData);

            // 파싱된 MIDI 데이터 설정
            setMidiData(parsedMidiData);
        }
    }, []);

    console.log(midiData);



    return (
        <div>
            {/* <h1>MIDI 파일 재생</h1>
            {midiData ? (
                <MidiPlayer midiData={midiData} />
            ) : (
                <p>로컬 스토리지에서 MIDI 파일을 찾을 수 없습니다.</p>
            )} */}

            <MidiPlayer2 midiData={midiData} />
        </div>
    );
};

export default Music;