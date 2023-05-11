import React, { useEffect, useState } from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";

function Main() {
    const [nickname, setNickname] = useState('');

    React.useEffect(() => {
        setNickname(localStorage.getItem("USER").nickname);
    }, []); 
    console.log(nickname);
    return (<>
        <CenteredOverlayForm backgroundColor={'#F9AF4F'}>
            메인페이지 입니다...
            {nickname}님 안녕하세요!
        </CenteredOverlayForm>
    </>)
}

export default Main;