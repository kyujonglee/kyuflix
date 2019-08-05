import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    movieResults : null,
    tvResults : null,
    searchTerm : "",
    loading: true,
    error: null
  };

  render() {
    return <SearchPresenter {...this.state} />;
  }
}
