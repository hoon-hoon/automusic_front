import { Container, Box } from "@mui/material";
import React from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";
import "../css/Board.css";

function Board() {
    return(<>
    <div className="Wrapper">
        <div className="leftSide">
        <div className="menuBar">
        <ul>
            <li><a href="">전체글보기</a></li>
            <li><a href="">자유게시판</a></li>
            <li><a href="">음악게시판</a></li>
            <li><a href="">질문게시판</a></li>
        </ul>

        </div>
        </div>
        
        <div className="rightSide">rightSide</div>
    </div>
    </>)
}

export default Board;