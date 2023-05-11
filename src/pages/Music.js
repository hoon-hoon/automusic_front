import { Box, Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MusicPlayer from '../service/MusicService';
import DownloadIcon from '@mui/icons-material/Download';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ReplyIcon from '@mui/icons-material/Reply';

function Music() {
    const location = useLocation();
    const src = location.state?.src;
    console.log(src);
    const navigate = useNavigate();

    function goCreate() {
        navigate("/create");
    }
    
    return (
        <div>
            <h1>Music Page</h1>
            <Box>
            <MusicPlayer src={src} />
            </Box>
            <Button onClick={goCreate}><ReplyIcon />
                다시 조건 설정하기
            </Button>
            <Button><AutorenewIcon />
                같은 조건으로 다시 생성하기
            </Button>
            <Button>
                <DownloadIcon />
                download
            </Button>
            <Button>
                
            </Button>


        </div>
    );
}

export default Music;
