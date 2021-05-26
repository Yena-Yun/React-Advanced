import React from "react";
import styled from "styled-components";


const Grid = (props) => {
	// bg는 background-color
	const { is_flex, width, margin, padding, bg, children } = props;

	const styles = {
		is_flex: is_flex,
		width: width,
		margin: margin,
		padding: padding,
		bg: bg,
	}

  return (
    <>
			<GridBox {...styles}>{children}</GridBox>
    </>
  );
};

// children은 객체일 수 있어서 null, 
//나머지는 있는지 없는지 여부만 파악 -true or false
Grid.defaultProps = {
	children: null,
	is_flex: false,
	
	// width의 기본값은 100%
	width: "100%",

	margin: false,
	padding: false,
	bg: false,
};

// 스타일링 컴포넌트
const GridBox = styled.div`
	// width는 요소 자체는 항상 있되 값은 바뀔 수 있으므로 props로 받고,
	width: ${(props) => props.width};
	// height는 무조건 100%
	height: 100%;

	// padding 있으면 box-sizing 필요
	box-sizing: border-box;

	// 기본값이 true or false 인 경우는 전부 삼항연산자로 처리
	// => 아예 자체를 props로 받아서, props의 해당 요소가 있으면 백틱을 이용해 생성하고
	// 아니면 ""로 공백 처리 (백틱으로 만들 때 ';' 들어가므로 코드의 맨 끝에는 ';' 없음)
	${(props) => (props.padding ? `padding: ${props.padding};` : "") }
	${(props) => (props.margin ? `margin: ${props.margin};` : "") }
	${(props) => (props.bg ? `background-color: ${props.bg};` : "") }
	${(props) => (props.is_flex
	? `display: flex; align-items: center; justify-content: space-between;`
	: "")}

	display: flex;
	flex-direction: column;
`;

export default Grid;