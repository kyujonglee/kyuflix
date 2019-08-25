import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Helmet from 'react-helmet';
import Section from '../../Components/Section';
import Season from '../../Components/Season';

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
  border-bottom: ${props => (props.Flag ? '2px solid white' : 'none')};
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

const TabContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 0px;
  transition: all 0.3s ease-in-out;
`;

const TabLink = styled.a`
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

const ProContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const ProItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 0px 10px;
  box-sizing: border-box;
`;
const ProImg = styled.img`
  width: auto;
  height: 100px;
  margin-bottom: 10px;
`;
const ProTitle = styled.span`
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 3px;
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

const DetailPresenter = ({ result, loading, error }) => {
  const initDetailTabs = {
    youTubeFlag: false,
    productionCompanyFlag: false,
    productionCountriesFlag: false,
    createdByFlag: false,
    seasonsFlag: false
  };

  const [detailTabs, setDetailTabs] = useState({
    ...initDetailTabs,
    youTubeFlag: true
  });

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
          {result.original_title ? result.original_title : result.original_name}{' '}
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
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
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
                    target="_blank"
                  >
                    imdb
                  </ImdbLink>
                </Item>
              </>
            ) : null}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <TabContainer>
            {result.videos.results && result.videos.results.length !== 0 && (
              <Tab
                onClick={() =>
                  setDetailTabs({ ...initDetailTabs, youTubeFlag: true })
                }
                Flag={detailTabs.youTubeFlag}
              >
                Youtube
              </Tab>
            )}
            {result.production_companies &&
              result.production_companies.length !== 0 && (
                <Tab
                  onClick={() =>
                    setDetailTabs({
                      ...initDetailTabs,
                      productionCompanyFlag: true
                    })
                  }
                  Flag={detailTabs.productionCompanyFlag}
                >
                  Production Company
                </Tab>
              )}
            {result.production_countries &&
              result.production_countries.length !== 0 && (
                <Tab
                  onClick={() =>
                    setDetailTabs({
                      ...initDetailTabs,
                      productionCountriesFlag: true
                    })
                  }
                  Flag={detailTabs.productionCountriesFlag}
                >
                  Production Countries
                </Tab>
              )}
            {result.created_by && result.created_by.length !== 0 && (
              <Tab
                onClick={() =>
                  setDetailTabs({
                    ...initDetailTabs,
                    createdByFlag: true
                  })
                }
                Flag={detailTabs.createdByFlag}
              >
                Created By
              </Tab>
            )}
            {result.seasons && result.seasons.length !== 0 && (
              <Tab
                onClick={() =>
                  setDetailTabs({
                    ...initDetailTabs,
                    seasonsFlag: true
                  })
                }
                Flag={detailTabs.seasonsFlag}
              >
                Seasons
              </Tab>
            )}
          </TabContainer>
          <TabContent id="tabResult">
            {detailTabs.youTubeFlag &&
              result.videos.results.map(video => (
                <TabLink
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                  target="_blank"
                  key={video.id}
                >
                  {video.name}
                </TabLink>
              ))}
            {detailTabs.productionCompanyFlag && (
              <ProContainer>
                {result.production_companies.map(com => {
                  return (
                    <ProItem key={com.id}>
                      <ProImg
                        src={
                          com.logo_path
                            ? `https://image.tmdb.org/t/p/original${
                                com.logo_path
                              }`
                            : require('../../assets/noImage.png')
                        }
                        alt={com.name}
                      />
                      <ProTitle>{com.name}</ProTitle>
                    </ProItem>
                  );
                })}
              </ProContainer>
            )}
            {detailTabs.productionCountriesFlag &&
              result.production_countries.map((coun, idx) => {
                return <ProTitle key={idx}>{coun.name}</ProTitle>;
              })}
            {detailTabs.createdByFlag &&
              result.created_by.map((per, idx) => {
                return <ProTitle key={per.id}>{per.name}</ProTitle>;
              })}
            {detailTabs.seasonsFlag && (
              <Section>
                {result.seasons.map(season => {
                  return (
                    <Season
                      key={season.id}
                      imageUrl={season.poster_path}
                      title={season.name}
                      year={season.air_date}
                      count={season.episode_count}
                    />
                  );
                })}
              </Section>
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
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
