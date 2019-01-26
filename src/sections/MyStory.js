import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';
import { SectionLink } from 'react-scroll-section';
import BouncyArrowIcon from '../components/BounceArrow';
import { StoryContainer, Story as StoryCard } from '../components/Story';
const Background = () => <div />;

const CARD_HEIGHT = '600px';

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
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const StoryImage = styled(Image)`
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

const StoryTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Story = ({
  name,
  description,
  companyWebsite,
  type,
  startAndEndDate,
  logo,
}) => (
  <StoryCard p={0}>
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
        <StoryImage src={logo.image.src} alt={logo.title} />
        <StoryTag>
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
        </StoryTag>
      </ImageContainer>
    </Flex>
  </StoryCard>
);

Story.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  StoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

const Stories = () => (
  <Section.Container id="story" Background={Background}>
    <Section.Header name="My Story" icon="" Box="notebook" />
    <StaticQuery
      query={graphql`
        query StoryQuery {
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
        }
      `}
      render={({ contentfulAbout }) => (
        <StoryContainer minWidth="600px">
          {contentfulAbout.experience.map((p, i) => (
            <Fade bottom key={p.id} delay={i * 200}>
              <Story key={p.id} {...p} />
            </Fade>
          ))}
        </StoryContainer>
      )}
    />
    <SectionLink section="experience">
      {({ onClick }) => <BouncyArrowIcon onClick={onClick} />}
    </SectionLink>
  </Section.Container>
);

export default Stories;
