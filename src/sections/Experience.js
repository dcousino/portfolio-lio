import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';
import { SectionLink } from 'react-scroll-section';
import BouncyArrowIcon from '../components/BounceArrow';

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  height: 100%;
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ExperienceImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ExperienceTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Experience = ({
  name,
  description,
  companyWebsite,
  type,
  startAndEndDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ExperienceImage src={logo.image.src} alt={logo.title} />
        <ExperienceTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5}>
              <SocialLink
                name={`${companyWebsite}_website`}
                fontAwesomeIcon="globe"
                url={companyWebsite}
              />
            </Box>
          </Flex>
          <ImageSubtitle bg="primary" color="black" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="secondaryLight">{startAndEndDate}</ImageSubtitle>
          </Hide>
        </ExperienceTag>
      </ImageContainer>
    </Flex>
  </Card>
);

Experience.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ExperienceUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

const Experiences = () => (
  <StaticQuery
    query={graphql`
      query ExperiencesQuery {
        contentfulAbout {
          experience {
            id
            name
            description
            companyWebsite
            startAndEndDate
            type
            logo {
              title
              image: resize(width: 200, quality: 100) {
                src
              }
            }
          }
        }
        backgroundImg: file(relativePath: { eq: "about-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ backgroundImg, contentfulAbout }) => (
      <Section.Container
        id="experience"
        img={backgroundImg.childImageSharp.fluid.src}
      >
        <Section.Header name="Work Experience" icon="💻" Box="notebook" />

        <CardContainer minWidth="350px">
          {contentfulAbout.experience.map((p, i) => (
            <Fade bottom key={p.id} delay={i * 200}>
              <Experience key={p.id} {...p} />
            </Fade>
          ))}
        </CardContainer>

        <SectionLink section="home">
          {({ onClick }) => (
            <BouncyArrowIcon direction="up" onClick={onClick} />
          )}
        </SectionLink>
      </Section.Container>
    )}
  />
);

export default Experiences;
