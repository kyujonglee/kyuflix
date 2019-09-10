import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  display: block;
  cursor: pointer;
  margin: 10px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  &:hover {
    transform: scale(1.01);
  }
`;

const Video = ({ videoKey, name }) => {
  return (
    <Link href={`https://www.youtube.com/watch?v=${videoKey}`} target="_blank">
      {name}
    </Link>
  );
};

Video.propTypes = {
    videoKey: PropTypes.string,
  name: PropTypes.string
};

export default Video;
