import React from 'react';
import styled from 'styled-components';

const JobListWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const JobTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const JobItem = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

function JobList() {
  const jobs = []; // Preencha com os dados reais de vagas de emprego

  return (
    <JobListWrapper>
      <JobTitle>Vagas de Emprego</JobTitle>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <JobItem key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Local: {job.location}</p>
          </JobItem>
        ))
      ) : (
        <p>Nenhuma vaga de emprego disponível no momento.</p>
      )}
    </JobListWrapper>
  );
}

export default JobList;
