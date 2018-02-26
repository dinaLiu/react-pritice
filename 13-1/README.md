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