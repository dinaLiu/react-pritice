import React from 'react';
import {Card} from 'antd'; /*导入Antd design里面的Card，做列表组件（卡片形式的布局）*/
import { Link} from 'react-router-dom';

export default class PCNewsBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news:'' /*用来接收所有news的json*/
        };
    }

    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type /*通过其他调用模块把新闻type传进来*/
            +"&count="+this.props.count,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{this.setState({news:json})
        });
    };

    render(){

        //循环
        const {news} = this.state;  /*声明一个量来接收之前的数据*/
        const newsList = news.length  /*判断长度，开始循环；解析*/
            ? news.map((newsItem, index) => (  /*news集合里面会有每一项，任意给名newsItem，每一项默认会有一个index*/
                <li key={index}> {/*给一个key，key后面跟上index值，防止重复*/}
                    <Link to={`/details/${newsItem.uniquekey}`} target="_blank"> {/*uniquekey是新闻返回的唯一id值，每一条新闻的uniquekey是不同的*/}
                        {newsItem.title} {/*Link之间显示新闻的title就可以了*/}
                    </Link>
                </li>
            ))
            : '没有加载到任何新闻';

        return(
            <div className="topNewsList">
                <Card> {/*Card用来做列表的布局*/}
                    <ul>
                        {newsList}{/*注意看结构，HTML里ul里包li，上面的map解析完了每一项li，then把用来承接的命名模块放ul里*/}
                    </ul>
                </Card>
            </div>
        );
    }
}