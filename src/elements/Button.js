import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from '../elements';


const Button = (props) => {
	const { width, height, margin, padding, bg, children, type} = props;
	
	const styles = {
		width: width,
		height: height,
		margin: margin,
		padding: padding,
		bg: bg,
	}

	return (
		<>
			<Grid>
				<ElButton {...styles} type={type}>
					{children}
				</ElButton>
			</Grid>
		</>
	);
};

Button.defaultProps = {
	width: '70px',
	height: '40px',
	bg: '#C4C4C4',
	type: "submit",
}

const ElButton = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	${(props) => (props.margin ? `margin: ${props.margin};` : "")};
	padding: ${(props) => props.padding};
	background-color: ${(props) => props.bg};
	border: none;
	box-shadow: none;
	font-size: 13px;
	cursor: pointer;
`;

export default Button;