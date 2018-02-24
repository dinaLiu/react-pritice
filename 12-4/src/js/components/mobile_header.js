/**
 * Created by Administrator on 2018/2/24 0024.
 */
import React from 'react';
export default class MobileHeader extends React.Component{
    render(){
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