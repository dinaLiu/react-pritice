/**
 * Created by Administrator on 2018/2/24 0024.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    };
}