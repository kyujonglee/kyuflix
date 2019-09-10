import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import Season from '../../Components/Season';

const Seasons = ({ results }) => {
  return (
    <Section>
      {results.map(season => (
        <Season
          key={season.id}
          imageUrl={season.poster_path}
          title={season.name}
          year={season.air_date}
          count={season.episode_count}
        />
      ))}
    </Section>
  );
};

Seasons.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      name: PropTypes.string,
      air_date: PropTypes.string,
      episode_count: PropTypes.number
    }).isRequired
  ).isRequired
};

export default Seasons;
