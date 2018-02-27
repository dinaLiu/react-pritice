问题：在加完.register{    float: right !important;}注册登录后，用户名、个人中心及退出三个键按竖着排列的

解决办法：审查元素发现.ant-menu-horizontal>.ant-menu-item>a, .ant-menu-horizontal>.ant-menu-submenu>a（a元素）的display是block，把display改成inline-block。