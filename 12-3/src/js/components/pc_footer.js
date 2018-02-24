/**
 * Created by Administrator on 2018/2/24 0024.
 */
import React from 'react';
import { Row, Col } from 'antd';

export default class PCFooter extends React.Component{

    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2016 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}