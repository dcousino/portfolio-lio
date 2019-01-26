import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import DownArrow from './Logo/Arrow.svg';
import UpArrow from './Logo/UpArrow.svg';

const ScrollLink = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const BounceAnimation = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-30px);
}
60% {
  transform: translateY(-15px);
}
`;

const BouncyArrow = styled.div`
  animation: ${BounceAnimation} 2s infinite;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.colors.primaryLight};
  background-image: url(${props => props.arrow});
  background-size: contain;
`;

const BouncyArrowIcon = ({ direction, onClick }) => (
  <ScrollLink onClick={onClick}>
    <BouncyArrow arrow={direction === 'up' ? UpArrow : DownArrow} />
  </ScrollLink>
);

BouncyArrowIcon.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
};

export default BouncyArrowIcon;
