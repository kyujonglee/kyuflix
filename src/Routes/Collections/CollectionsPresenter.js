import React from 'react';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import Poster from '../../Components/Poster';
import Section from '../../Components/Section';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 20px;
`;

const CollectionsPresenter = ({ result, loading, error }) => {
  return loading ? (
    <>
      <Helmet>
        <title>Loading | kyuflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>Collection | kyuflix</title>
      </Helmet>
      <Container>
        <Section title="Collections">
          {result.map(coll => (
            <Poster
              key={coll.id}
              id={coll.id}
              title={coll.title}
              imageUrl={coll.backdrop_path}
              rating={coll.vote_average}
              year={coll.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default CollectionsPresenter;
