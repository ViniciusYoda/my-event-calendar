// PostList.js
import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.p`
  font-size: 16px;
`;

function PostList() {
  const posts = []; // Preencha com os dados reais das postagens

  return (
    <div>
      <h2>Feed</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <PostWrapper key={index} className="post">
            <PostText>{post.text}</PostText>
          </PostWrapper>
        ))
      ) : (
        <p>Nenhuma postagem para exibir ainda. Seja o primeiro a publicar!</p>
      )}
    </div>
  );
}

export default PostList;
