#

jQuery

### 常使用的方法











（快速方便查询使用功能   j 就是 JavaScript；  Query 查询；意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。）

- 引入方式：同js   script src
- 入口函数：1.$(document).ready(function(){代码}])  
  2. ==$(function(){代码})==推荐使用

  3. ```javascript
      // $('div').hide();
             // 1. 等着页面DOM加载完毕再去执行js 代码
             // $(document).ready(function() {
             //     $('div').hide();
             // })
             // 2.  等着页面DOM加载完毕再去执行js 代码  入口函数
             $(function() {
                 $('div').hide();
             })
       // 1. $ 是jQuery的别称（另外的名字） $同时也是jQuery的 顶级对象
             $(function() {
               alert(11)
             });  
      ```

==$符号:jQuery的别称       顶级对象==

## jQuery对象和DOM对象

- dom对象：使用原生js获取的对象

- jQuery对象：使用\$符号  如：  \$('div')    ==伪数组存储==

- jQuery对象只能使用jQuery方法   DOM对象则使用原生js属性和方法

- 相互转换：转后可以使用其属性和方法
  - DOM对象转换为jQuery对象     \$('div')需要元素名加引号      $(DOM对象( 原生获取)) 名字不加引号  \$(myid)
  - ==jQuery对象转DOM对象     $('div')[0]/  \$('div').get(0)==          0为索引值 

  ```JavaScript
  // 1. DOM 对象：  用原生js获取过来的对象就是DOM对象
          var myDiv = document.querySelector('div'); // myDiv 是DOM对象
          var mySpan = document.querySelector('span'); // mySpan 是DOM对象
          console.dir(myDiv);

          // 2. jQuery对象： 用jquery方式获取过来的对象是jQuery对象。 本质：通过$把DOM元素进行了包装
          $('div'); // $('div')是一个jQuery 对象
          $('span'); // $('span')是一个jQuery 对象
          // 3. jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 属性和方法
          // myDiv.style.display = 'none';
          // myDiv.hide(); myDiv是一个dom对象不能使用 jquery里面的hide方法
          // $('div').style.display = 'none'; 这个$('div')是一个jQuery对象不能使用原生js 的属性和方法

   // 1. DOM对象转换为 jQuery对象
          // (1) 我们直接获取视频，得到就是jQuery对象
          $('video');
          // (2) 我们已经使用原生js 获取过来 DOM对象
          var myvideo = document.querySelector('video');
          $(myvideo).play();  jquery里面没有play 这个方法
          // 2.  jQuery对象转换为DOM对象
           myvideo.play();
  ```

  ​

# 常用的API

### 1.1 jQuery基础选择器

- $("选择器")直接写css选择器即可加引号
- ![q](D:\web笔记\笔记\web笔记\jq1.png)

### 1.2 jQuery层次选择器

- ![q](D:\web笔记\笔记\web笔记\jq2.png)

### 1.3 隐式迭代

- 隐式迭代就是吧匹配的所有元素内部进行遍历循环，给每一个元素添加方法 $("div").css("background","pink")  修改css样式

### 1.4 筛选选择器

- ![q](D:\web笔记\笔记\web笔记\jq3.png)

- ## 筛选的方法（重点）

- ## ![q](D:\web笔记\笔记\web笔记\jq4.png)

- ==parent()  亲父级  children()亲儿子  find()所有后代 siblings() 兄弟节点 eq()==


### 1.5链式编程

```javascript
 $(this).siblings().parent().css('color', 'blue');  //我的兄弟变为红色  ,我本身不变颜色
```



### 2.1修改css样式

- ```javascript
  //1.参数只写属性名  返回参数值
  $(this).css("color")           //red
  //2.参数是  属性名，属性值   属性必须加引号  数字可以不跟单位和引号
  $(this).css("width","200")   
  $(this).css("width","200px")   
  //3.参数可以是对象形式  属性可以不加引号   用冒号隔开
  $(this).css({ "color":"white","font-size":"20px"});
  ```


### 2.2设置类样式方法

- ```JavaScript
  //添加类 addClass()
  $("div").click(function() {
              $(this).addClass("current");
     });
   // 2. 删除类 removeClass()
             $("div").click(function() {
                $(this).removeClass("current");
               });
    //3. 切换类 toggleClass()  
              $("div").click(function() {
                  $(this).toggleClass("current");
              });
  ```

### 2.3  类操作与className区别

- 原生 JS 中 className 会覆盖元素原先里面的类名。

- jQuery 里面类操作只是对指定类进行操作，不影响原先的类名。

- ```JavaScript
   var one = document.querySelector(".one");
        one.className = "two";    //会覆盖元素原先里面的类名。
           $(".one").addClass("two");  //这个addClass相当于追加类名 不影响以前的类名
          $(".one").removeClass("two");//删除类
   ```
### 3.1、 jquery  效果

- 显示 show（） 建议：平时一般不带参数，直接显示隐藏即可。

  - show(毫秒数,fn回调函数)
- 隐藏  hide（）  建议：平时一般不带参数，直接显示隐藏即可。
  - hide(毫秒数,fn回调函数)
- 切换toggle（）  建议：平时一般不带参数，直接显示隐藏即可。
  - toggle(毫秒数,fn回调函数)

  - ```javascript
         $(function () {
            $("button")
              .eq(0)
              .click(function () {
                $("div").show(1000, function () {
                  $(this).stop(1000).css({
                    width: 500,
                    height: 500,
                  });
                });
              });
            $("button")
              .eq(1)
              .click(function () {
                $("div").hide(1000, function () {});
              });
            $("button")
              .eq(2)
              .click(function () {
                $("div").toggle(1000);
              });
            // 一般情况下，我们都不加参数直接显示隐藏就可以了
          });
     ```

### 3.2滑动效果

- 下滑动效果slideDown ()   

  - slideDown(毫秒数,fn回调函数)

- 上滑动效果slideUp ()

  -  slideUp(毫秒数,fn回调函数)

- 切换滑动效果  slideToggle（）

  -  slideToggle(毫秒数,fn回调函数)

- ```JavaScript
     // 鼠标经过
              $(".nav>li").mouseover(function() {
                 // $(this) jQuery 当前元素  this不要加引号
              //   // show() 显示元素  hide() 隐藏元素
               $(this).children("ul").slideDown(200);
              // });
              // // 鼠标离开
              $(".nav>li").mouseout(function() {
                 $(this).children("ul").slideUp(200);
              // });
              // 1. 事件切换 hover 就是鼠标经过和离开的复合写法
              $(".nav>li").hover(function() {
                $(this).children("ul").slideDown(200);
               }, function() {
                  $(this).children("ul").slideUp(200);
              });
     ```
### 3.3事件切换

- hover([over],out)

  - （1）over:鼠标移到元素上要触发的函数（相当于mouseenter）

  - （2）out:鼠标移出元素要触发的函数（相当于mouseleave）

  - （3）如果只写一个函数，则鼠标经过和离开都会触发它

  - ```JavaScript
       // 2. 事件切换 hover  如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
                $(".nav>li").hover(function() {
                    // stop 方法必须写到动画的前面
                    $(this).children("ul").stop().slideToggle();
                });
       ```

### 3.4动画队列或效果队列

- stop（） 停止动画

- fadeIn（）淡入效果   (毫秒数,fn回调函数)

- fadeOut（） 淡出效果 (毫秒数,fn回调函数)

- fadeToggle（）淡入淡出切换效果 (毫秒数,fn回调函数)

- fadeTo（）修改透明度 (毫秒数,0-1透明度).

- ```javascript
    $(function() {
              $("button").eq(0).click(function() {
                  // 淡入 fadeIn()
                  $("div").fadeIn(1000);
              })
              $("button").eq(1).click(function() {
                  // 淡出 fadeOut()
                  $("div").fadeOut(1000);

              })
              $("button").eq(2).click(function() {
                  // 淡入淡出切换 fadeToggle()
                  $("div").fadeToggle(1000);

              });
              $("button").eq(3).click(function() {
                  //  修改透明度 fadeTo() 这个速度和透明度要必须写
                  $("div").fadeTo(1000, 0.5);

              });
    ```


### 3.5自定义动画

- animate({属性：属性值}，毫秒数，回调函数)

- ```JavaScript
    $(function() {
              $("button").click(function() {  //点击事件
                  $("div").animate({          //为 div 创建动画
                      left: 500,                      //距离左边500
                      top: 300,                      //距离上边300
                      opacity: .4,                  //透明度 0.4
                      width: 500          // 宽度  500
                  }, 500);              //500毫秒
              })
          })
    ```

###   4.1 jquery属性操作

- prop（）获取私有属性   
  - prop("属性名") 获取属性
  - prop("属性名"，属性值”) 设置属性

- attr（） 获取 h5 自定义属性
  - attr("属性名") 获取属性
  - attr("属性名"，属性值”) 设置属性

- data（） 数据缓存  不推荐使用
  - data（"name","value"）  附加数据
  - data（"name"）获取数据

- html() 获取 html("n内容")设置元素内容

- text()获取文本内容  text("文本内容")  设置文本内容

- val()获取表单值 val("内容")设置表单值

- ```javascript
      <script>
          $(function() {
              //1. element.prop("属性名") 获取元素固有的属性值
              console.log($("a").prop("href"));
              $("a").prop("title", "我们都挺好");
              $("input").change(function() {
                  console.log($(this).prop("checked"));
              });
              // console.log($("div").prop("index"));
              // 2. 元素的自定义属性 我们通过 attr()
              console.log($("div").attr("index"));
              $("div").attr("index", 4);
              console.log($("div").attr("data-index"));
              // 3. 数据缓存 data() 这个里面的数据是存放在元素的内存里面
              $("span").data("uname", "andy");
              console.log($("span").data("uname"));
              // 这个方法获取data-index h5自定义属性 第一个 不用写data-  而且返回的是数字型
              console.log($("div").data("index"));
          })

   // 1. 获取设置元素内容 html()
          console.log($("div").html());
          // $("div").html("123");
          // 2. 获取设置元素文本内容 text()
          console.log($("div").text());
          $("div").text("123");

          // 3. 获取设置表单值 val()
          console.log($("input").val());
          $("input").val("123");
      </script>
  ```

  ​

## 5.1jQuery遍历元素

- $("元素"/dom对象).each(function(i,ele){      }) 主要用DOM处理

- $.each(对象名，function(i,ele){}) 遍历任何对象。主要用于数据处理，如数组，对象

- ```javascript
    $(".p-sum").each(function (i, ele) {
        money += parseFloat($(ele).text().substr(1));
      });
    $.each(data, function (i, ele) 
    ```


- 创建元素 $("\<p>\</p>")

- 添加元素
  - 内部   父子关系
    - append()后面添加
    - prepend() 前面添加
  - 外部  兄弟关系
    - after()  元素后面
    - before() 元素前面
- 删除元素
  - remove() 元素本身
  - empty()   元素的子节点（内容）
  - html("")   清空元素内容
    - empt() 和  html('''') 作用等价，都可以删除元素里面的内容，只不过 html 还可以设置内容

  ```
     $(function() {
              // 1. 创建元素
              var li = $("<li>我是后来创建的li</li>");
              // 2. 添加元素
              // (1) 内部添加
              $("ul").append(li);  内部添加并且放到内容的最后面 
              $("ul").prepend(li); // 内部添加并且放到内容的最前面

              // (2) 外部添加
              var div = $("<div>我是后妈生的</div>");
               $(".test").after(div);
              $(".test").before(div);
              // 3. 删除元素
            $("ul").remove(); 可以删除匹配的元素 自杀
              $("ul").empty(); // 可以删除匹配的元素里面的子节点 孩子
              $("ul").html(""); // 可以删除匹配的元素里面的子节点 孩子

          })
  ```

  ​

### 6.1 jQuery尺寸

- width()/height() 获取元素 宽度/高度

- innerWidth()/innerHieght()  含padding

- outerWidth()/outerHeight()含padding border

- outerWidth(true)/outerHeight(true)含padding border margin

- ```javascript
     $(function() {
              // 1. width() / height() 获取设置元素 width和height大小 
              console.log($("div").width());
              // $("div").width(300);
              // 2. innerWidth() / innerHeight()  获取设置元素 width和height + padding 大小 
              console.log($("div").innerWidth());
              // 3. outerWidth()  / outerHeight()  获取设置元素 width和height + padding + border 大小 
              console.log($("div").outerWidth());
              // 4. outerWidth(true) / outerHeight(true) 获取设置 width和height + padding + border + margin
              console.log($("div").outerWidth(true));
          })
     ```


### 6.2jQuery位置（事件使用  scroll）

- offset() 获取被选元素相对于文档的偏移坐标    与父级没有关系
  -  letft top  获取距离文档左侧/顶部的距离  offset().top
  -  可以黄色至偏移  offset({top:10,left:30})

- position()  返回被选元素相对于带有定位的父级偏移坐标   父级没有定位  以文档为准
  -  letft top 获取距离定位父级 左侧/顶部 的距离  position().top
  -  只能读取

- scrollTop()/scrrllLeft() 设置或获取元素被卷进去的距离
  - scrollTop()  被卷进去的头部
  - 不跟参数 是 获取   参数为不带单位数字  被卷进去的头部


  ```javascript

    <script>
        $(function () {
          $(document).scrollTop(100);
          // 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
          // 页面滚动事件
          var boxTop = $(".container").offset().top; //获取元素到顶部的距离
          $(window).scroll(function () {
            //如果滑动距离大于等于  boxTop获取的距离 时  淡入  小于 淡出
            if ($(document).scrollTop() >= boxTop) {
              $(".back").fadeIn();
            } else {
              $(".back").fadeOut();
            }
          });
          // 返回顶部
          $(".back").click(function () {
            // $(document).scrollTop(0);
            $("body, html").stop().animate({
              scrollTop: 0,
            });
            // $(document).stop().animate({
            //     scrollTop: 0
            // }); 不能是文档而是 html和body元素做动画
          });
        });
      </script>
  ```

### 7.3 jQuery事件

​	mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll

- $("div").click({function(){})   单个事件


- $("div").on(事件名，"委托事件（子元素）"，function(){})

- 事件切换  trigger("click")    /.triggerHandle("click") 不会触发元素默认行为

- ```javascript
    $(function() {
              // 1. 单个事件注册
               $("div").click(function() {
                  $(this).css("background", "purple");
              });
              $("div").mouseenter(function() {
                   $(this).css("background", "skyblue");
              });

              // 2. 事件处理on
             (1) on可以绑定1个或者多个事件处理程序
              $("div").on({
                  mouseenter: function() {
                   $(this).css("background", "skyblue");
                  },
              click: function() {
                $(this).css("background", "purple");
             },
            mouseleave: function() {
                   $(this).css("background", "blue");
              }
          });
              $("div").on("mouseenter mouseleave", function() {
                  $(this).toggleClass("current");
              });
             (2) on可以实现事件委托（委派）
              // $("ul li").click();
              $("ul").on("click", "li", function() {
                  alert(11);
              });
              // click 是绑定在ul 身上的，但是 触发的对象是 ul 里面的小li
              // (3) on可以给未来动态创建的元素绑定事件
               $("ol li").click(function() {
                alert(11);
               })
              $("ol").on("click", "li", function() {
                  alert(11);
              })
              var li = $("<li>我是后来创建的</li>");
              $("ol").append(li);
          })
       // 1. 事件解绑 off 

                   $("div").off();  // 这个是解除了div身上的所有事件

                  $("div").off("click"); // 这个是解除了div身上的点击事件

                  $("ul").off("click", "li");

                // 2. one() 但是它只能触发事件一次

                  $("p").one("click", function() {

                      alert(11);

                  })
     // 自动触发事件
               //1. 元素.事件()
              $("div").click();//会触发元素的默认行为
               //2. 元素.trigger("事件")
               $("div").trigger("click");//会触发元素的默认行为
            // 3. 元素.triggerHandler("事件") 就是不会触发元素的默认行为
              $("div").triggerHandler("click");
      </script>
    ```

### 7.4事件对象

- $("div").on(事件名，"委托事件（子元素）"，function(event/e){})

  - 阻止默认行为：event.preventDefault()   或者 return false 

    阻止冒泡： event.stopPropagation()      

  ```javascript

     <script>
          $(function() {
              $(document).on("click", function() {
                  console.log("点击了document");

              })
              $("div").on("click", function(event) {
                  // console.log(event);
                  console.log("点击了div");
                  event.stopPropagation();
              })
          })
      </script>
  ```

### 7.5其他方法

- 拷贝  
  - $.extend(true, targetObj, obj); 深拷贝 如果里面有不冲突的属性,会合并到一起 
  - $.extend(targetObj, obj);浅拷贝   地址给他 会修改原理的数据

- ```javascript
   // 1. 浅拷贝把原来对象里面的复杂数据类型地址拷贝给目标对象
              targetObj.msg.age = 20;
     // 2. 深拷贝把里面的数据完全复制一份给目标对象 如果里面有不冲突的属性,会合并到一起 
              $.extend(true, targetObj, obj);
   ```
### 7.6 多库共存

-  // 1. 如果$ 符号冲突 我们就使用 jQuery

-  // 2. 让jquery 释放对$ 控制权 让用自己决定
  -  var suibian = jQuery.noConflict();

  ```javascript
        <script>
           $(function () {
             function $(ele) {
               return document.querySelector(ele);
             }
             console.log($("div"));
             // 1. 如果$ 符号冲突 我们就使用 jQuery
             jQuery.each();
             // 2. 让jquery 释放对$ 控制权 让用自己决定
             var suibian = jQuery.noConflict();
             console.log(suibian("span"));
             suibian.each();
           });
         </script>
  ```

# AjAX    请求 处理  响应

## 1.请求

- $.get(url, [data], fn))    [ ]可写可不写   参数{id：1}

- $.post(url, [data], fn))   

- $.ajax()

  - $.ajax({

       type: '',  // 请求的方式，例如GET 或 POST

       url: '',  // 请求的 URL 地址

       data: { }, // 这次请求要携带的数据

       success: function(res) { }  // 请求成功之后的回调函数

    })

- ```

  ```

## 2.模板引擎

- form表单
- ![66376896556](C:\Users\ADMINI~1\AppData\Local\Temp\1663768965564.png)
- method 
  - GET：通过URL地址  (一般不用)
  - POST：方式适合用来提交大量的、复杂的、或包含文件上传的数据。
- enctype
  - 文件上传的操作时，必须将enctype 的值设置为multipart/form-data

### 2.1监听表单提交事件

- submit()方法


- ```JavaScript
  $('#form1').submit(function(e) {
     alert('监听到了表单的提交事件')
  })

  $('#form1').on('submit', function(e) {
     alert('监听到了表单的提交事件')
  })

  ```

### 2.2 阻止表单默认提交行为

- event.preventDefault() 函数，来阻止表单的提交和页面的跳转

- ```JavaScript
  $('#form1').submit(function(e) {
     // 阻止表单的提交和页面的跳转
     e.preventDefault()
  })

  $('#form1').on('submit', function(e) {
     // 阻止表单的提交和页面的跳转
     e.preventDefault()
  })

  ```

### 2.3 快速获取表单中的数据

- jQuery提供了 serialize()函数

- ==注意：在使用serialize()函数快速获取表单数据时，必须为每个表单元素添加name属性==

- ```javascript
  <form id="form1">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">提交</button>
  </form>
  $('#form1').serialize()
  // 调用的结果：
  // username=用户名的值&password=密码的值
  ```

### 2.4.模板引擎art-template

- 语法：
  - {{ }}变量输出{{value}}  {{obj.key}} {{obj['key']}}   {{a ?b : c}} {{a|| b}} {{a +b}}
  - {{@value }}  原文输出 才能保证HTML标签
  - 条件输出 
    - {{ifvalue}} 按需输出的内容 {{/if}}   
    - {{if v1}}按需输出的内容 {{else if v2}}按需输出的内容 {{/if}}
  - 循环输出
    - {{each arr}}   {{/each}}
  - 过滤器
    - {{value | ==filterName==}}
    - template.defaults.imports.==filterName== = function(value){/*return处理的结果*/}

### 2.5实现原理

- exec()  检索字符串中正则表达式的匹配    无返回null

- replace（旧值，新）函数

- whlie 循环replace  实现 多次

- replace 替换为真值

- ```JavaScript
  //1.基本语法
  var str = 'hello'
  var pattern = /o/
  // 输出的结果["o", index: 4, input: "hello", groups: undefined]
  console.log(pattern.exec(str)) 
  //2.分组
  var str = '<div>我是{{name}}</div>'//字符串
   var pattern = /{{([a-zA-Z]+)}}///   正则  a-zA-z字母
   var patternResult = pattern.exec(str)  // 提取  str中的匹配字母
   console.log(patternResult)
   // 得到 name 相关的分组信息
   // ["{{name}}", "name", index: 7, input: "<div>我是{{name}}</div>", groups: 
              0               1            2                       3                                         4
  //undefined]
  var str = '<div>我是{{name}}</div>'  
  var pattern = /{{([a-zA-Z]+)}}/
  var patternResult = pattern.exec(str) 
  str = str.replace(patternResult[0], patternResult[1]) 
  console.log(str)
   //   1 替换 0 
  // 输出的内容是：<div>我是name</div>
  //多次 replace
  var str = '<div>{{name}}今年{{ age }}岁了</div>'
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/
  var patternResult = null  //定义一个 变量 
  while(patternResult = pattern.exec(str)) {  //将str 提取字母
     str = str.replace(patternResult[0], patternResult[1]) // 替换
  }
  console.log(str) // 输出 <div>name今年age岁了</div>
  //replace 替换为真值
  var data = { name: '张三', age: 20 }
  var str = '<div>{{name}}今年{{ age }}岁了</div>'
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/
  var patternResult = null
  while ((patternResult = pattern.exec(str))) {
     str = str.replace(patternResult[0], data[patternResult[1]])
  }
  ```

### 2.6模板使用

- ```JavaScript
  //导入模版  
  <script src="./js/template.js"></script>
  //定义  格式  type="text/html"
  <script type="text/html" id="tpl-user">
      <div>姓名：{{name}}</div>
      <div>年龄：{{ age }}</div>
      <div>性别：{{  gender}}</div>
      <div>住址：{{address  }}</div>
    </script>
  // 定义数据
      var data = { name: 'zs', age: 28, gender: '男', address: '北京顺义马坡' }

      // 调用模板引擎
      var htmlStr = template('tpl-user', data)

      // 渲染HTML结构
      document.getElementById('user-box').innerHTML = htmlStr
  ```

## 3.AJAX加强

### XHR

- xhr发起get/post请求

- GET请求步骤：

  - ①创建 xhr 对象
  - ②调用 xhr.open() 函数
  - ③调用 xhr.send() 函数
  - ④监听 xhr.onreadystatechange 事件

- POST步骤：

  - ①创建 xhr 对象
  - ②调用 xhr.open() 函数
  - ③设置 Content-Type 属性（固定写法）
  - ④调用 xhr.send() 函数，同时指定要发送的数据
  - ⑤监听 xhr.onreadystatechange 事件

- responseText 响应数据

- ```JavaScript
  // 1. 创建 XHR 对象
  var xhr = new XMLHttpRequest()
  // 2. 调用 open 函数，指定 请求方式 与 URL地址   ?    &拼接
  xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1&id=2') 
  // 3. 调用 send 函数，发起 Ajax 请求
  xhr.send()
  // 4. 监听 onreadystatechange 事件
  xhr.onreadystatechange = function() {
      // 4.1 监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status
      if (xhr.readyState === 4 && xhr.status === 200) {
          // 4.2 打印服务器响应回来的数据
          console.log(xhr.responseText)
      }
  }
  // 1. 创建 xhr 对象
  var xhr = new XMLHttpRequest()
  // 2. 调用 open()
  xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook')
  // 3. 设置 Content-Type 属性（固定写法）
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  // 4. 调用 send()，同时将数据以查询字符串的形式，提交给服务器
  xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社')
  // 5. 监听 onreadystatechange 事件
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText)
      }
  }

  ```

### 封装自己的ajax

- ```javascript

  ```

  ​

### XML

- XML的英文全称是EXtensibleMarkupLanguage，即可扩展标记语言。因此，XML
  和HTML类似，也是一种标记语言。

- XML和HTML区别

  - XML和HTML虽然都是标记语言，但是，它们两者之间没有任何的关系。
  - lHTML 被设计用来描述网页上的内容，是网页内容的载体
  - lXML 被设计用来传输和存储数据，是数据的载体

- 2新特性

  - xhr.timeout= 3000      请求时限

  - FormData对象 快速获取表单数据

    - append()方法 尾部添加数据

  - ```JavaScript
     // 获取表单元素
     var form = document.querySelector('#form1')
     // 监听表单元素的 submit 事件
     form.addEventListener('submit', function(e) {
        e.preventDefault()  //阻止 表单提交后跳转页面
         // 根据 form 表单创建 FormData 对象，会自动将表单数据填充到 FormData 对象中
         var fd = new FormData(form) //获取表单的数据
         var xhr = new XMLHttpRequest()  //定义实例化对象
         xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
         xhr.send(fd) //添加数据
         xhr.onreadystatechange = function() {}
       })
     ```
    ```

    ​
    ```

### JSON

- JSON就是 Javascript 对象和数组的字符串表示法， JSON 的本质是字符串。对象和数组
  - 对象结构：对象结构在JSON中表示为 key必须是使用英文的双引号包裹的字符串，value的数据类型可以是数字、字符串、布尔值、null、数组、对象6种类型。
  - 数组结构：数组结构在JSON中表示为。数组中数据的类型可以是数字、字符串、布尔值、null、数组、对象6种类型。
  - JSON语法注意事项
    - ①属性名必须使用双引号包裹
    - ②字符串类型的值必须使用双引号包裹
    - ③JSON 中不允许使用单引号表示字符串
    - ④JSON 中不能写注释
    - ⑤JSON 的最外层必须是对象或数组格式
    - ⑥不能使用 undefined或函数作为JSON的值
    - JSON 的作用：在计算机与网络之间存储和传输数据。
    - JSON 的本质：用字符串来表示Javascript对象数据或数组数据
- JSON.parse()    从 JSON 字符串转换为 JS 对象
- JSON.stringify()   从 JS 对象转换为JSON 字符串
  - 把数据对象转换为字符串的过程，叫做==序列化==，例如：调用== JSON.stringify()== 函数的操作，叫做 JSON 序列化。
  - 把字符串转换为数据对象的过程，叫做==反序列化==，例如：调用==JSON.parse()==函数的操，叫做JSON反序列化。

### 上传文件

- ```JavaScript
  //ui结构
  // <!-- 1. 文件选择框 -->
      <input type="file" id="file1" />
     // <!-- 2. 上传按钮 -->
      <button id="btnUpload">上传文件</button>
      <br />
          
      <!-- 3. 显示上传到服务器上的图片 -->
      <img src="" alt="" id="img" width="800" />
     
         //   2验证书否选择了文件
          //获取上传文件的按钮
          var btnUpload = document.querySelector('#btnUpload')
   // 2. 为按钮添加 click 事件监听
   btnUpload.addEventListener('click', function() {
       // 3. 获取到选择的文件列表
       var files = document.querySelector('#file1').files
       if (files.length <= 0) {
           return alert('请选择要上传的文件！')
       }
       // 1. 创建 FormData 对象
   var fd = new FormData()
   // 2. 向 FormData 中追加文件  
   fd.append('avatar', files[0])  //不为空的话  files数组里就有 东西  把索引为0追加
  // 1. 创建 xhr 对象
   var xhr = new XMLHttpRequest()
   // 2. 调用 open 函数，指定请求类型与URL地址。其中，请求类型必须为 POST
   xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
   // 3. 发起请求
   xhr.send(fd)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
      if (data.status === 200) { // 上传文件成功
        // 将服务器返回的图片地址，设置为 <img> 标签的 src 属性
   document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
      } else { // 上传文件失败
        console.log(data.message)
      }
    }
  }
  ```

### jquery上传文件

- ```JavaScript

  $(document).ajaxStart(function() {
       $('#loading').show()
   })
   // 自 jQuery 版本 1.8 起，该方法只能被附加到文档
   $(document).ajaxStop(function() {
       $('#loading').hide()
   })

  $('#btnUpload').on('click', function() {
       // 1. 将 jQuery 对象转化为 DOM 对象，并获取选中的文件列表
       var files = $('#file1')[0].files
       // 2. 判断是否选择了文件
       if (files.length <= 0) {
           return alert('请选择图片后再上传！‘)
       }
       var fd = new FormData()
   fd.append('avatar', files[0])
   })
    $.ajax({
       method: 'POST',
       url: 'http://www.liulongbin.top:3006/api/upload/avatar',
       data: fd,
       // 不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值
       contentType: false,
       // 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
        processData: false,
       success: function(res) {
           console.log(res)
       }
   })
     
  ```

### axios

- axios 发起get/post/ajax请求的语法

- ```JavaScript
  var url = 'http://www.liulongbin.top:3006/api/get'
   // 请求的参数对象
   var paramsObj = { name: 'zs', age: 20 }
   // 调用 axios.get() 发起 GET 请求
   axios.get(url, { params: paramsObj }).then(function(res) {
       // res.data 是服务器返回的数据
       var result = res.data
       console.log(res)
   })

   // 请求的 URL 地址
   var url = 'http://www.liulongbin.top:3006/api/post'
   // 要提交到服务器的数据
   var dataObj = { location: '北京', address: '顺义' }
   // 调用 axios.post() 发起 POST 请求
   axios.post(url, dataObj).then(function(res) {
       // res.data 是服务器返回的数据
       var result = res.data
       console.log(result)
   })
   axios({
       method: '请求类型',
       url: '请求的URL地址',
       data: { /* POST数据 */ },
       params: { /* GET参数 */ }
   }) .then(callback)
  ```


### 同源

- 协议、域名、端口都相同的   同源  反之跨域

同源策略

- 浏览器提供的一个安全功能    a网站的JavaScript不能与b网站的资源交互

### JSONP

-  解决	跨域数据访问的问题     支持JSONP	

- 通过通过\<script>标签的src属性，请求跨域的数据接口，并通过函数调用的形式，接收跨域接口响应回来的数据。

- ```javascript
  <script>
     function success(data) {
       console.log('获取到了data数据：')
       console.log(data)
     }
   </script>
  //实现jsonp 
  <script src="http://ajax.frontend.itheima.net:3006/api/jsonp?callback=success&name=zs&age=20"></script>

  ```


### 自定义参数及回调

- jsonp：参数名称  默认callback
- jsonpCallack:回调函数名称 jQueryxxx

### 防抖

* 用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询的请求，这样可以有效减少请求次数，节约请求资源；

```JavaScript
var timer = null                    // 1. 防抖动的 timer

 function debounceSearch(keywords) { // 2. 定义防抖的函数
    timer = setTimeout(function() {
    // 发起 JSONP 请求
    getSuggestList(keywords)
    }, 500)
 }

 $('#ipt').on('keyup', function() {  // 3. 在触发 keyup 事件时，立即清空 timer
    clearTimeout(timer)
    // ...省略其他代码
    debounceSearch(keywords)
 })

```

### 节流

- 防抖：如果事件被频繁触发，防抖能保证只有最有一次触发生效！前面 N 多次的触发都会被忽略！
- 节流：如果事件被频繁触发，节流能够减少事件触发的频率，因此，节流是有选择性地执行一部分事件！


- ```JavaScript
  $(function() {
    var angel = $('#angel')
    var timer = null // 1.预定义一个 timer 节流阀
    $(document).on('mousemove', function(e) {
      if (timer) { return } // 3.判断节流阀是否为空，如果不为空，则证明距离上次执行间隔不足16毫秒
      timer = setTimeout(function() {
        $(angel).css('left', e.pageX + 'px').css('top', e.pageY + 'px')
        timer = null // 2.当设置了鼠标跟随效果后，清空 timer 节流阀，方便下次开启延时器
      }, 16)
    })
  })

  ```



## HTTP协议加强

- 主体 内容  方式 三要素
- 通信协议：是指通信的双方完成通信所必须遵守的规则和约定。通俗的理解：通信双方采用约定好的格式来发送和接收消息，这种事先约定好的通信格式，就叫做通信协议。
- 客户端与服务器之间要实现网页内容的传输，则通信的双方必须遵守网页内容的传输协议。
- 网页内容又叫做超文本，因此网页内容的传输协议又叫做超文本传输协议（HyperText
  Transfer Protocol），简称 HTTP协议。

### 请求消息

- HTTP请求消息又叫做HTTP请求报文。
- HTTP请求消息由请求行（requestline）、请求头部（ header ）、空行和 请求体 4个部分组成。
- 请求行由请求方式、URL和 HTTP 协议版本 3个部分组成，他们之间使用空格隔开。
- 请求头部 
  - User-Agent 用来说明当前是什么类型的浏览器；
  - Content-Type 用来描述发送到服务器的数据格式；
  - Accept 用来描述客户端能够接收什么类型的返回内容；
  - Accept-Language 用来描述客户端期望接收哪种人类语言的文本内容。
  - 请求头部由多行键/值对 组成，每行的键和值之间用英文的冒号分隔。
- 空行，用来分隔请求头部与请求体。
- 请求体中存放的，是要通过 POST 方式提交到服务器的数据
- ![66389511788](C:\Users\ADMINI~1\AppData\Local\Temp\1663895117887.png)

### 响应消息

- 响应消息就是服务器响应给客户端的消息内容，也叫作响应报文。
- ![66389517688](C:\Users\ADMINI~1\AppData\Local\Temp\1663895176882.png)
- 状态行
  - 状态行由 HTTP协议版本、状态码和状态码的描述文本3 个部分组成，他们之间使用空格隔开;
  - 响应头部用来描述服务器的基本信息。响应头部由多行 键/值对 组成，每行的键和值之间用英文的冒号分隔。
  - ![66389525747](C:\Users\ADMINI~1\AppData\Local\Temp\1663895257474.png)
  - 响应消息中的空行，用来分隔响应头部与响应体。
  - 响应体中存放的，是服务器响应给客户端的资源内容。

### 请求方法

- 用来表明要对服务器上的资源执行的操作。最常用的请求方法是 GET 和 POST。

### 响应状态码

- ![66389557828](C:\Users\ADMINI~1\AppData\Local\Temp\1663895578284.png)
- ![66389558613](C:\Users\ADMINI~1\AppData\Local\Temp\1663895586133.png)
- ![66389559208](C:\Users\ADMINI~1\AppData\Local\Temp\1663895592088.png)
- ![66389559801](C:\Users\ADMINI~1\AppData\Local\Temp\1663895598011.png)









