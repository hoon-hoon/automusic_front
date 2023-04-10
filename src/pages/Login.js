import React, { useState, useEffect } from 'react';
import { call, signin } from '../service/ApiService';

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
    },
    []);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const joinData = {
        userId: "yerim",
        pw: "1215",
        nickname: "예림"
    };
    
    const onhandlePost = async (data) => {
        signin(data)
        .then((response) => {
            console.log(response);
            
        })
    }

    const onClickLogin = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        onhandlePost(joinData);
    }

    return(
        <div className="login">
            <h1 className="title">LOGIN</h1>
            <div>
                <input placeholder='아이디' type='text' name='id' value={id} onChange={onIdHandler} />
            </div>
            <div>
                <input placeholder='비밀번호' type='password' name='password' value={password} onChange={onPasswordHandler} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
        </div>
        
        <div>
            <p><a>비밀번호 찾기</a> | <a>아이디 찾기</a> | <a href="/Signup">회원가입</a></p>
        </div>
    </div>
    )
}

export default Login;