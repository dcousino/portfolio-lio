import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Portfolio from './Logo/Portfolio.svg';

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: bottom;
`;

const RenponsiveLogo = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 400px) {
    width: 70px;
    height: 70px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center">
        <Logo url="https://www.gatsbyjs.org/" logo={Portfolio} alt="DrC Logo" />
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
