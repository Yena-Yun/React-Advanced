// 쿠키: 아이디나 비밀번호로 인증 후 서버에게서 받은 토큰을 
//			클라 쪽에서 저장해두는 웹 저장소 중 하나

// 쿠키가 있으면 로그인한 헤더 보여주기
import React, { useState, useEffect } from 'react';
import { Grid, Text, Button } from '../elements';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
// 쿠키 가져오는 함수(로그인), 쿠키 제거하는 함수(로그아웃) 임포트
import { getCookie, deleteCookie } from '../shared/Cookie';


const Header = (props) => {
	const [is_login, setIsLogin] = useState(false);

	// 로그인이 되었을 때 (화면을 새로고침)
	useEffect(() => {
		//getCookie로 쿠키 가져오기
		let cookie = getCookie('login');
		//(가져온 쿠키 콘솔창으로 확인)
		console.log(cookie);

		//쿠키가 있으면
		if (cookie) {
			//로그인 상태를 true로 바꿈
			setIsLogin(true);
		//없으면
		} else {
			//false로 바꿈
			setIsLogin(false);
		}
	}, []);

	//로그인이 되었을 때 보여줄 헤더
	if (is_login) {
		return (
			<>
				<Grid is_flex padding="4px 16px">
					<Grid>
						<Text margin="0px" size="24px" bold>
							Hello
						</Text>
					</Grid>

					<Grid is_flex>
						<Button>내 정보</Button>
						<Button>알림</Button>
						{/* 로그아웃 버튼에 deleteCookie 함수를 연결해준다 */}
						<Button _onClick={() => { deleteCookie('login'); }}>
							로그아웃
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}

	//로그인이 안 됐을 때 보여줄 헤더
	return (
		<>
			<Grid is_flex padding="4px 16px">
				<Grid>
					<Text margin="0px" size="24px" bold>
						Hello
					</Text>
				</Grid>

				<Grid is_flex>
					<Button _onClick={() => { Login(); }}>
						로그인
					</Button>
					<Button _onClick={() => { Signup(); }}>
						회원가입
					</Button>
				</Grid>
			</Grid>
			</>
	)
};

export default Header;