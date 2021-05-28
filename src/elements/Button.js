import React from 'react';
import styled from 'styled-components';
import { Text } from '../elements';


const Button = (props) => {
	const { width, height, margin, padding, bg, children } = props;
	
	const styles = {
		width: width,
		height: height,
		margin: margin,
		padding: padding,
		bg: bg,
	}

	return (
		<>
			<Btn {...styles}>
				<Text bold margin="0" size="12">{children}</Text>
			</Btn>
		</>
	);
};

Button.defaultProps = {
	width: '70px',
	height: '40px',
	bg: '#C4C4C4',
	margin: false,
}

const Btn = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	${(props) => (props.margin ? `margin: ${props.margin};` : "")};
	padding: ${(props) => props.padding};
	background-color: ${(props) => props.bg};
	border: none;
	box-shadow: none;
	cursor: pointer;
`;

export default Button;