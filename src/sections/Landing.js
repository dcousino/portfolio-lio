import { Box, Flex, Heading, Text } from 'rebass';
import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RubberBand from 'react-reveal/RubberBand';
import { SectionLink } from 'react-scroll-section';
import TextLoop from 'react-text-loop';
import Divider from '../components/Divider';
import { secondaryLight } from '../../colors';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import BouncyArrowIcon from '../components/BounceArrow';

const LandingPage = () => (
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
        backgroundImg: file(relativePath: { eq: "alt-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nextSectionBackgroundImg: file(relativePath: { eq: "about-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { name, socialLinks, roles } = data.contentfulAbout;

      return (
        <div>
          <Section.Container
            id="home"
            img={data.backgroundImg.childImageSharp.fluid.src}
          >
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
                {({ onClick }) => <BouncyArrowIcon onClick={onClick} />}
              </SectionLink>
            </Fragment>
          </Section.Container>
        </div>
      );
    }}
  />
);

export default LandingPage;
