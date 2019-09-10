import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Company from '../../Components/Company';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Companies = ({ results }) => {
  return (
    <Container>
      {results.map(company => (
        <Company
          key={company.id}
          name={company.name}
          logoPath={company.logo_path}
        />
      ))}
    </Container>
  );
};

Companies.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logoPath: PropTypes.string,
      name: PropTypes.string
    }).isRequired
  ).isRequired
};

export default Companies;
