import styled from '@emotion/styled';

interface AppButtonTabsProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const StyledButton = styled.button((props) => ({
  padding: '2px 4px',
  border: '1px solid transparent',
  borderRadius: '6px',
  cursor: 'pointer',
  color: props.theme.colors.tertiaryColor,
  ':hover': {
    border: '1px solid grey',
  },
  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}));

export const AppButtonTabs: React.FC<AppButtonTabsProps> = ({ text, onClick, isDisabled }) => {
  return (
    <StyledButton disabled={isDisabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
