/**
 * Created by Administrator on 2018/2/13 0013.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link,Switch} from 'react-router-dom';
import {Button,Icon} from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
    render(){

        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)"> {/*MediaQuery,可以通过屏幕大小的变化来适配，显示不同屏幕大小的东西出来; MediaQuery 后面跟的是query，这里query查询的是最小屏幕显示的宽*/}
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query="(max-width:1224px)"> {/*这里的query后面查询的是最大屏幕显示的宽， 最大显示的宽度小于这个宽度，显示mobile短的这个组件*/}
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(
    <Root />,
    document.getElementById('mainContainer')
);
