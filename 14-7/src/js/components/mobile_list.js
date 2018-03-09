
import React from 'react';
import {Row,Col} from 'antd';
import { Link} from 'react-router-dom';

export default class MobileList extends React.Component{

    constructor(){
        super();
        this.state = {
            news:''
        };
    }

    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type
            +"&count="+this.props.count,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{this.setState({news:json})});
    };

    render(){

        //循环
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem,index) => (
                {/*循环的东西里面每一个都要给一些key，不然会有警告*/}
                <section key={index} className="m_article list_item special_section clearfix">
                    <Link to={`/details/${newsItem.uniqueKey}`}>
                        <div className="m_article_img">
                            {/*图片加载的缩略图的地址newsItem.thumbnail_pic_s}*/}
                            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                        </div>
                        <div className="m_article_desc clearfix">
                            <div className="m_article_desc_l">
                                <span className="m_article_channel">{newsItem.realtype}</span>
                                <span className="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </Link>
                </section>
            ))
         : '没有加载到任何新闻';

        return(
            <div>
            {/*100%布局*/}
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>

            </div>
        );
    }
}