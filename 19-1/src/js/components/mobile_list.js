
import React from 'react';
import {Row,Col} from 'antd';
import { Link} from 'react-router-dom';
import Tloader from 'react-touch-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {ReactPull} from 'react-alloytouch';
import 'react-alloytouch/sass/pull.scss';

// 初始化 tapEvent 事件, 移动端
injectTapEventPlugin();

export default class MobileList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            news:'',
            count:5, /*默认显示5条*/
            hasMore : 0,  /*判断这个页面下面还有没有*/
            items: 30,
            disablePullUp: false
        };
    }

    refreshCallback(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = false;
                if (Math.random() > 0.2) {
                    result = true;
                }
                if (result) {
                    this.setState({
                        items: 30,
                        disablePullUp: false
                    }, () => {
                        resolve();
                    });
                } else {
                    reject(new Error('错误'));
                }
            }, 1000);
        }).then(() => {
            console.info('刷新成功！');
        }, () => {
            console.info('刷新失败！');
        });
    };



    loadMoreCallback(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = false;
                if (Math.random() > 0.2) {
                    result = true;
                }
                if (result) {
                    this.setState({
                        items: this.state.items + 10,
                        disablePullUp: this.state.items >= 60
                    }, () => {
                        resolve();
                    });
                } else {
                    reject(new Error('错误'));
                }
            }, 1000);
        }).then(() => {
            console.info('加载更多成功！');
        }, () => {
            console.info('加载更多失败！');
        });
    };

    handleTouchTap (e){
        console.info('测试下拉刷新插件是否与 Tap 事件冲突');
    };




    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type
            +"&count="+this.props.count,myFetchOptions)
            .then(response=>response.json())
    .then(json=>this.setState({news:json}));
    };

    render(){
    //
    //    //循环
    //    const {news} = this.state;
    //    const newsList = news.length
    //        ? news.map((newsItem, index) => (
    //            <section key={index} className="m_article list_item special_section clearfix">
    //                <Link to={`/details/${newsItem.uniquekey}`}>
    //                    <div className="m_article_img">
    //                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
    //                    </div>
    //                    <div className="m_article_info">
    //                        <div className="m_article_title">
    //                            <span>{newsItem.title}</span>
    //                        </div>
    //                    </div>
    //                    <div className="m_article_desc clearfix">
    //                        <div className="m_article_desc_l">
    //                            <span className="m_article_channel">{newsItem.realtype}</span>
    //                            <span className="m_article_time">{newsItem.date}</span>
    //                        </div>
    //                    </div>
    //                 </Link>
    //        </section>
    //
    //))
    //: '没有加载到任何新闻';
    //
    //    return(
    //        <div>
    //
    //            <Row>
    //            <Col span={24}>
    //        {newsList}
    //        </Col>
    //        </Row>
    //
    //        </div>
    //);

        const contents = [];
        const {items, disablePullUp} = this.state;

        for (let i = items; i > 0; i--) {
            if (i < 10) {
                contents.push(<li key={i}><a href="http://www.sina.com">这里放置真实显示的DOM内容</a> {i}</li>);
            } else {
                contents.push(<li key={i} onTouchTap={this.handleTouchTap}>这里放置真实显示的DOM内容 {i}</li>);
            }
        } 

        const props = {
            refreshCallback: this.refreshCallback,
            loadMoreCallback: this.loadMoreCallback,
            refresh: true,
            loadMore: true,
            disablePullUp,
        };

        return (
            <ReactPull {...props}>
    <ol className="example-list">
            {contents.map((item) => {
                return item;
            })}
    </ol>
        </ReactPull>
    );





    }
}