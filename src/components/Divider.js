import styled from 'styled-components';

const Divider = styled.div`
  height: 50px;
  border-style: double none double none;
  border-width: 10px;
  border-color: ${props => props.theme.colors.secondaryLight};
  background-color: ${props => props.theme.colors.primary};
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 1)
  );
`;

export default Divider;
