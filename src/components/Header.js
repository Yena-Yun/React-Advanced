import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Button } from '../elements';

const Header = (props) => {
	const { user_profile, children } = props;

	return (
		<HeaderBlock>
			<ImageProfile>
				<Image shape="circle" size="40" radius="0" src="https://i.esdrop.com/d/KwrGH1p1Zl/0ggDrjXjEp.jpg"></Image>
			</ImageProfile>
			<div className="button-div">
				<Button>내 정보</Button>
				<Button>알림</Button>
				<Button>로그아웃</Button>
			</div>
		</HeaderBlock>
	);
};

const HeaderBlock = styled.div`
	width: 375px;
	height: 56px;
	padding: 8px 16px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
`;

const ImageProfile = styled.div`
	display: flex;
	align-items: center;
`;

export default Header;