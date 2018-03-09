import React from 'react';
import {Card} from 'antd'; /*导入Antd design里面的Card，做列表组件（卡片形式的布局）*/
import { Link} from 'react-router-dom';

export default class PCNewsBlock extends React.Component{

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

    render(){

        //循环
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <li key={index}>
                    {/*to的有效地址主要是${newsItem.uniquekey}这个，前面可以照着写*/}
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        {newsItem.title}
                    </Link>
                </li>
            ))
            : '没有加载到任何新闻';

        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    }
}