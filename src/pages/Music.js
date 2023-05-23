import { Box, Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MusicPlayer from '../service/MusicService';
import DownloadIcon from '@mui/icons-material/Download';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ReplyIcon from '@mui/icons-material/Reply';
import MidiPlayer from '../service/MidiPlayer';

function Music() {
    const midiData = localStorage.getItem("MUSIC");
    console.log(midiData);

    return (
      <div>
        <h1>MIDI 파일 재생</h1>
        <MidiPlayer midiData={midiData} />
      </div>
    );
  };

export default Music;