/**
 * Created by Administrator on 2018/3/7 0007.
 */
import React from "react";
import ReactDOM from "react-dom";
import SlidingTabsDemo from "./components/radio";

class Index extends React.Component{
    render(){
        return(
            <div>
                <SlidingTabsDemo/>
            </div>
        );
    };
};
ReactDOM.render(
    <Index/>,
    document.getElementById('mainContainer')
);