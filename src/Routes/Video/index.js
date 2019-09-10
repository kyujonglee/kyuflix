import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Video from '../../Components/Video';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Videos = ({ results }) => {
  return (
    <Container>
      {results.map(video => (
        <Video key={video.id} videoKey={video.key} name={video.name} />
      ))}
    </Container>
  );
};

Videos.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string,
      name: PropTypes.string
    }).isRequired
  ).isRequired
};

export default Videos;
