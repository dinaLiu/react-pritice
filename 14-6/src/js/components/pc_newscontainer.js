import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import ES6ArrayMap from './es6_array_map';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component{
    render(){
        const settings ={
            dots:true,
            infinite:true,
            speed:500,
            slidersToShow:1,
            autoplay:true
        };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg"/> </div>
                                    <div><img src="./src/images/carousel_2.jpg"/> </div>
                                    <div><img src="./src/images/carousel_3.jpg"/> </div>
                                    <div><img src="./src/images/carousel_4.jpg"/> </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imagewidth="114px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imagewidth="132px"/>
                            <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imagewidth="132px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <ES6ArrayMap></ES6ArrayMap>
            </div>
        )
    }
}
