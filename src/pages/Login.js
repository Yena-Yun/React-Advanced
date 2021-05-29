import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Grid, Text, Button, Input } from '../elements';
import { setCookie } from '../shared/Cookie';


const Login = (props) => {
	// useState로 state 선언
	const [id, setId] = React.useState('');
	const [pwd, setPwd] = React.useState('');

	// event가 들어오면 state를 바꾸는 함수 2개 선언
	const changeId = (e) => {
		setId(e.target.value);
	}
	const changePwd = (e) => {
		setPwd(e.target.value);
	}

	// 로그인 버튼 눌렀을 때 실행 (쿠키에 저장)
	// (import한 setCookie 함수 활용)
	const login = () => {
		// key, value, 만료일
		setCookie("user_id", id, 3);
		setCookie("user_pwd", pwd, 3);
	}

	return (
		<LoginBlock>
			<Header />
			<Grid padding="0 16px" margin="0 0 20px">
				<Text size="32" margin="66 0 16" bold>로그인</Text>
				<InputGrid>
					<Text>아이디</Text>
					<Inputbox type="text" id="username" value={id} onChange={changeId} placeholder="아이디를 입력하세요." />
				</InputGrid>
				<InputGrid>
					<Text>비밀번호</Text>
					<Inputbox type="password" id="password" value={pwd} onChange={changePwd}placeholder="비밀번호를 입력하세요." />
				</InputGrid>
				<Button __click={() => {
					login();
				}} width="343px" height="50px" bg="black">
						<Text color="white">로그인하기</Text>
					</Button>
			</Grid>
		</LoginBlock>
	);
};

const LoginBlock = styled.div`
	height: 100vh;
`;

const InputGrid = styled.div`
	margin-bottom: 20px;
`;

const Inputbox = styled.input`
	width: 100%;
	padding: 13px 14px 11px;
	box-sizing: border-box;
	font-size: 12px;
	border: 1px solid #000;
`;

export default Login;