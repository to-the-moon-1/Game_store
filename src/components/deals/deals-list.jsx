import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const DealsList = ({ deals }) => {
  const dealsList = deals.map(
    ({ releaseDate, gameID, thumb, title, dealRating, metacriticLink }, id) => {
      const date = new Date(+`${releaseDate}`).toLocaleDateString();

      return (
        <Row key={`id_${gameID}${id}`} className="dealCard">
          <Col span={2}>
            <img alt="game" className="dealImg" src={`${thumb}`} />
          </Col>
          <Col className="containerContentGame" span={22}>
            <Row>
              <Col className="leftAlign" span={12}>
                <span>{title}</span>
              </Col>
              <Col className="centerAlign" span={3}>
                <span>
                  {dealRating}&nbsp;&nbsp;
                  <StarOutlined />
                </span>
              </Col>
              <Col className="centerAlign" span={6}>
                <span>{date}</span>
              </Col>
              <Col className="rightAlign" span={3}>
                <a
                  href={`https://www.metacritic.com${metacriticLink}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <em>More . . .</em>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    },
  );

  return (
    <div>
      <Row>
        <h1 className="header">Deals</h1>
      </Row>
      {deals.length !== 0 ? dealsList : <div>Empty deals list</div>}
    </div>
  );
};

DealsList.propTypes = {
  deals: PropTypes.array,
};

DealsList.defaultProps = {
  deals: [],
};

export default DealsList;
