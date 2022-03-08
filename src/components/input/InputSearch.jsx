import React from "react";
import { Input, Button, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const InputSearch = ({title, handleChange, searchGamesOnTitle}) => (
    <Row>
        <Col span={19}>
            <Input className="input" value={title} onChange={handleChange} type="text" placeholder="Write head of the game..." />
        </Col>
        <Col span={5}>
            <Button className="mainBtn" type="primary" icon={<SearchOutlined />} onClick={searchGamesOnTitle}>
                Search
            </Button>
        </Col>
    </Row>
)

export default InputSearch