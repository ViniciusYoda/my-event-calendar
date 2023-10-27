// Home.js
import React from 'react';
import Header from '../components/Header';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

function Home() {
  return (
    <div>
      <Header />
      <PostForm />
      <PostList />
    </div>
  );
}

export default Home;
