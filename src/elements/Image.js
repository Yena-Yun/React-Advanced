import styled from 'styled-components';
import React from "react";


const Image = (props) => {
	const { shape, src, size } = props;

	const styles = {
		src: src,
		size: size,
	}

	// shape에 따라 return문 바꾸기
	if (shape === "circle") {
		return (
			<ImageCircle {...styles}></ImageCircle>
		)
	}
	
	if (shape === "rectangle") {
		return (
			<AspectOutter>
				<AspectInner {...styles}></AspectInner>
			</AspectOutter >
		);
	}

    return (
        <>
            
        </>
    )
}

Image.defaultProps = {
	shape: "circle",
	src: "https://i.esdrop.com/d/KwrGH1p1Zl/X9s1vdD2Te.JPEG",
	size: 36,
};

// 사각형 바깥쪽 너비는 반응형
const AspectOutter = styled.div`
	width: 100%;
	min-width: 250px;
`;

// Outter에 상대적으로 위치해야 하므로 relative
const AspectInner = styled.div`
	position: relative;
	padding-top: 75%;
	overflow: hidden;

	//background-image: url("")
	background-image: url("${(props) => props.src}");
	//background-position: relative, absolute, sticky, fixed
	//background-size: auto, cover, contain 등
	background-size: cover;
`;

const ImageCircle = styled.div`
	// size를 props로 받는 변수 선언
	--size: ${(props) => props.size}px;
	// 변하는 요소가 모두 size이므로 변수 사용
	width: var(--size);
	height: var(--size);
	border-radius: var(--size);

	background-image: url("${(props) => props.src}");
	background-size: cover;
	margin: 4px;
`;

export default Image;