import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../elements";


const Post = (props) => {

	return (
		<>
			{/* <Grid> */}
			<UserGrid>
				<UserinfoGrid>
					<Image shape="circle">{props.user_info.user_profile}</Image>
					<Text bold="600">{props.user_info.user_name}</Text>
				</UserinfoGrid>
				<Text>{props.insert_dt}</Text>
			</UserGrid>

			<Grid>
				<Text>{props.contents}</Text>
			</Grid>
			<Grid>
				<Image shape="rectangle" size="375px">{props.image_url}</Image>
			</Grid>
			<Grid>
				<Text>댓글 {props.comment_cnt}개</Text>
			</Grid>
			{/* </Grid> */}
		</>
	);
}

//defaultProps로 필요한 props들을 미리 넘겨놓음 (값이 없을 때 깨지는 현상 방지)
// Image에서 ...styles로 넘어오는 props에 더해서 
// 추가로 Post만의 props 지정 가능 (상속과 비슷한 개념)
Post.defaultProps = {
	user_info: {
		user_name: "Cheryl",
		user_profile: "https://i.esdrop.com/d/KwrGH1p1Zl/0ggDrjXjEp.jpg",
	},
	image_url: "https://i.esdrop.com/d/KwrGH1p1Zl/X9s1vdD2Te.JPEG",
	contents: "윙크하는 강아지",
	comment_cnt: 10,
	insert_dt: "2021-05-25 10:00:00",
};

const UserGrid = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 19px solid #cfe4f7;
	padding: 13px 16px 21px;
`;

const UserinfoGrid = styled.div`
	display: flex;
`;

export default Post;