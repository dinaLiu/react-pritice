/**
 * Created by Administrator on 2018/2/24 0024.
 */
import React from 'react';
import {HashRouter as Router, Route, Link,Switch} from 'react-router-dom';
export default class MobileHeader extends React.Component{
    render(){
        const userShow = this.state.hasLogined?
            <Link>
                <Icon type="inbox"/>
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>
      return(
        <div id="mobileheader">
            <header>
                <img src="./src/images/logo.ico" alt="logo"/>
                <span>ReactNews</span>
            </header>
        </div>
      );
    };
}