
import React from 'react';
import {Row,Col} from 'antd';
import { Link} from 'react-router-dom';
import Tloader from 'react-touch-loader';

export default class MobileList extends React.Component{

    constructor(){
        super();
        this.state = {
            news:'',
            count:5, /*默认显示5条*/
            initializing: 1, /*组件初始化的状态*/
            refreshedAt: Date.now(), /*标志化事件*/
            hasMore : 0  /*判断这个页面下面还有没有*/
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





    loadMore(resolve){  /*resolve参数主要用来测试有没有结束，有没有完成；结束后会把旋转的小圈圈关掉*/
        setTimeout(()=>{
            var count = this.state.count;
            this.setState({
                count: count+5,
            });

            var myFetchOptions = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.state.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));

            this.setState({
                hasMore: count>0 && count<50  /*布尔类型，判断，下面还要内容*/
            });

            resolve();  /*搜索的小圈圈*/

        },2e3);
    };

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                hasMore: 1,
                initializing: 2
            });
        },2e3);
    };

    toggleCanReresh(){
        this.setState({ canRefreshResolve: !this.state.canRefreshResolve});
    }

    render(){
        var {hasMore,initializing,refreshedAt} = this.state;

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
                    <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
                        {newsList}
                    </Tloader>

                </Col>
            </Row>

            </div>
    );
    }
}