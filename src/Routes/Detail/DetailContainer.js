import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parseId = parseInt(id);
    console.log(this.props);
    if (isNaN(parseId)) {
      return push('/');
    }
  }

  render() {
    return <DetailPresenter {...this.state} />;
  }
}
