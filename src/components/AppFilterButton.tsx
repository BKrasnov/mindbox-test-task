import styled from '@emotion/styled';
import { ButtonHTMLAttributes, FC, memo } from 'react';

interface AppButtonTabsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const StyledButton = styled.button(({ theme }) => ({
  padding: '2px 4px',
  border: '1px solid transparent',
  borderRadius: '6px',
  cursor: 'pointer',
  color: theme.colors.tertiaryColor,
  ':hover': {
    border: '1px solid grey',
  },
  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}));

export const AppFilterButton: FC<AppButtonTabsProps> = memo(({ text, ...props }) => {
  return (
    <StyledButton {...props}>
      {text}
    </StyledButton>
  );
});
