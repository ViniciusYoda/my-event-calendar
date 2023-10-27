import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import JobList from './JobList';

const JobsWrapper = styled.div`
  padding: 20px;
`;

const JobsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function Jobs() {
  return (
    <JobsWrapper>
      <Header />
      <JobsContent>
        <JobList />
      </JobsContent>
    </JobsWrapper>
  );
}


