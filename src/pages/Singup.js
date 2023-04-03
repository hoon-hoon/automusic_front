import React, { useState, useEffect } from 'react';

function Singup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
    },
    []);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPhonenumberHandler = (event) => {
        setPhonenumber(event.currentTarget.value)
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value)
    }

    const onClickSignup = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        
        let userObj = {
            id: id,
            pw: password,
            name: name,
            nickname: nickname
         };

         axios.post("", userObj)
        .then(res => {
            // 회원가입 실패
            if (res.status === 403){
                console.log('회원가입 실패');
                alert('회원가입을 실패했습니다.');
                window.location.href="/signup";
            }
            // 회원가입 성공
            else if (res.status === 200) {
                console.log('회원가입 성공');
                window.location.href="/login";
            }
            console.log(res);
            window.location.href="/login";
        })
        .catch(err => {
            alert("네트워크가 불안정합니다.");
            console.log(err);
            window.location.href="/signup";
        });
    }

    return(
        <div class="signup">
            <h2 class="title">SIGNUP</h2>
            <hr></hr>
            <div>
                <label htmlFor='id'>아이디</label>
                <input maxLength="10" class="check_input" type='text' name='id' value={id} onChange={onIdHandler} />
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='password'>비밀번호</label>
                <input maxLength="20" type='password' name='password' value={password} onChange={onPasswordHandler} />
            </div>
            <div>
                <label htmlFor='name'>이름</label>
                <input maxLength="6" class="check_input" type='text' name='name' value={name} onChange={onNameHandler} />
            </div>
            <div>
                <label htmlFor='nickname'>닉네임</label>
                <input type='text' name='nickname' value={nickname} onChange={onNicknameHandler} />
            </div>
            <div>
                <button class="signup_button" type='button' onClick={onClickSignup}>완료</button>
            </div>
        </div>
    )
}

export default Singup;