
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import PostForm from './PostForm';
import PostList from './PostList';

const HomeWrapper = styled.div`
  padding: 20px;
`;

const HomeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeContent>
        <PostForm />
        <PostList />
      </HomeContent>
    </HomeWrapper>
  );
}

export default Home;
