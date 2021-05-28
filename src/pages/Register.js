import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Grid, Text, Button } from '../elements';


const Register = (props) => {
	return (
		<RegisterBlock>
			<Header />
			<Grid padding="0 16px" margin="0 0 20px">
				<Text size="32" margin="66 0 16" bold>회원가입</Text>
				<InputGrid>
					<Text>아이디</Text>
					<Inputbox type="text" id="username" placeholder="아이디를 입력하세요." />
				</InputGrid>
				<InputGrid>
					<Text>닉네임</Text>
					<Inputbox type="text" id="nickname" placeholder="닉네임을 입력하세요." />
				</InputGrid>
				<InputGrid>
					<Text>비밀번호</Text>
					<Inputbox type="password" id="password" placeholder="비밀번호를 입력하세요." />
				</InputGrid>
				<InputGrid>
					<Text>비밀번호 확인</Text>
					<Inputbox type="password" id="password-confirm" placeholder="비밀번호를 다시 입력하세요." />
				</InputGrid>
				<ButtonGrid>
					<Button width="343px" height="50px" bg="black" margin="24 0 0">
						<Text color="white">회원가입하기</Text>
					</Button>
				</ButtonGrid>
			</Grid>
		</RegisterBlock>
	);
};

const RegisterBlock = styled.div`
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

const ButtonGrid = styled.div`
	margin-top: 24px;
`;

export default Register;