/**
 * Created by Administrator on 2018/3/1 0001.
 */
import React from 'react';
import { Row, Col,Card } from 'antd';
import {HashRouter as Router, Route, Link,Switch} from 'react-router-dom';
import {
    Menu,
    Icon ,
    Tabs,
    message,
    Form,
    Input,
    Button,
    Checkbox,
    Modal
} from 'antd';

const FormItem = Form.Item; /*页面表单from提交的插件，后面是固定值*/
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends React.Component{
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    };

        componentDidMount() {
            var myFetchOptions = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
                this.setState({comments: json});
            })
        };

        handleSubmit(){
            e.preventDefault();
            var myFetchOptions = {
                method: 'GET'
            };
            var formdata = this.props.form.getFieldsValue();
            
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&useid="
                +localStorage.userid+"&uniquekey ="+ this.props.uniquekey+"&commnet ="+formdata.remark,
                myFetchOptions).then(response => response.json()).then(json => {
                    console.log(json);
                this.componentDidMount();  /*返回json之后，需要对页面评论数据重新进行加载*/
            })
        };

        render(){
            const {getFieldDecorator}=this.props.form;
            const {comments} =this.state;
            const commentList = comments.length?
                comments.map((comment,index)=>(
                    <Card key={index} title={comment.UserName} extra={<a href='#'>发布于{comment.datetime}</a>}>
                        <p>{comment.comments}</p>
                    </Card>
                ))
                :'没有加载到任何评论';

            return(
                <div className="comment">
                    <Row>
                        <Col span={24}>
                            {commentList}
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="您的评论">
                                    {getFieldDecorator('remark',{initialValue:''})(<Input placeholder="随便写" type="textarea" />)}
                                    {/*<input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initialValue:''})}/>*/}
                                </FormItem>
                                <Button type="primary" htmlType="submit">提交评论</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            );
        };
}
export default CommonComments = Form.create({})(CommonComments);