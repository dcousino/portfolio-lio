import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';
import { SectionLink } from 'react-scroll-section';
import BouncyArrowIcon from '../components/BounceArrow';
import Pic from '../components/Logo/drc-logo.svg';

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;
  background: transparent;
  &:hover {
    border-radius: 10%;
  }
`;

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutMeQuery {
        contentfulAbout {
          aboutMe {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          profile {
            title
            image: fluid(maxWidth: 450) {
              src
            }
          }
        }
        backgroundImg: file(relativePath: { eq: "about-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { aboutMe, profile } = data.contentfulAbout;
      return (
        <Section.Container
          id="about"
          img={data.backgroundImg.childImageSharp.fluid.src}
        >
          <Section.Header name="About me" icon="" label="person" />
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box color="white" width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={Pic}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
          <SectionLink section="experience">
            {({ onClick }) => <BouncyArrowIcon onClick={onClick} />}
          </SectionLink>
        </Section.Container>
      );
    }}
  />
);

export default About;
