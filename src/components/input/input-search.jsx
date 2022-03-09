import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const InputSearch = ({ title, handleChange, searchGamesOnTitle }) => (
  <Row>
    <Col span={19}>
      <Input
        className="inputText searchText"
        onChange={handleChange}
        placeholder="Write head of the game..."
        type="text"
        value={title}
      />
    </Col>
    <Col span={5}>
      <Button
        className="mainBtn searchBtn"
        icon={<SearchOutlined />}
        onClick={searchGamesOnTitle}
        type="primary"
      >
        Search
      </Button>
    </Col>
  </Row>
);

InputSearch.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  searchGamesOnTitle: PropTypes.func,
};

InputSearch.defaultProps = {
  title: '',
  handleChange: () => {},
  searchGamesOnTitle: () => {},
};

export default InputSearch;
