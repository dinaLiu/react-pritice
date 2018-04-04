/**
 * Created by Administrator on 2018/3/5 0005.
 */
import React from 'react';
import {Row,Col} from 'antd';
import { Link} from 'react-router-dom';
//import ReactPullToRefresh from 'react-pull-to-refresh';

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
            .then(json=>this.setState({news:json}));
    };


    handleRefresh(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule"
            +"&count=20",myFetchOptions)
            .then(response=>response.json())
            .then(json=>{this.setState({news:json});
             resolve();/*新闻已经加载完了，结束*/
            });
    };


    render(){

        //循环
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <section key={index} className="m_article list_item special_section clearfix">
                    <Link to={`/details/${newsItem.uniquekey}`}>
                        <div className="m_article_img">
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

                <Row>
                    <Col span={24}>
                        /*<ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{
  textAlign: 'center'
}}>
                            <span className="genericon genericon-next"> { /*下拉跟新小圈圈，自带文本属性*/ }
                                <div>{newsList}</div>
                            </span>
                        </ReactPullToRefresh>*/
                    </Col>
                </Row>

            </div>
        );
    }
}