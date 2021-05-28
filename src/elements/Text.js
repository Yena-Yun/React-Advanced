import React from "react";
import styled from "styled-components";


const Text = (props) => {
	const { bold, color, size, children } = props;

	const styles = {
		bold: bold,
		color: color,
		size: size,
	}

	return (
		<>
			<P {...styles}>{children}</P>
		</>
	);
};

// 받아온 props 전체의 초기값 설정해야 (children 포함)
Text.defaultProps = {
	children: null,
	bold: false,
	color: "#222831",
	size: "12",
};

// 스타일링 컴포넌트
const P = styled.p`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size}px;
	//글자 굵기는 true or false -> 삼항연산자로 처리
	font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

export default Text;