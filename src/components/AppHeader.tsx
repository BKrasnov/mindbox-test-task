import { FC } from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header({
  textAlign: 'center',
});

export const AppHeader: FC = () => {
  return (
    <StyledHeader>
      <h1>Тестовое задание для компании Mindbox - Todo list</h1>
    </StyledHeader>
  );
};
