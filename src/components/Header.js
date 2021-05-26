import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Button } from '../elements';

const Header = (props) => {
	return (
		<HeaderBlock>
			<Grid is_flex>
				<Image shape="circle">{props.user_profile}</Image>
				<Button></Button>
			</Grid>
		</HeaderBlock>
	);
};

Header.defaultProps = {
	user_profile: "https://i.esdrop.com/d/KwrGH1p1Zl/0ggDrjXjEp.jpg"
}
const HeaderBlock = styled.div`
	width: 375px;
	height: 56px;
	background-color: aquamarine;
	margin-bottom: 19px;
`;

export default Header;