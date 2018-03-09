
import React from 'react';
import {Card} from 'antd'; /*导入Antd design里面的Card，做列表组件（卡片形式的布局）*/
import { Link} from 'react-router-dom';

export default class PCNewsImageBlock extends React.Component{

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
        /*div.custom-image对应imgage样式的定义*/
        const styleImage = {
            display:"block",
            width:this.props.imageWidth /*可以读这个属性*/
        };
        /*div.custom-card对应h3样式的定义*/
        const styleH3 = {
            width:this.props.imageWidth, /*设置成跟图片一样宽，超出部分自动点点点设置，设置三个属性whiteSpace、overflow，textOverflow*/
            whiteSpace:"nowrap", /*自动的点点点属性设置，设置三个属性‘whiteSpace:"nowrap"，overflow:"hidden"，textOverflow:"ellipsis"’*/
            overflow:"hidden",
            textOverflow:"ellipsis"
        };

        //循环
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                /*做循环布局；加上一个key，因为循环出来的东西要有一个唯一的值*/
                <div key={index} className="imageblock">
                    {/*每一个新闻点导同样的东西*/}
                    <Link to={`datails/${newsItem.unqueuekey}`} target="_blank">
                        <div className="custom-image">
                            {/*alt可以接新闻的标题什么的；newsItem.thumbnail_pic_s，每一项接口里面的缩略图；style，可以通过外部的样式来定义这个缩略图*/}
                            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            ))
            : '没有加载到任何新闻';

        return(
            <div className="topNewsList">
                {/*爆出card更多的属性，让主页面可以传递*/}{/*style主要定义宽，指定的宽从外部传入，要多宽有多宽*/}
                <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
                    {newsList}
                </Card>
            </div>
        );
    }
}