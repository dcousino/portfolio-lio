import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const Background = styled.div`
  position: absolute;
  z-index: -2;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 1)
    ),
    url(${props => props.img});
  width: 100%;
  background-position: center;
  height: 100%;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;

const Container = ({ id, children, img }) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background img={img} />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const Header = ({ name, icon = '' }) => (
  <Slide left>
    <Heading color="secondaryLight" mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span
            role="img"
            alt="headerlink"
            aria-label={name}
            style={{ marginLeft: '10px' }}
          >
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default {
  Container,
  Header,
};
