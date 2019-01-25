import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url }) => (
  <Tooltip
    id={name}
    title={name}
    placement="bottom"
    trigger={['mouseenter']}
    overlay={<span>tooltip</span>}
  >
    <IconLink
      href={url}
      target="_blank"
      aria-label={fontAwesomeIcon}
      rel="noopener noreferrer"
    >
      <FontAwesome name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
