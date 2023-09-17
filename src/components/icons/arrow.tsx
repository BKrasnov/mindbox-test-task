import styled from '@emotion/styled';

interface ArrowIconProps {
  isShow: boolean;
}

const StyledArrowIcon = styled.svg<ArrowIconProps>((props) => ({
  width: '18px',
  height: '24px',
  fill: 'none',
  transition: 'transform 0.3s ease',
  transform: props.isShow ? 'rotate(270deg)' : 'rotate(90deg)',
}));

export const ArrowIcon = ({ isShow = true }) => {
  return (
    <StyledArrowIcon
      isShow={isShow}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
    >
      <path
        d="M2 11.939C2 12.3208 2.146 12.6465 2.44922 12.9385L11.209 21.5073C11.4448 21.7544 11.7593 21.8779 12.1187 21.8779C12.8486 21.8779 13.4214 21.3164 13.4214 20.5752C13.4214 20.2158 13.2754 19.8901 13.0283 19.6431L5.1333 11.939L13.0283 4.23486C13.2754 3.97656 13.4214 3.65088 13.4214 3.2915C13.4214 2.56152 12.8486 2 12.1187 2C11.7593 2 11.4448 2.12354 11.209 2.37061L2.44922 10.9395C2.146 11.2314 2.01123 11.5571 2 11.939Z"
        fill="#007AFF"
      />
    </StyledArrowIcon>
  );
};
