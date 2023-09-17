import styled from '@emotion/styled';

interface AppButtonTabsProps {
  text: string;
  onClick?: () => void;
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
}));

export const AppButtonTabs: React.FC<AppButtonTabsProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
