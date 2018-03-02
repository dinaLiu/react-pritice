知识点复习:
   1.event.preventDefault() 方法 W3C 官方的定义是：阻止浏览器的默认行为，不单单可以拦截表单的提交，<a>标签的跳转,
     <input>标签的输入等等默认动作都会被阻止动作或者输入.
   common_comments.js 中的
   handleSubmit(e){
               e.preventDefault();
               ....
   };
   作用是阻止表单提交(表单的提交会刷新页面),以达到执行 e.preventDefault();后面代码的作用

   2.event.stopPropagation  停止事件冒泡

   3.event.preventDefault() 浏览器的默认行为 event.stopPropagation停止事件冒泡
   代码对比:

/*---------------------------
    功能:停止事件冒泡
    ---------------------------*/
    function stopBubble(e) {
        //如果提供了事件对象，则这是一个非IE浏览器
        if ( e && e.stopPropagation )
            //因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        else
            //否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
    }
    //阻止浏览器的默认行为
    function stopDefault( e ) {
        //阻止默认浏览器动作(W3C)
        if ( e && e.preventDefault )
            e.preventDefault();
        //IE中阻止函数器默认动作的方式
        else
            window.event.returnValue = false;
        return false;
    }
    
4.重点复习 断点调试    


遇到问题:
  提交评论报错:
    1.Failed to load resource: the server responded with a status of 500 (Internal Server Error)
    2. Failed to load http://newsapi.gugujiankong.com/Handler.ashx?action=comment&useid=97&uniquekey%20=161028164015590&commnet%20=111: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access. The response had HTTP status code 500. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    3. Uncaught (in promise) TypeError: Failed to fetch

  500为服务错误,有三种可能: 1.参数传参 2.地址错误 3.后台代码错误.
  首先对比参数 老师的参数:
  fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
                  console.log(json);
                  this.componentDidMount();
  })

  你的参数:
  fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&useid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
                  console.log(json);
                  this.componentDidMount();
  })

  认证一看 userid 写成了 useid ,改问题修改后能提交 但是不能看到评论, 说明
  const commentList = comments.length?
                  comments.map((comment,index)=>(
                      <Card key={index} title={comment.UserName} extra={<a href='#'>发布于{comment.datetime}</a>}>
                          <p>{comment.comments}</p>
                      </Card>
                  ))
                  :'没有加载到任何评论';
   comment.comments 这个字段是没有值的,所以没有显示,如果这样 我们需要打印出获取留言的json.
   打印的结果为:
     [
        {Comments:"ddd",.......}
     ]
  说明后台访问的评论字段是 Comments 不是comments "C"为大写的




