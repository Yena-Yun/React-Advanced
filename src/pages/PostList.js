import React from "react";
import styled from 'styled-components';
import Post from '../components/Post';
import Header from '../components/Header';

const PostList = (props) => {

    return (
			<PostListBlock>
				<Header />
        <Post />
        <Post />
      </PostListBlock>
    );
}

const PostListBlock = styled.div`
  /* width: 375px;
  height: 956px; */
  display: flex;
	flex-direction: column;
`;

export default PostList;