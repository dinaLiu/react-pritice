1.样式问题:图片新闻列表不在一行
  解决思路: 审查元素
  <div class="imageblock"> .. </div>

  对应样式为
  .imageblock {
      float: left;
  }

  修改成:
  .imageblock {
        float: left;
        width:33.33%;
    }


​    

复习知识点:
1.var 和 const 的区别,延伸:JavaScript中var、let、const区别
  a.let和const都是es5
  b.let是修复了var的作用域的一些bug，变的更加好用。let是更好的var。var的作用于是函数作用于，而let是块级别（大括号括起来的内容）
    const声明的变量只可以在声明时赋值，不可随意修改

2.var users = [
      {name: "张含韵", "email": "zhang@email.com"},
      {name: "江一燕",   "email": "jiang@email.com"},
      {name: "李小璐",  "email": "li@email.com"}
    ];
    请遍历 打印出 数组里的 email (使用 for 于 map)

3.直接 从 c盘切换到 e盘的 react/react-pritice/14-7 怎么切换?

cd/d E:\react/react-pritice/14-7 然后回车

4. 如何 通过 localStorage 存储userNickName ? 和 获取 userNickName?    
<<<<<<< HEAD

   ```
   // 存储
   localStorage.setItem("userNickName", "Gates");
   // 取回
   localStorage.getItem("userNickName");
   ```

=======
    
5. 我们现在用的ui框架 为蚂蚁金服下的  nat design, 栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架,问题来了 1个row中的col总和为多少?
>>>>>>> d4e754061c4cdf214e9e9fc1b353438d241f9e8f

