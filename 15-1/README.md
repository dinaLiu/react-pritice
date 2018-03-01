知识点复习:
1.dangerouslySetInnerHTML
  dangerouslySetInnerHTML字面翻译:危险的html插入,不太建议使用这个方法,
  a.先介绍它使用的场景,直接上代码:
  .....
   <body>
           <div id="example"></div>
           <script type="text/jsx">

            var Test = React.createClass({

             getInitialState: function() {
               return {html: '我想让它换行显示,<br />我想让它换行显示<br />'};
             },

             render: function() {

               return (

                 <div>{this.state.html}</div>
               );
             }
           });

           React.render(<Test />,  document.getElementById('example'));

           </script>
   </body>
   ....
   在页面中显示的内容是这样的：

   我想让它换行显示,<br />我想让它换行显示<br />

   很明显这个 <br /> 并没有识别为换行,而是直接把<br />.
   当字符串显示了如果你将这段代码放在正常的html页面中，它是会换行的，在React中则不会，因为react不会自动帮你解析你的html代码.
   如果你想要改<br /> 起作用,你将使用

   .....
      <body>
              <div id="example"></div>
              <script type="text/jsx">

               var Test = React.createClass({

                getInitialState: function() {
                  return {html: '我想让它换行显示,<br />我想让它换行显示<br />'};
                },

                render: function() {

                  return (
                    <div dangerouslySetInnerHTML = {{__html : this.state.html}} ></div>
                  );
                }
              });

              React.render(<Test />,  document.getElementById('example'));

              </script>
      </body>
      ....
      在页面中显示的内容是这样的：

      我想让它换行显示,
      我想让它换行显示

       <div dangerouslySetInnerHTML = {{__html : this.state.html}} ></div> 这是它的写法,








