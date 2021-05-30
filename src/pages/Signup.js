import React, {useState} from 'react';
import { Grid, Text, Button, Input } from '../elements';


const Signup = (props) => {
	// useState로 state 선언
	const [id, setId] = useState('');
	const [nickname, setNickname] = useState('');  
	const [pwd, setPwd] = useState('');  
	const [pwdconfirm, setPwdconfirm] = useState('');  

	// event가 들어오면 state를 바꾸는 함수 2개 선언
	const changeId = (e) => {
		setId(e.target.value);
	}
	const changeNickname = (e) => {
		setNickname(e.target.value);
	}
	const changePwd = (e) => {
		setPwd(e.target.value);
	}
	const changePwdconfirm = (e) => {
		setPwdconfirm(e.target.value);
	}

	// 로그인 버튼 눌렀을 때 쿠키에 id와 pwd를 저장(setCookie)하는 함수
	// (주의: key는 문자열이어야)
	// const signup = () => {
	// 	// key, value, 만료일(3일 후)
	// 	setCookie('user_id', id, 3);
	// 	setCookie('user_pwd', pwd, 3);
	// }

	return (
		<>
			<Grid padding="16px">
				<Text size="32" bold>
					회원가입
				</Text>

				<Grid padding="16px 0px">
				<Input
					label="아이디"
					value={id}
					_onChange={changeId}
					placeholder="아이디를 입력하세요."
				/>
				</Grid>

				<Grid padding="16px 0px">
				<Input
					label="닉네임"
					value={nickname}
					_onChange={changeNickname}
					placeholder="닉네임을 입력하세요."
				/>
				</Grid>

				<Grid padding="16px 0px">
					<Input
						label="비밀번호"
						value={pwd}
						_onChange={changePwd}
						placeholder="비밀번호를 입력하세요."
					/>
				</Grid>

				<Grid padding="16px 0px">
					<Input
						label="비밀번호 확인"
						value={pwdconfirm}
						_onChange={changePwdconfirm}
						placeholder="비밀번호를 다시 입력하세요."
					/>
				</Grid>

				<Button
					// _onClick={() => { signup(); }}
				>회원가입하기</Button>
			</Grid>
		</>
	);
};

export default Signup;