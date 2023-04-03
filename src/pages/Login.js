import React, { useState, useEffect } from 'react';

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onClickLogin = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()

        let userObj = {
            id: id,
            password: password,
         };
    }

    return(
        <div className="login">
        <div className='login-container'>
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
        </div>
        
        <div>
            <p><a>비밀번호 찾기</a> | <a>아이디 찾기</a> | <a href="/Singup">회원가입</a></p>
        </div>
    </div>
    )
}

export default Login;