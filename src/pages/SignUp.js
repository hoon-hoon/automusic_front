import React, { useState} from 'react';
import * as SignUpService from "../service/SignUpService"

export const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    return(
        <div class="signup">
            <h2 class="title">SIGNUP</h2>
            <hr></hr>
            <div>
                <label htmlFor='id'>아이디</label>
                <input maxLength="10" class="check_input" type='text' name='id' value={id}
                       onChange={(e)=>{SignUpService.userIdChanged(e,setId)}}/>
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='password'>비밀번호</label>
                <input maxLength="20" type='password' name='password' value={password}
                       onChange={(e)=>{SignUpService.passwordChanged(e,setPassword)}}/>
            </div>
            <div>
                <label htmlFor='nickname'>닉네임</label>
                <input type='text' name='nickname' value={nickname}
                       onChange={(e)=>{SignUpService.nickNameChanged(e,setNickname)}} />
            </div>
            <div>
                <button class="signup_button" type='button'
                        onClick={(e)=>{SignUpService.signUpButtonClicked(id, password, nickname)}}>완료</button>
            </div>
        </div>
    )
}
