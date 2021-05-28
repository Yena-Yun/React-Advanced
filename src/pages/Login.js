import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Grid, Text, Button } from '../elements';

const Login = (props) => {
	return (
		<LoginBlock>
			<Header />
			<Grid padding="0 16px" margin="0 0 20px">
				<Text size="32" margin="66 0 16" bold>로그인</Text>
				<InputGrid>
					<Text>아이디</Text>
					<Inputbox type="text" id="username" placeholder="아이디를 입력하세요." />
				</InputGrid>
				<InputGrid>
					<Text>비밀번호</Text>
					<Inputbox type="password" id="password" placeholder="비밀번호를 입력하세요." />
				</InputGrid>
					<Button width="343px" height="50px" bg="black">
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
`;

export default Login;