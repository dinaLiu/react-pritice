遇到的问题:
1.报错:
Refused to apply style from 'http://localhost:8080/details/src/css/pc.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
Refused to apply style from 'http://localhost:8080/details/src/css/mobile.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

解决方法: 在index.html css 和 js 改为根目录下引用
   ...
​     <link rel="stylesheet" type="text/css" href="./src/css/pc.css"/>
​    <link rel="stylesheet" type="text/css"  href="./src/css/mobile.css"/>
   ...
​    <script type="text/javascript" src="./src/bundle.js"></script>

​    改为:
​         <link rel="stylesheet" type="text/css" href="/src/css/pc.css"/>
​         <link rel="stylesheet" type="text/css"  href="/src/css/mobile.css"/>
​         ...
​         <script type="text/javascript" src="/src/bundle.js"></script>

2.点击跳转到详情页 报错:
​    Uncaught TypeError: Cannot read property 'uniquekey' of undefined
   解决思路: 说明  uniquekey 没有被声明,找到 uniquekey在文件的位置
   .....
   fetch("![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\%W@GJ$ACOF(TYDYECOKVDYB.png)http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey= 

" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
   ....
   想起了 router 4.0 中参数的传递 是通过 this.props.params.match.参数 获取参数.
   root中
​    <MediaQuery query='(min-device-width: 1224px)'>
​                        <BrowserRouter>
​                            <Switch>
​                                 <Route exact path="/" component={PCIndex}></Route>
​                                 <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
​                            </Switch>
​                        </BrowserRouter>
​                    </MediaQuery>
   路由传递过来的是 uniquekey ,所以接受该参数需要用 this.props.match.params.uniquekey 来接受