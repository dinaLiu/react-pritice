1.之前的样式问题:我们是做下面修改

  .imageblock {
        float: left;
        width:33.33%;
    }
    但是之前这样修改是

    <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
    组件被实例时候 传参 imageWidth 被 npy写成了imagewidth,说明不严谨需要改正. 现在改为imageWidth后 PCNewsImageBlock已经能获取 请记住这个问题.
   




