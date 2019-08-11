import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({ error: "Can't find movies infromation." });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return <HomePresenter {...this.state} />;
  }
}
