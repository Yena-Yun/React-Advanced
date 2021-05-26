import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Grid, Text, Button } from '../elements';

const Login = (props) => {
	return (
		<LoginBlock>
			<Header />
			<Grid>
				<Text>로그인</Text>
				<Grid>
					<label for="username">아이디</label>
					<input type="text" id="username" placeholder="아이디를 입력하세요." />
				</Grid>
				<Grid>
					<label for="password">비밀번호</label>
					<input type="password" id="password"  placeholder="비밀번호를 입력하세요." />
				</Grid>
				<Button width="343px" height="50px" bg="black">
					<Text color="white">로그인하기</Text>
				</Button>
			</Grid>
		</LoginBlock>
	);
};

const LoginBlock = styled.div`

`;

export default Login;