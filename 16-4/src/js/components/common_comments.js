
import React from 'react';
import { Row, Col} from 'antd';
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
    Modal,
    Card,
    notification
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
            /*获取评论*/
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
                console.log(json);
                this.setState({comments: json});
            })
        };

        handleSubmit(e){
            e.preventDefault();
            var myFetchOptions = {
                method: 'GET'
            };
            var formdata = this.props.form.getFieldsValue();
            /*提交评论*/
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
                this.componentDidMount(); /*返回json之后，需要对页面评论数据重新进行加载*/
            })
        };

        addUserCollection(){
            var myFetchOptions = {
                method:'GET'
            };
            /*收藏*/
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
                .then(response=>response.json())  /*取一个response，然后做json转换*/
                .then(json=>{  /*json用作箭头函数的写法*/
                    //收藏成功以后进行一下全局的提醒
                    notification['success']({message:'ReactNews提醒',description:'收藏此文章成功'});
                });
        };

        render(){
            const {getFieldDecorator}=this.props.form;
            const {comments} = this.state;
            const commnetList = comments.length
                ? comments.map((comment, index) => (
                    <Card key={index} title={comment.UserName} extra={<a href = "#">发布于{comment.datetime} </a>}>
                        <p>{comment.Comments}</p>{/*json.Key = value */}
                    </Card>
                ))
                :'没有加载到任何评论';

            return(
                <div class="comment">
                    <Row>
                        <Col span={24}>
                            {commnetList}
                            <Form onSubmit ={this.handleSubmit.bind(this)}>
                                <FormItem label="您的评论">
                                    {getFieldDecorator('remark',{initialValue:''})(<Input placeholder="随便写" type="textarea" />)}
                                    {/*<input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initialValue:''})}/>*/}
                                </FormItem>
                                <Button type="primary" htmlType="submit">提交评论</Button>
                                &nbsp;&nbsp;
                                <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            );
        };
}
export default CommonComments = Form.create({})(CommonComments);