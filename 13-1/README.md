知识点: 1.fetch使用,fetch 使用介绍:https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

遇到问题:

1.警告问题: bundle.js:10990 Warning: getFieldProps is not recommended, please use getFieldDecorator instead, see: https://u.ant.design/get-field-decorator 问题来源: pc_header.js 中 函数

 ....
 render() {
	let {getFieldProps} = this.props.form;
 ....

 <TabPane tab="注册" key="2">
 		<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
 			<FormItem label="账户">
 				<Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
 			</FormItem>
 			<FormItem label="密码">
 				<Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
 			</FormItem>
 			<FormItem label="确认密码">
 				<Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
 			</FormItem>
 			<Button type="primary" htmlType="submit">注册</Button>
 		</Form>
 	</TabPane>
解决方法:项目中Form以前使用的getFieldProps，现在更换为getFieldDecorator ,所以把getFieldDecorator替换掉getFieldProps

      ....

      render() {
 		let {getFieldDecorator} = this.props.form;

      ....

      <TabPane tab="注册" key="2">
      		<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
      			<FormItem label="账户">
      				{getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号" />)}
      			</FormItem>
      			<FormItem label="密码">
      				{getFieldDecorator('r_password')(<Input placeholder="请输入您的密码" />)}
      			</FormItem>
      			<FormItem label="确认密码">
      				{getFieldDecorator('r_confirmPassword')(<Input placeholder="请再次输入您的密码" />)}
      			</FormItem>
      				<Button type="primary" htmlType="submit">注册</Button>
      			</Form>
      </TabPane>
2.警告问题:

bundle.js:10990 Warning: Form[inline|horizontal|vertical] is deprecated, please use Form[layout] instead.

问题来源:

 <Form horizontal onSubmit={this.handleSubmit.bind(this)}> ....</Form>
解决方法:

  <Formhorizontal layout={formLayout}></Form>
  过时，建议用
  <Form layout="horizontal" layout={formLayout}></Form>
3.代码错误:

问题来源:

 pc_header.js 中 函数


 handleClick(e) {
 		if (e.key = "register") {
 			this.setState({current: 'register'});
 			this.setModalVisible(true);
 		} else {
 			{
 				this.setState({current: e.key});
 			}
 		}
 	};




 e.key = "register" 应该为判断而不是赋值,故改为 e.key == "register"


 4.代码错误提示
 Uncaught Error: link is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`. Check the render method of PCHeader.

 解决思路:
   首先读懂报错的 大致的意思是: link 是一个空元素....Check the render method of PCHeader,
      1.说到空元素 那么肯定是 link 没有被声明,而link 其实是 react-router-dom里面引用的,为连接组件,所以首字母需要大写"Link"而不是 "link".
      2.Check the render method of PCHeader 说明出错文件在PCHeader.js
      3.查看PCHeader.js 是否使用 link 找到下面代码

       const userShow = this.state.hasLogined
              ?<Menu.Item key="logout" className = "register">
                      <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                      &nbsp;&nbsp;
                      <link target="_blank">
                          <Button type="dashed" htmlType="button">个人中心</Button>
                      </link>
                      &nbsp;&nbsp;
                      <Button type="ghost" htmlType="button">退出</Button>
                  </Menu.Item>
                  :
              <Menu.Item key="register" className="register">
                  <Icon type="appstore"/>注册/登录
              </Menu.Item>;

       说明当登录成功后    this.state.hasLogined 值将为true,将不显示 "注册/登录",而是显示  "个人中心/退出"并且用到了 link,
       所以要声明引用 Link:
         import {Link} from 'react-router-dom';

       修改后继续报错:
       Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`.
       还是先读懂报错意思, 是说 有Link就必须要有 to
       结合20章代码 to = {`/usercenter`}
          <Link target="_blank">
          替换为
          <Link target="_blank" to={`/usercenter`}>

       修改后继续报错:
       You should not use <Link> outside a <Router>

       大概的意思是 Link 需要搭配 Router使用,那么 在root.js 添加路由
       1.引用 react-router-dom
       import {Route, BrowserRouter,Switch} from 'react-router-dom';

       2.







