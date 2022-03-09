import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import { setDealsAC } from '../../redux/deals-reducer';
import URL from '../../api/api';

import DealsList from './deals-list';

const DealListContainer = ({
  stores,
  checkedStore,
  games,
  title,
  deals,
  setDeals,
}) => {
  const storeData = stores.map((store, id) => {
    if (store.checked === true) {
      return id + 1;
    }
    return undefined;
  });
  const isStore = storeData.filter(store => store !== undefined).join();

  useEffect(() => {
    if (isStore) {
      axios
        .get(
          `${URL}deals?storeID=${isStore}&limit=60${
            games.length > 0 ? `&title=${title}` : ''
          }`,
        )
        .then(response => {
          setDeals(
            response.data.length !== 0
              ? ([...deals], [...response.data])
              : deals,
          );
        });
    }
    return setDeals([]);
  }, [checkedStore, isStore, games, title]);

  return <DealsList deals={deals} />;
};

const mapStateToProps = state => {
  return {
    deals: state.dealsPage.deals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDeals: deals => {
      dispatch(setDealsAC(deals));
    },
  };
};

DealListContainer.propTypes = {
  checkedStore: PropTypes.bool,
  stores: PropTypes.array,
  title: PropTypes.string,
  games: PropTypes.array,
  deals: PropTypes.array,
  setDeals: PropTypes.func,
};

DealListContainer.defaultProps = {
  checkedStore: false,
  stores: [],
  title: '',
  games: [],
  deals: [],
  setDeals: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(DealListContainer);
