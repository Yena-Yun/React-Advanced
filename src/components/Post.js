import React from "react";
import {Grid, Image, Text} from "../elements";


const Post = (props) => {

    return (
      <>
        <Grid>
					<Grid is_flex>
						<Image shape="circle">{props.user_info.user_profile}</Image>
						<Text>{props.user_name}</Text>
						<Text>{props.insert_dt}</Text>
					</Grid>
					<Grid>
						<Text>{props.contents}</Text>
					</Grid>
					<Grid>
						<Image shape="rectangle">{props.image_url}</Image>
					</Grid>
					<Grid>
						<Text>댓글 {props.comment_cnt}개</Text>
					</Grid>
        </Grid>
      </>
    );
}

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