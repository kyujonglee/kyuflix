import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: auto;
  height: 100px;
  margin-bottom: 10px;
`;

const Title = styled.span`
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 3px;
`;

const Company = ({ name, logoPath }) => {
  return (
    <Container>
      <Img
        src={
          logoPath
            ? `https://image.tmdb.org/t/p/original${logoPath}`
            : require('../assets/noImage.png')
        }
        alt={name}
      />
      <Title>{name}</Title>
    </Container>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  logoPath: PropTypes.string
};

export default Company;
