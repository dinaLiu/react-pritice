知识点复习:
  ant Design Grid栅格
  a.栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架
  b.1 row 可以分割 为 24col



问题：在加完.register{    float: right !important;}注册登录后，用户名、个人中心及退出三个键按竖着排列的

解决办法：审查元素发现.ant-menu-horizontal>.ant-menu-item>a, .ant-menu-horizontal>.ant-menu-submenu>a（a元素）的display是block，把display改成inline-block。