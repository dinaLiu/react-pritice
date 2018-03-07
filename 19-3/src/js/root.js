
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers.js';

export default class Root extends React.Component{
    /*定义UI上的action*/
    inc(){ /*增加的action*/
        return{type:'ADD'};
    }

    dec(){ /*减少的action*/
        return{type:'SUB'};
    }

    componentDidMount(){
        //初始化 传递的参数是reducer
        var store = createStore(reducer);

        console.log(store.getState());

        store.dispatch(this.inc());
        console.log(store.getState());

        store.dispatch(this.inc());
        console.log(store.getState());

        store.dispatch(this.dec());
        console.log(store.getState());
    }


    render(){

        return(
            <div>
                Redux
            </div>
        );
    };
}

ReactDOM.render(
    <Root />,
    document.getElementById('mainContainer')
);
