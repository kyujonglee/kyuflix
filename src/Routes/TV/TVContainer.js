import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  render() {
    return <TVPresenter {...this.state} />;
  }
}
