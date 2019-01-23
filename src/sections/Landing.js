import { Box, Flex, Heading, Text } from 'rebass';
import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RubberBand from 'react-reveal/RubberBand';
import { SectionLink } from 'react-scroll-section';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import { secondaryLight } from '../../colors';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import img from '../../media/landing-background.jpeg';
import MouseIcon from '../components/BounceArrow';

const LandingPageBg = styled.div`
  position: absolute;
  z-index: -2;
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
`;

const Background = () => <LandingPageBg />;

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <RubberBand>
              <Heading
                textAlign="center"
                as="h1"
                color="primary"
                fontSize={[5, 6, 8]}
                mb={[3, 4, 5]}
              >
                {`Hello, I'm ${name}!`}
              </Heading>
            </RubberBand>

            <Heading
              as="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
            >
              <TextLoop>
                {roles.map(text => (
                  <Text color={secondaryLight} width={[300, 500]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
