import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
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
                        </div>
                        {/*调用模块，用Tabs TabPane开始布局*/}
                        <Tabs className="tabs_news">{/*默认选中第一个就不用设置defaultActiveKey选中哪一项的属性了*/}
                            <TabPane tab="头条新闻" key="1">
                                {/*count传参，灵活性：要调多少条新闻，直接通过PCNewsBlock这个版块暴露出来外部的属性count，直接传参；type类型直接从上边的导航来写*/}
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            {/*模拟上个模块*/}
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
