import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.span`
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 3px;
`;

const Countries = ({ results }) =>
  results.map((country, idx) => <Title key={idx}>{country.name}</Title>);

Countries.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  ).isRequired
};

export default Countries;
