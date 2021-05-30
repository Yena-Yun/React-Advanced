import React from "react";
import { Grid, Image, Text } from "../elements";


const Post = (props) => {

	return (
		<>
			<Grid>
				<Grid is_flex>
					<Image shape="circle" src={props.user_info.user_profile} />
					<Text bold>{props.user_info.user_name}</Text>
					<Text>{props.insert_dt}</Text>
				</Grid>

				<Grid padding="16px">
					<Text>{props.contents}</Text>
				</Grid>

				<Grid>
					<Image shape="rectangle" src={props.image_url} />
				</Grid>

			<Grid padding="16px">
				<Text bold>댓글 {props.comment_cnt}개</Text>
			</Grid>
			</Grid>
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

export default Post;