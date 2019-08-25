import React, { useState, useEffect } from 'react';
import CollectionsPresenter from './CollectionsPresenter';
import { moviesApi } from '../../api';

const CollectionsContainer = props => {
  const [state, setState] = useState({
    result: null,
    loading: true,
    error: null
  });
  const {
    match: {
      params: { id }
    }
  } = props;
  useEffect(() => {
    const fetchData = async () => {
      const data = await moviesApi.collections(id);
      setState(state => ({ ...state, result: data.data.parts, loading: false }));
    };
    fetchData();
  }, [id]);
  return <CollectionsPresenter {...state} />;
};

export default CollectionsContainer;
