
import React from 'react';

export default class ES6ArrayMap  extends React.Component{

    componentWillMount(){
        const users = [
            {name: "张含韵", "email": "zhang@email.com"},
            {name: "江一燕",   "email": "jiang@email.com"},
            {name: "李小璐",  "email": "li@email.com"}
        ];

        //emails 接收 users 里面所有的邮箱
        var emails = users.map(function (user,index) {
                              console.log("当前索引:"+index + " 当前索引对应的值" + user);

                              return user.email;
                    });

        console.log(emails); // zhang@email.com, jiang@email.com, li@email.com

    };

    render(){
        return (
            <div></div>
        )
    }


}