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
				<Text>{children}</Text>
			</Btn>
		</>
	);
};

Button.defaultProps = {
	width: '80px',
	height: '40px',
	margin: '8px 5.5px',
	padding: '13px 0',
	bg: '#C4C4C4'
}

const Btn = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	background-color: ${(props) => props.bg};
`;

export default Button;