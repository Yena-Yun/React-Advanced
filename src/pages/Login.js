import React, {useState} from 'react';
import { Grid, Text, Button, Input } from '../elements';

import { setCookie } from '../shared/Cookie';


const Login = (props) => {
	// useState로 state 선언
	const [id, setId] = useState('');
	const [pwd, setPwd] = useState('');

	// event가 들어오면 state를 바꾸는 함수 2개 선언
	const changeId = (e) => {
		setId(e.target.value);
	}
	const changePwd = (e) => {
		setPwd(e.target.value);
	}

	// 로그인 버튼 눌렀을 때 쿠키에 id와 pwd를 저장(setCookie)하는 함수
	// (주의: key는 문자열이어야)
	const login = () => {
		// key, value, 만료일(3일 후)
		setCookie('user_id', id, 3);
		setCookie('user_pwd', pwd, 3);
	}

	return (
		<>
			<Grid padding="16px">
				<Text size="32" bold>
					로그인
				</Text>

				<Grid padding="16px 0px">
				<Input
					label="아이디"
					value={id}
					onChange={changeId}
					placeholder="아이디를 입력하세요."
				/>
				</Grid>

				<Grid padding="16px 0px">
					<Input
						label="비밀번호"
						value={pwd}
						onChange={changePwd}
						placeholder="비밀번호를 입력하세요."
					/>
				</Grid>

				<Button
					_onClick={() => { login(); }}
				>로그인하기</Button>
			</Grid>
		</>
	);
};

export default Login;