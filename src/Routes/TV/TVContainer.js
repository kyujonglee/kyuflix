import React from 'react';
import TVPresenter from './TVPresenter';
import { tvapi } from '../../api';

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvapi.topRated();
      const {
        data: { results: popular }
      } = await tvapi.popular();
      const {
        data: { results: airingToday }
      } = await tvapi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Can't find TV information"
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.state);
    return <TVPresenter {...this.state} />;
  }
}
