
import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Modal} from 'antd';
import {Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
   Tabs,
    message,
    Form,
    Input,
    Button,
    Checkbox,
    Card,
    notification,
    Upload
}from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {HashRouter as Router, Route, Link,Switch} from 'react-router-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCUserCenter extends React.Component{
    constructor(){
        super();
        this.state = {
            usercollection:'',
            usercomments:'',
            previewImage:'',
            previewVisible:false
        }
    };
    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        /*获取用户收藏，fetch（参数1：url，参数2：options）*/
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercollection:json}); /*把获取到的json赋值给usercollection*/
            });

        /*评论列表*/
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                console.log(json);
                this.setState({usercomments:json}); /*把获取到的json赋值给usercollection*/
            });
    };
 render(){
     const props = {
         action: 'http://newsapi.gugujiankong.com/handler.ashx',
         headers: {
             "Access-Control-Allow-Origin": "*"
         },
         listType: 'picture-card',
         defaultFileList: [
             {
                 uid: -1,
                 name: 'xxx.png',
                 state: 'done',
                 url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                 thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
             }
         ],
         onPreview: (file) => {
             this.setState({previewImage: file.url, previewVisible: true});
         }
     };

     const {usercollection,usercomments} = this.state;
     const usercollectionList = usercollection.length ?
         usercollection.map((uc,index)=>(
             <Card key={index} title={uc.uniquekey} extra={<a href={`/details/${uc.uniquekey}`}>查看</a>}>
                 <p>{uc.Title}</p>
             </Card>
         ))
         :
         '您还没有收藏任何的新闻，快去收藏一些新闻吧。';

     const usercommentsList = usercomments.length ?
         usercomments.map((comment,index)=>(
             <Card key={index} title={`于${comment.datetime}评论了文章 ${comment.uniquekey}`} extra={<a target="_black" href={`/details/${comment.uniquekey}`}>查看</a>}>
                 <p>{comment.Comments}</p>
             </Card>
         ))
         :
         '您还未成发表过任何评论。';


  return(
    <div>
        <PCHeader/>
        <Row>
         <Col span={2}></Col>
         <Col span={20}>
          <Tabs>
           <TabPane tab="我的收藏列表" key="1">
               <div className="comment">
                   <Row>
                       <Col span={24}>
                           {usercollectionList}
                       </Col>
                   </Row>
               </div>
           </TabPane>
           <TabPane tab="我的评论列表" key="2">
               <div className="comment">
                   <Row>
                       <Col span={24}>
                           {usercommentsList}
                       </Col>
                   </Row>
               </div>
           </TabPane>
           <TabPane tab="头像设置" key="3">
               <div className="clearfix">
                   <Upload {...props}>
                       <Icon type="plus"/>
                       <div className="ant-upload-text">上传照片</div>
                   </Upload>
                   <Modal visible={this.state.previewVisible} footer={null}
                   onCancel={this.handleCancel}>
                       <img alt="预览" src={this.state.previewImage}/>
                   </Modal>
               </div>
           </TabPane>
          </Tabs>
         </Col>
         <Col span={2}></Col>
        </Row>
        <PCFooter/>
    </div>
  );
 };
}