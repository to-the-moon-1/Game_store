import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import DealsListContainer from '../deals/deals-list-container';

const StoresList = ({
  activeStores,
  noActiveStores,
  checkedStore,
  stores,
  title,
  games,
}) => (
  <div>
    <Row>
      <h1 className="header">Stores</h1>
    </Row>
    {stores.map((store, id) => (
      <Row key={`id_${store.storeID}`} className="cardStore">
        <Col span={1}>
          <img
            alt="store icon"
            className="storeImg"
            src={`https://www.cheapshark.com/${store.images.icon}`}
          />
        </Col>

        <Col span={22}>
          <span className="storeName">{store.storeName}</span>
        </Col>

        <Col span={1}>
          <input
            checked={store.checked}
            className="checkbox"
            onChange={() => {
              store.checked ? noActiveStores(id) : activeStores(id);
            }}
            type="checkbox"
          />
        </Col>
      </Row>
    ))}

    <DealsListContainer
      checkedStore={checkedStore}
      games={games}
      stores={stores}
      title={title}
    />
  </div>
);

StoresList.propTypes = {
  activeStores: PropTypes.func,
  noActiveStores: PropTypes.func,
  checkedStore: PropTypes.bool,
  stores: PropTypes.array,
  title: PropTypes.string,
  games: PropTypes.array,
};

StoresList.defaultProps = {
  activeStores: () => {},
  noActiveStores: () => {},
  checkedStore: false,
  stores: [],
  title: '',
  games: [],
};

export default StoresList;
