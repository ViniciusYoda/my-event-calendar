import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SubmitButton = styled(Button)`
  background-color: #0077b6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005a99;
  }
`;

function PostForm() {
  const [postText, setPostText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() === '') {
      alert('Por favor, insira uma postagem antes de publicar.');
      return;
    }
    // Lógica para criar uma postagem, você pode enviar a postagem para um servidor ou armazená-la localmente.
    console.log('Postagem:', postText);
    // Limpa o campo de texto após o envio.
    setPostText('');
  };

  return (
    <FormWrapper>
      <FormTitle>Criar Postagem</FormTitle>
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Digite sua postagem..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <SubmitButton type="submit">Publicar</SubmitButton>
      </form>
    </FormWrapper>
  );
}

export default PostForm;
