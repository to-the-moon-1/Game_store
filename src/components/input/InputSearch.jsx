import React from "react";
import {Button, Col, Row} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';

const InputSearch = (props) => {
    return <Row>
        <Col span={19}>
            <Input className="input" value={props.title} onChange={props.handleChange} type="text" placeholder="Write head of the game..." />
        </Col>
        <Col span={5}>
            <Button className="mainBtn" type="primary" icon={<SearchOutlined />} onClick={props.searchGamesOnTitle}>
                Search
            </Button>
        </Col>
    </Row>
}

export default InputSearch