import styled from '@emotion/styled';

export const StyledTodoWrapper = styled.div((props) => ({
  minWidth: '425px',
  width: '70%',
  backgroundColor: props.theme.colors.primaryColor,
  padding: '0.5rem',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  margin: '0 auto',
  marginTop: '2vh',
}));
