import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  setActiveStoresAC,
  setNoActiveStoresAC,
  setStoresAC,
} from '../../redux/stores-reducer';
import URL from '../../api/api';

import StoresList from './stores-list';

const StoresListContainer = ({
  activeStores,
  noActiveStores,
  setStores,
  stores,
  title,
  games,
}) => {
  const checkedStore = stores.some(store => store.checked === true);

  useEffect(() => {
    if (stores.length === 0) {
      axios.get(`${URL}/stores`).then(response => {
        setStores(response.data);
      });
    }
  });

  return (
    <StoresList
      activeStores={activeStores}
      checkedStore={checkedStore}
      games={games}
      noActiveStores={noActiveStores}
      stores={stores}
      title={title}
    />
  );
};

const mapStateToProps = state => {
  return {
    stores: state.storesPage.stores,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStores: stores => {
      dispatch(setStoresAC(stores));
    },
    activeStores: id => {
      dispatch(setActiveStoresAC(id));
    },
    noActiveStores: id => {
      dispatch(setNoActiveStoresAC(id));
    },
  };
};

StoresListContainer.propTypes = {
  activeStores: PropTypes.func,
  noActiveStores: PropTypes.func,
  setStores: PropTypes.func,
  stores: PropTypes.array,
  title: PropTypes.string,
  games: PropTypes.array,
};

StoresListContainer.defaultProps = {
  activeStores: () => {},
  noActiveStores: () => {},
  setStores: () => {},
  stores: [],
  title: '',
  games: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoresListContainer);
