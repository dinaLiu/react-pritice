import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component{
    render(){
        const settings ={
            dots:true,
            infinite:true, /*控制样式展示*/
            speed:500,
            slidersToShow:1, /*从哪一张开始*/
            autoplay:true  /*自动播放*/
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
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
