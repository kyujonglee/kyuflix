import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  state = {
    result : null,
    loading: true,
    error: null
  };

  render() {
    return <DetailPresenter {...this.state} />;
  }
}
