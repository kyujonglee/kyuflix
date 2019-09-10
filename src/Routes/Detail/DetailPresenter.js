import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Helmet from 'react-helmet';
import Videos from '../Video';
import Companies from '../Company';
import Seasons from '../Season';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  position: relative;
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 2;
  width: 50%;
`;

const ImdbLink = styled.a`
  all: unset;
  width: 20px;
  height: 10px;
  background-color: #f5c518;
  color: #000000;
  border-radius: 5px;
  font-weight: 900;
  text-transform: capitalize;
  padding: 2px 5px;
  box-sizing: border-box;
  cursor: pointer;
`;

const TabContainer = styled.ul`
  display: flex;
  margin-top: 10px;
`;

const Tab = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: ${props => (props.select ? '2px solid white' : 'none')};
  box-sizing: border-box;
  padding: 10px 10px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

const CTitle = styled.span`
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 3px;
`;

const TabContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 0px;
  transition: all 0.3s ease-in-out;
`;

const Collection = styled.button`
  all: unset;
  position: absolute;
  bottom: 20px;
  left: 5px;
  transition: transform 0.3s ease-in-out;
  font-size: 20px;
  padding: 10px;
  background-color: rgba(255, 107, 107);
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    transform: translateY(-3px);
  }
`;

const DetailPresenter = withRouter(
  ({
    location: { pathname },
    match: {
      params: { id }
    },
    result,
    loading,
    error
  }) => {
    return loading ? (
      <>
        <Helmet>
          <title>Loading | kyuflix</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{' '}
            | kyuflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require('../../assets/noImage.png')
            }
          />
          <Data>
            <Title>{result.title ? result.title : result.name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>·</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{' '}
                min
              </Item>
              <Divider>·</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, idx) =>
                    idx === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
              {result.imdb_id ? (
                <>
                  <Divider>·</Divider>
                  <Item>
                    <ImdbLink
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target="_blank">
                      imdb
                    </ImdbLink>
                  </Item>
                </>
              ) : null}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <TabContainer>
              <Link
                to={
                  pathname.split('/')[1] === 'movie'
                    ? `/movie/${id}/youtube`
                    : `/show/${id}/youtube`
                }>
                {result.videos.results &&
                  result.videos.results.length !== 0 && (
                    <Tab
                      select={
                        pathname === `/movie/${id}/youtube` ||
                        pathname === `/show/${id}/youtube`
                      }>
                      Youtube
                    </Tab>
                  )}
              </Link>
              <Link
                to={
                  pathname.split('/')[1] === 'movie'
                    ? `/movie/${id}/companies`
                    : `/show/${id}/companies`
                }>
                {result.production_companies &&
                  result.production_companies.length !== 0 && (
                    <Tab
                      select={
                        pathname === `/movie/${id}/companies` ||
                        pathname === `/show/${id}/companies`
                      }>
                      Production Company
                    </Tab>
                  )}
              </Link>
              <Link to={`/movie/${id}/countries`}>
                {result.production_countries &&
                  result.production_countries.length !== 0 && (
                    <Tab select={pathname === `/movie/${id}/countries`}>
                      Production Countries
                    </Tab>
                  )}
              </Link>
              <Link to={`/show/${id}/created_by`}>
                {result.created_by && result.created_by.length !== 0 && (
                  <Tab select={pathname === `/show/${id}/created_by`}>
                    Created By
                  </Tab>
                )}
              </Link>
              <Link to={`/show/${id}/seasons`}>
                {result.seasons && result.seasons.length !== 0 && (
                  <Tab select={pathname === `/show/${id}/seasons`}>Seasons</Tab>
                )}
              </Link>
            </TabContainer>
            <TabContent id="tabResult">
              {(pathname === `/movie/${id}/youtube` ||
                pathname === `/show/${id}/youtube`) && (
                <Videos results={result.videos.results} />
              )}
              {(pathname === `/movie/${id}/companies` ||
                pathname === `/show/${id}/companies`) && (
                <Companies results={result.production_companies} />
              )}
              {pathname === `/movie/${id}/countries` &&
                result.production_countries.map((country, idx) => (
                  <CTitle key={idx}>{country.name}</CTitle>
                ))}
              {pathname === `/show/${id}/created_by` &&
                result.created_by.map(per => (
                  <CTitle key={per.id}>{per.name}</CTitle>
                ))}
              {pathname === `/show/${id}/seasons` && (
                <Seasons results={result.seasons} />
              )}
            </TabContent>
            {result.belongs_to_collection && (
              <Link to={`/collections/${result.belongs_to_collection.id}`}>
                <Collection type="button">Collection</Collection>
              </Link>
            )}
          </Data>
        </Content>
      </Container>
    );
  }
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
