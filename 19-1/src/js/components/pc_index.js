/**
 * Created by Administrator on 2018/2/23 0023.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';
export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter/>
            </div>
        )
    }
}