import React, { useEffect, useState } from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";

function Main() {
    const [nickname, setNickname] = useState('');
    return (<>
        <CenteredOverlayForm backgroundColor={'#F9AF4F'}>
            메인페이지 입니다...
        </CenteredOverlayForm>
    </>)
}

export default Main;