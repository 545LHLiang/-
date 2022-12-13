

# html

## 权重

​	可以把样式的应用方式分为几个等级，按照等级来计算权重

1. !important	权重值为10000
	. . 内联样式 	权重值为1000
	. . ID选择器	权重值为100
	. . 类，伪类和属性选择器	权重值为10
	. . 标签选择器和伪元素选择器	权重值为1
6. 其他权重为0

## 文件英文名

1. ​	文  件  夹：	==index.html 首页 favicon.ico ico图标 image 固定使用的图片素材 uploads 非固定使用图片==、

  . ​	css 文 件： 	==base.css 基础公共样式 common 多个页面相同模块 index.css首页css文件==

  . ​	页面结构：	容 器:container     	==页头：header== 		内容：content/container 	页面主体：main 

   				==尾：footer==		==导航：nav==		 侧栏：sidebar 			栏目：column 		

   				==页面外围控制整体布局宽度：wrapper== 	  ==左右中：left right center==        ==上下： prev  next==

   				 菜单：menu		子导航：subnav 	  头部导航:topnav      		==快捷导航：shortcut==	

  ​				==横幅：banner==

## SEO三大优化

```HTML
   <!-- meta:desc 网页描述标签 -->
    <meta name="description" content="京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。">
    <!-- meta:kw 网页关键词标签 -->
    <meta name="keywords" content="网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东">
	<!-- 网页标题标签 -->
    <title>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
    <!-- link:favicon : 浏览器标题栏图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

## HTML骨架

```HTML
<!-- 声明html -->
<!DOCTYPE html>
<!-- 中文网站 zh-CN 简体中文 / en 英文 搜索引擎归类 + 浏览器翻译 -->
<html lang="zh-CN">
<head>
    <!--charset="UTF-8" 规定网页的字符编码 
        1. UTF-8：万国码，国际化的字符编码，收录了全球语言的文字
        2. GB2312：6000+ 汉字
        3. GBK：20000+ 汉字 -->
    <meta charset="UTF-8">
    <!-- ie(兼容性差) / edge -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 宽度 = 设备宽度 : 移动端网页的时候要用 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 还有SEO三大标签 -->
    <!-- 网页标题 -->
    <title>Document</title>
</head>
<body></body>
</html>
```

## 精灵图

使用精灵图的步骤是什么？

1. 创建一个盒子
2. 设置盒子大小为小图片大小
3. ==设置精灵图为盒子的背景图片 background-image:精灵图地址==
4. ==将小图片左上角坐标 取负值，设置给盒子的background-position：x y;==

## 建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient

## 清楚浮动 ：

1.直接设置父元素高度

2.额外标签法 在父元素内容的最后添加一个块级元素 

```HTML
.clearfix {
            /* 清除左右两侧浮动的影响 */
            clear: both;
        }
```

3.单伪元素清除法 

```HTML
 /* 单伪元素清除浮动 和 额外标签法原理是一样的 */
        .clearfix::after {
            content: '';

            /* 伪元素添加的标签是行内, 要求块 */
            display: block;
            clear: both;

            /* 为了兼容性 */
            height: 0;
            visibility: hidden;
        }
```

==4.双为元素清楚法==

```HTML
        /* 清除浮动 */
        .clearfix::before,
        .clearfix::after {
            content: '';
            display: table;
        }
        /* 真正清除浮动的标签 */
        .clearfix::after {
            /* content: '';
            display: table; */
            clear: both;
        }
```

==5.给父元素设置`overflow : hidden`==

## 字体图标

icomoon 字库 http://icomoon.io

阿里 iconfont 字库 http://www.iconfont.cn/

1. 将字体图标的font文件夹放入与html同一个文件  将css 中 @font-face复制到html中的style里 
2. 使用标签改字体

```
span{
     font-family: '字体图标名字';
}
<span></span>
```

​     3.使用 ：：before/after 伪元素 添加 

```
 div::after {           
            font-family: '字体图标名字';
            content: '';   ①
           content: '\e91e';  ② 
           }
```

## 什么网页

​	网页是图片、链接、文字、声音、视频等元素组成, 其实就是一个html文件(后缀名为html)

## 网页生成

​	网页生成制作: 有前端人员书写 HTML 文件, 然后浏览器打开,就能看到了网页.

## HTML是什么

​	==HTML: 超文本标记语言==, 用来制作网页的一门语言. 有标签组成的. 比如 图片标签 链接标签 视频标签等…

## 什么是WEB标准

​	==Web 标准是由 W3C 组织和其他标准化组织制定的一系列标准的集合==。W3C（万维网联盟）是国际最著名的标准化组织

## WEB结构

​	==结构写到 HTML 文件中， 表现写到 CSS 文件中， 行为写到 JavaScript 文件中。==

## 基本语法概述

1.  HTML 标签是由尖括号包围的关键词，例如 < html>。

2.  HTML 标签通常是成对出现的，例如 < html> 和 < /html> ，我们称为双标签。标签对中的第一个标签是 开始标签，第二个标签是结束标签。

3.  有些特殊的标签必须是单个标签（极少情况），例如 < br />，我们称为单标签。


## 常用标签

==标题标签 < h1> - < h6>（重要）==

==段落 < p> < /p>  换行标签 < br />、水平线 < hr>==

文本格式化标签 后者语义强
	 b strong 加粗 双标记
	 i em 倾斜 双标
	 u ins 下划线 双标
	s del 删除线 双标

图片标签

- ​              < img src="图片路径" alt="替换文本" title="提示文本" width="宽度" height="高度" border="边框">

	 ​		align属性 top上 middle 中 下 bottom left 左 right 右
	 ​		==相对路径：以引用文件所在位置为参考基础，而建立出的目录路径。==
	 ​		==绝对路径：是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。==
	 ​		同级目录：直接写：目标文件名字！
	 ​		下级目录：直接写：文件夹名/目标文件名字！
	 ​		上级目录：直接下：../目标文件名字！

超链接： < a href="跳转目标" target="目标窗口的弹出方式"> 文本或图像 < /a>
              ==_self默认 _ blank为新窗口打开==

链接分类：

- ​              ==外部链接: 例如 < a href="http:// www.baidu.com "> 百度 < /a>。==

- ​              内部链接:网站内部页面之间的相互链接. 直接链接内部页面名称即可，例如 < a href="index.html"> 首页 < /a>。
- ​          ==空链接: 如果当时没有确定链接目标时， < a href="#"> 首页 < /a> 。==
- ​              下载链接: 如果 href 里面地址是一个文件或者压缩包，会下载这个文件。
- ​              网页元素链接: 在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接.
- ​              锚点链接: 点我们点击链接,可以快速定位到页面中的某个位置.
- ​              超链接标签 (重点）
- ​              在链接文本的 href 属性中，设置属性值为 #名字 的形式，
- ​                           如 < a href="#two"> 第2集 < /a> ）
- ​              找到目标位置标签，里面添加一个 id 属性 = 刚才的名字 ，
- ​                          如： < h3 id="two">第2集介绍 < /h3>
	 ​		HTML中的注释以“ < !--”开头，以“ -->”结束。

==特殊字符：空格& nbsp; 小于号& lt; 大于号& gt; 版权& copy; 上标&sup ; 下标&sub ; 度& deg;==

## 音频标签

- ​	==src：地址 controls：控制播放控件 autoplay：自动播放(部分浏览器不支持) loop：循环播放==

	 ​	==source可以让浏览器自己选择播放的格式 mp3和ogg==	

```HTML
< audio controls="controls">

	< source src="音频地址" type="audio/mp3">

	< source src="音频地址" type="audio/audio/ogg">

 	 -你的浏览器不支持audio

< /audio>

```

## 视频标签

- ==src：地址 controls：控制播放控件 autoplay：自动播放(谷歌需要配合muted实现静音播放) loop：循环播放 poster 显示图片==

- ==source可以让浏览器自己选择播放的格式 mp4和ogg==

```HTML
< video controls="controls">

< source src="音频地址.ogg" type="avideo/ogg">

< source src="音频地址.mp4" type="video/mp4">

你的浏览器不支持video

< /video>

```

## 列表

### 无序列表

- 无序列表由几个标签组成？分别表示什么？

- ​         ul标签：表示无序列表的整体

- ​         li标签：表示无序列表的每一项

- 无序列表标签的嵌套规范是什么？

- type属性：circle 圆 | square 方 | disc点（默认）

- ​         ul标签中只允许嵌套li标签

- ​         li标签中可以嵌套任意内容


### 有序列表

- 有序列表由几个标签组成？分别表示什么？

- type=排列方式 | start 默认从几开始 | reversed 倒序

- ​         ol标签：表示无序列表的整体

- ​         li标签：表示无序列表的每一项

- 有序列表标签的嵌套规范是什么？

- ​         ol标签中只允许嵌套li标签

- ​         li标签中可以嵌套任意内容


### 自定义列表（dl）

结构：dl>dt（名词）>dd（解释名词）用于内容解释

------

## 表格标签

- 完成一个简单的表格，需要由几个标签组成？分别表示什么？

-  ==table标签：表格整体==

- ==tr标签：表格每行==

-  ==td标签：对于主题的每一项内容==

- 表格基本标签的嵌套规范是什么？

- table > tr > td


### 表格属性

-  border属性：表格边框

-  width属性：表格整体的宽度

-  height属性：表格整体的高度

-  表格整体大标题：==caption标签== • 书写在table标签内部

-  表头单元格：==th标签== • 书写在tr标签内部（用于替换td标签）

- 表格的结构标签分别有哪些？表示什么含义？

- ​         thead：表格头部

- ​         tbody：表格主体

- ​         tfoot：表格底部

-  表格结构标签书写在什么位置？

- ​         表格结构标签写在table标签内部

- ​         表格标签内部用于包裹tr标签


### 合并单元格

- ==• rowspan：跨行合并→垂直方向合并==

- ==• colspan：跨列合并→水平方向合并==

- cellspacing 单元格与单元格边框的边距

- cellpadding 单元格内容与单元格边框的边距


## 表单 form

==表单域：action服务器地址 method发送表单数据时使用的网络请求方法：get/post name 用来区分多个表单==

### input标签属性

- ==text:文本框;password：密码; radio：单选框; checkbox：多选框;==

- ==file:文件;submit:提交按钮;reset:重置按钮 button：普通按钮==


### htm5表单新增

- ==type=email 邮箱 url 地址 date 日期 time 时间 month 月 week 周 number 数字 tel手机号 search搜索框 color颜色 autofocus 自动获取焦点 autocomplete 显示之前搜索的值 默认off /打开on==


```HTML
<!-- 我们验证的时候必须添加form表单域 -->
<form action="">
    <ul>
        <li>邮箱: <input type="email" /></li>
        <li>网址: <input type="url" /></li>
        <li>日期: <input type="date" /></li>
        <li>时间: <input type="time" /></li>
        <li>数量: <input type="number" /></li>
        <li>手机号码: <input type="tel" /></li>
        <li>搜索: <input type="search" /></li>
        <li>颜色: <input type="color" /></li>
        <!-- 当我们点击提交按钮就可以验证表单了 -->
        <li> <input type="submit" value="提交"></li>
    </ul>
</form>
```

### 常用属性

- ==placeholder 提示用户输入内容==

- ==value属性：用户输入的内容，提交之后会发送给后端服务器==

- name属性：当前控件的含义，提交之后可以告诉后端发送过去的数据是什么含义

- 后端接收到数据的格式是：name的属性值 = value的属性值
  ==• name属性对于单选框有分组功能 • 有相同name属性值的单选框为一组，一组中只能同时有一个被选中==

- ==checkbox：默认选中==

- ==multiple：上传多个文件==


### 注意点：

- • 如果需要实现以上按钮功能，需要配合form标签使用

- • form使用方法：用form标签把表单标签一起包裹起来即可

- ### button标签

- ==type属性值（同input的按钮系列）submit reset button(配合js使用)==


### select标签

- ==select标签：下拉菜单的整体==

- ==option标签：下拉菜单的每一项==

- 常见属性：

- ==selected：下拉菜单的默认选中==


### textarea标签

- 场景：在网页中提供可输入多行文本的表单控件

- ==标签名：textarea==

- 常见属性：

- ==cols：规定了文本域内可见宽度==

- ==rows：规定了文本域内可见行数==


### label标签

- 场景：常用于绑定内容与表单标签的关系

- 标签名：label

- 使用方法①：

- ==使用label标签把内容（如：文本）包裹起来==

- ==在表单标签上添加id属性==

- ==在label标签的for属性中设置对应的id属性值==

- 使用方法②：

- ==直接使用label标签把内容（如：文本）和表单标签一起包裹起来==

-  ==需要把label标签的for属性删除即可==


### 补充

- ==readonly="readonly"：设置文本输入框为只读（不能编辑）==

- disabled="disabled"：控件属于非激活状态

- ==required 必须填写==

- pattern 定义规则


------

## 语义化标签

### 无语义标签

- 常用于布局的无语义标签有哪两个？各自的特点有哪些？

- div：独占一行

- span：一行中可以显示多


### 有语义标签

- ==• header：网页头部==
- ==• nav：网页导航==
- ==• footer：网页底部==
- ==• aside：网页侧边栏==
- ==• section：网页区块==
- ==• article：网页文章==


```HTML
<div class=“header”> </div>

<div class=“nav”> </div>

<div class=“content”> </div>

<div class=“footer”> </div>

```

# css初识

- css中文名层叠样式表，作用是给页面中的html标签设置样式

- css语法 选择器{属性名：属性值}

- ==三种引入：内嵌式 在style标签里,外联式：写在css文件里 用link引入，行内式：在标签里的style属性里==


------

## 选择器

1. 标签选择器：标签名 {css属性名：属性值}

2. 类名选择器：.类名 {css属性名：属性值} 标签通过class使用

3. id选择器：#id名 {css属性名：属性值} 标签通过id使用 一般配合js使用

4. 通配符名选择器：*{css属性名：属性值} 所有标签选中


------

## 字体样式

- ==字体大小： font-size：数字+px==
- ==字体粗细：font-weight正常：normal 或 400 • 加粗：bold 或 700==

- ==➢ 字体样式：font-style 正常：normal• 倾斜：italic==

- ==➢ 字体系列：font-family 具体字体1,具体字体2,具体字体3,具体字体4,...,字体系列==

- ==➢ 字体连写：font : style weight size family;==


## 文本样式

- ==文本缩进：text-indent：数字+px 数字+em（推荐：1em = 当前标签的font-size的大小）==

-  ==文本水平对齐方式：text-align：letf center right==

- ==文本修饰：text-decoration：underline下划线，line-through 删除线， overline上划线，none无线==
  ==开发中会使用 text-decoration : none ; 清除a标签默认的下划线==

- text-align : center 能让哪些元素水平居中？

  ​	1.  文本

  ​	2.  span标签、a标签

  ​	3.  input标签、img标签

  ​	4. 	注意点：

  ​		==如果需要让以上元素垂直平居中 需要给以上元素的 父元素 设置行高：line-height==

  ​		让单行文本垂直居中可以设置 line-height : 文字父元素高度

  ​		==网页精准布局时，会设置 line-height : 1 可以取消上下间距==

  ​		==font : style weight size/line-height family ;==

### 补充

- 字母之间的间距letter-spacing
-  单词之间间距word-spacing

-  文本的大小写text-transform

- 文本的装饰text-decoration

- 自动换行word-wrap


------

### 颜色

==文字：color==

==背景background-color==

==方法rgb rgba(a为透明度0~1) 十六进制==

## 复合选择器

### 后代选择器：空格

选择器语法：选择器1 选择器2 { css }

### 子代选择器：>

选择器语法：选择器1 > 选择器2 { css }

### 并集选择器：,

选择器语法：选择器1 ， 选择器2 { css }

### 交集选择器：紧挨着

选择器语法：选择器1选择器2 { css }

### 伪类选择器：

- ==选择器：hover 鼠标悬停 显示内容==
- ：link 未访问链
- : visited 已经访问
- : active活动链接

### 焦点伪类选择器：

input：focus{}

### 结构伪类选择器

- ==E:first-child/last-child/nth-child(n)/nth-last-child(){}==
- n为：0、1、2/偶数2n even/奇数 2n+1/-1 odd/找到前五个 -n+5/后五个n+5
- ==E:nth-of-type(n){}==
- •==:nth-child==→ 直接在所有孩子中数个数（旗下所有孩子男女都有）
- •==:nth-of-type==→ 先通过该 类型 找到符合的一堆子元素，然后在这一堆子元素中数个数（只有旗下的男孩）

```HTML
 <style>
    ul li:first-child{
      background-color: red;
    }
  </style>

  <ul>
    <li>列表项一</li> 选中他
    <li>列表项二</li>
    <li>列表项三</li>
    <li>列表项四</li>
  </ul>

<style>
    ul li:nth-child(2){    选中 ul 的第二个孩子 必须为li
      /* 字体变成红色 */
        color: red;
    }

    ul li:nth-of-type(2){      选中ul 中第二个孩子 li
      /* 背景变成绿色 */
      background-color: green; 
    }
  </style>


  <ul>
    <li>列表项一</li>
    <p>乱来的p标签</p> 没被选中
    <li>列表项二</li>绿色
    <li>列表项三</li>
    <li>列表项四</li>
  </ul>
```

### 伪元素

- ==::before // after==
- ==\1. 必须设置content属性才能生效==
- ==\2. 伪元素默认是行内元素==

### 属性选择器

- ==~具有这个属性值的标签--^以什么开头-- $结尾--*含指定字符串--|指定属性值为含他的或以他为开头==
- E[arr]选择arr属性的E元素
- ==E[arr=''var''] 选择arr为var的E元素==

```JavaScript
 /*只选择 type =text 文本框的input 选取出来 */
input[type=text] {
    color: pink;
}
/* 选择首先是div 然后 具有class属性 并且属性值 必须是 icon开头的这些元素 */
div[class^=icon] {
    color: red;
}
/* 选择首先是section 然后 具有class属性 并且属性值 必须是 data结尾的这些元素 */
section[class$=data] {
    color: blue;
}
```

## ==背景（以下重点）==

1. ==背景颜色：background-color（bgc）==
2. ==背景图片：background-image（bgi）==
3. ==背景固定：background-attachment：scroll 随页面滚动 fixed 固定==
4. ==背景大小：background-size:宽度 高度；contain等比 不超出盒子的最大值 cover覆盖满盒子没有恐怖==
5. ==线性渐变：background-image：linear-gradient（方向：0deg，颜色1，颜色2）=
6. 重复线性渐变（repeating-linear-gradient（方向：0deg，颜色1，颜色2））
7. 径向background-image：radial-gradient（渐变形状 圆心位置 at+关键字，颜色1，颜色2）
8. 重复径向渐变（repeating-radial-gradient（渐变形状 圆心位置 at+关键字，颜色1，颜色2
9. ==背景平铺：：background-repeat（bgr）：repeat 默认水平和垂直都平铺  no-repeat 不平铺  repeat-x/y 水平/垂直平铺==
10. ==背景位置：background-position（bgp）：left center right  top center bottom   数字+px(x轴 y轴)==
11. 背景连写：background：color image repeat position

- 如果需要设置单独的样式和连写

1.  要么把单独的样式写在连写的下面

2. 要么把单独的样式写在连写的里面

   ​

------

### 元素显示模式

#### 块级元素

-  ==独占一行（一行只能显示一个）==
-  宽度默认是父元素的宽度，高度默认由内容撑开
- 可以设置宽高

#### 行内元素

-  ==一行可以显示多个==
- 宽度和高度默认由内容撑开
- ==不可以设置宽高==

#### 行内块元素

- ==一行可以显示多个==
-  ==可以设置宽高==

#### 元素模式转换：

- ==display：block转换为块级元素 inline-block行内块 inline 行内==
- p标签中不要嵌套div、p、h等块级元素
- a标签不能嵌套a标签
- css具有继承性、层叠性、优先级
- 子元素有默认继承父元素样式的特点

#### 优先级排序

- ==继承 < 通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important==
-  !important写在属性值的后面，分号的前面！
- !important不能提升继承的优先级，只要是继承优先级最低！
- 实际开发中不建议使用 !important 。
- !important如果不是继承，则权重最高，天下第一！

------

### 盒子模型

盒子模型一共有几个部分组成？分别是什么？

1. 内容区域：content
2. .边框区域：border
3. 内边距区域：padding
4. 外边距区域：margin

#### 边框

- ==边框：border-width粗细/style样式/color颜色 （solid实线，dashed 虚线 ，点线 dotted）==

   	属性值：单个取值的连写，取值之间以空格隔开   如：`border : 10px solid red;`

- ==属性名：border - 方位名词 属性值：连写的取值==

- ➢ 给盒子设置四周 20像素、实线、蓝色的边框，属性应该如何设置？

  ​	 `border：20px solid blue；`

  ➢ 给盒子设置上边框 10像素、虚线、黄色的边框，属性应该如何设置？

  ​        `border-top：10px dashed yellow；`

- ==设置边框图片：`border-image-source: url(images/1.jpg);==`

- ==图片边框偏移：`border-image-slice: 60;==`

- ==图片边框宽度：`border-image-width: 30px;==`

- ==图片边框：`border-image==`

- 属性值：==source 图片路径 slice 偏移量 width 边框宽度 outset 边框向外延申距离 repeat 平铺方式==

#### 内边距

内边距：padding (外边距 margin 方法与其同)

1. 一个值：全部     两个值：上下 左右   三个值：上 左右 下   四个值：上 右 下 左

2. 属性名：padding - 方位名词 属性值：数字 + px

   ==注意： 水平方向的margin和padding布局中有效==
    	   ==垂直方向的margin和padding布局中无效==

### 盒子阴影

- `box-shadow: h-shadow v-shadow blur spread color inset;`

- h/v必需 水平/垂直  b 模糊度  s尺寸  c颜色  i内部阴影  outset 外部

### 文字阴影

`text-shadow: h-shadow v-shadow blur color`

#### 如果不想盒子被撑大?

- ➢ 解决方法 ① ：手动内减

  • 操作：自己计算多余大小，手动在内容中减去

  • 缺点：项目中计算量太大，很麻烦

- ➢ 解决方法 ② ：自动内减

  • 操作：给盒子设置属性 ==box-sizing : border-box ;==即可

  • 优点：浏览器会自动计算多余大小，自动在内容中减去

-  标准流：又称文档流，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了应该以何种方式排列元素

- ➢ 常见标准流排版规则：
	 ​	块级元素：从上往下，垂直布局，独占一行   行内元素   行内块元素：从左往右，水平布局，空间不够自动折行

------

### 浮动

`float:left/right`

#### ➢ 浮动元素的特点有哪些？

-  ==浮动元素会脱标，在标准流中不占位置==
-  浮动元素比标准流高出半个级别，可以覆盖标准流中的元素
- 浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动
-  ==浮动元素有特殊的显示效果：① 一行可以显示多个 ② 可以设置宽高==
- ==浮动的元素不能通过text-align:center或者margin:0 auto==

------

### 定位

​	`position：relative/absolute/fixed`

### 静态定位

-  静态定位就是之前标准流，不能通过方位属性进行移动
- 之后说的定位不包括静态定位，一般特指后几种：相对、绝对、固定

#### ==相对定位==

- 需要配合方位属性实现移动
- 相对于自己原来位置进行移动
- 在页面中占位置 → 没有脱标

#### ==绝对定位==

-  需要配合方位属性实现移动
-  默认相对于浏览器可视区域进行移动
- 在页面中不占位置 → 已经脱标

#### ==子绝父相==

- 子元素：绝对定位
- 父元素：相对定位
- 父元素是相对定位，则对网页布局影响最小

#### ➢ 使用子绝父相水平垂直居中的操作是什么？

1. ==子绝父相  left：50%； top：50%；==
2. ==transform：translate（-50%，-50%）；//位移自己宽度高度的一半==

#### 固定定位

- 需要配合方位属性实现移动
-  相对于浏览器可视区域进行移动
- 在页面中不占位置 → 已经脱标

#### 不同布局方式元素的层级关系：

标准流 < 浮动 < 定位

#### 不同定位之间的层级关系：

- 相对、绝对、固定默认层级相同
- 此时HTML中写在下面的元素层级更高，会覆盖上面的元素
- ==z-index：数字；修改定位元素层级==

------

## 装饰

### ==垂直对齐：vertical-align==

属性值：baseline 默认 基线对齐 top 顶部 ==middle 中部== bottom底部

- 可以解决的问题
-  文本框和表单按钮无法对齐问题
- input和img无法对齐问题div中的文本框，文本框无法贴顶问题
- div不设高度由img标签撑开，此时img标签下面会存在额外间隙问题
-  使用line-height让img标签垂直居中问题

### =光标类型 cursor==

​	属性值：default 箭头 pointer小手 text 工字型 move 十字光标

### ==防止拖拽文本域 resize==

​	textarea{ resize: none;}

### ==边框圆角：==

​	border-radius   属性值：数字+px 百分比

### ==溢出部分显示效果==

​	属性值：visible 溢出可见 hidden 溢出隐藏 scroll 显示滚动条 auto 自动显示滚动条

### 元素本身隐藏

==visibility：hidden ；占位置==

==display：none；不占位置 display：block；（显示）==

### 边框合并

==border-collapse：collapse；==

### 过度

```
/* 过渡配合hover使用, 谁变化谁加过渡属性 */
	.box {
		width: 200px;
		height: 200px;
		background-color: pink;
		/* 宽度200, 悬停的时候宽度600, 花费1秒钟 */
		/* transition: width 1s, background-color 2s; */
		/* 如果变化的属性多, 直接写all,表示所有 */
		transition: all 1s;
	}
	.box:hover {
		width: 600px;
		background-color: red;
	}*/
					
```

------

### CSS 三角

```HTML
.box3 {
            /* 宽度 高度为0 */
            width: 0;
            height: 0;
            /*居中*/
            margin: 100px auto;
            /*20像素 实线的透明色*/
            border: 20px solid transparent;
            /*右边框为红色*/
            border-right-color: red;
        }
```

### CSS 2D转换

转换属性：transform

- ​	==移动：translate==    transform:translate(x,y)  transform:translateX/Y(n)  

	 ​			不影响其他元素的位置,百分比是自己宽度高度的多少，行内标签无用
	 ​	==旋转：rotate==   transform:rotate(0deg) 角度为正 顺时针，负 逆时针; 中心点为元素中心点 
	 ​			360deg时，可以给本身添加过渡transition
	 ​	==缩放：scale== transform:scale(x,y)
	 ​	         两个参数：宽和高放大;一个参数：第二个参数和第一个参数一样;0.5是缩小
	 ​	         优势：可以改变中心角transform-origin：方位词 方位词

注意:

- ==1.同时使用多个转换，其格式为:transform: translate() rotate() scale() ..等，==
- 2.其顺序会影转换的效果。（先旋转会改变坐标轴方向)
- 3.当我们同时有位移和其他属性的时候，记得要将位移放到最前
- 转换transform我们简单理解就是变形有2D和3D之分我们暂且学了三个分别是位移旋转和缩放
- 2D移动translate(x, y)最大的优势是==不影响其他盒子==，里面参数用%，是相对于自身宽度和高度来计算的可以分开写比如translateX(x)和translateY(y)
- 2D旋转rotate(度数)可以实现旋转元素度数的单位是==deg==
- 2D缩放sacle(x,y)里面参数是数字不跟单位可以是小数最大的优势不影响其他盒子==设置转换中心点transform-origin : x y;==参数可以百分比、像素或者是方位名词
- ==当我们进行综合写法，同时有位移和其他属性的时候，记得要将位移放到最前==

------

### CSS 动画

制作动画分两步

1. 先定义动画

- ==@keyframes 定义动画==
- ==@keyframes 动画名称{ 0%{} 100%{}}==
- ==0%是动画的开始，100%是动画的完成。这样的规则就是动画序列。==
- 在@keyffames中规定某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果。
- 动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数。请用百分比来规定变化发生的时间，或用关键词"from"和"to”，等同于0%和100%.

2. 在使用(调用)动画

- animation-name：动画名称
- animation-duration：持续时间

### 动画属性

*鼠标经过div 让这个div停止动画，鼠标离开就继续动画*/`Ianimation-play-state: paused;`

### 简写

- animation :动画名称--持续时间--运动曲线--何时开始--播放次数--是否反方向--动画起始或者结束的状态;
- animation: name--duration（数字+s）-- timing-function(==linear匀速==  ease慢到快 steps步长) --delay（数字+s）-- iteration-count（ iteration重复的  conut次数 (数字) ==infinite无限==）-- direction（*normal（向前）默认值 reverse （向后） ==alternate 先向前 后向后==alternate-reverse 先向后后向前）--fill-mode（none 无==forwards 最后== backwards 最开始  both都保存）;
- ==常写： animation: name  1.4s  linear   infinite==
- 简写前两个必须写，属性里面不包含animation-play-state
- ==暂停动画: animation-play-state: puased;经常和鼠标经过等其他配合使用==
- ==想要动画走回来，而不是直接跳回来: animation-direction : alternate==
- 盒子动画结束后，停在结束位置: animation-fill-mode : forwards

------

## CSS 3D转换

### 三位坐标

- x轴：水平向右，注意：x右边是正值，左边为负值
- y轴：垂直向下，注意：y下面是正值，y上面为负值
- z轴：垂直屏幕，注意：往外是正值，往里面为负值

### 主要知识

- ==3D位移：translate3d(x,y,z);可以分开写，同2d转换==
- ==3D旋转：rotate3d(x（1）,y（0）,z（0）,deg（45deg）)deg为自定义轴旋转，可以分开写，同2d转换==
- ==rotate3d(1,1,0,45deg)沿着对角线旋转==

### 左手准则 

![nipaste_2022-04-06_09-13-1](D:\web笔记\笔记\web笔记\Snipaste_2022-04-06_09-13-18.png)

![nipaste_2022-04-06_09-15-1](D:\web笔记\笔记\web笔记\Snipaste_2022-04-06_09-15-11.png)

### ==透视：perspective==

用来实现3d效果，透视值越小越大。给父元素添加，位移的Z轴的正值越大物体越大

### 3D呈现

transfrom-style			flat 不开启，preserve-3d 开启



# 移动web

## 视口

- ![66469660143](C:\Users\ADMINI~1\AppData\Local\Temp\1664696601436.png)
- 自然生成

## 二倍图

- pxcook  开发  设计图 选择  2x     防止模糊失真

## 百分比布局

- 宽度自适应 高度固定

## flex布局/弹性布局

- 浏览器提倡 的==布局模型==
- 布局网页更简单、灵活  避免脱标  
- ==父元素添加 display: flex，==
- 宽高不设置    ：  宽度为内容的多少   高度 拉伸（容器高度）

### 组成

- 弹性容器    弹性盒子   主轴    侧轴 / 交叉轴

### 主轴对齐方式

- justify-content                    	
- ![66476545755](C:\Users\ADMINI~1\AppData\Local\Temp\1664765457553.png)

### 侧轴对齐方式

- align-items
  - align-self   控制 在侧轴的对齐方式    设置在子级中
- ![66476552177](C:\Users\ADMINI~1\AppData\Local\Temp\1664765521776.png)

### 伸缩比

- flex：数字（整数）   占用父盒子剩余尺寸的 几份   子级中使用

### 改变主轴方向

- flex-direction: row行   column列
- flex-wrap：wrap 多行排列
- align-content 行对齐方式  与 justify-content 基本相同

## 移动适配

### rem

- rem单位
  - 相对单位
  - rem单位是相对于HTML标签的字号计算结果
  - 1rem = 1HTML字号大小
- 媒体查询
  - ==@media（尺寸）{ html{ font-size：32px}}==
  - ==min-width  从小到大写==  
  - ==max-width  从大到小==
- rem单位尺寸
- 根据视口宽度，设置不同的HTML标签字号
- 书写代码，尺寸是rem单位
  - 2.1 确定设计稿对应的设备的==HTML标签字号==
    - 查看==设计稿宽度== → 确定参考==设备宽度==(视口宽度) → 确定==基准根字号==（1/10视口宽度）
  - 2.2 rem单位的尺寸
    - N * 37.5 = 68 → N = 68 / 37.5
    - rem单位的尺寸 = ==px单位数值 / 基准根字号==

### flexible

- script标签引入flexible.js  框架

## less

- css预处理器 文件为 .less
- 浏览器不识别less代码，网页引入对应的css文件
- 单行注释 //   css不显示         ctrl+/
- 多行注释/**/   会输出到css中      shift+alt+a
- 计算： + -  ： *    除：（100/4） 100./4         转rem ： /37.50  
- 定义变量：@变量名：属性值 
- 使用：css：@变量名
- 导入 less文件： @import "路径"
- 导出css文件： //out："路径"                        json文件     “out”：“路径”         //out：false  禁止导出

### VW/VH

- vw：viewport width        1vw = 1/100视口宽度
- vh：viewport height          1vh = 1/100视口高度
- vw/vh单位尺寸(不能混用)
  - 确定设计稿对应的vw尺寸 （1/100视口宽度）
  - 查看设计稿宽度 → 确定参考设备宽度 (视口宽度) → 确定vw/vh尺寸 （1/100 视口宽度）
  - vw单位的尺寸 = px单位数值 / ( 1/100 视口宽度 )

### boostrap

- 使用 BootStrap框架快速开发响应式网页
- ![66484981122](C:\Users\ADMINI~1\AppData\Local\Temp\1664849811229.png)
- ![66484982442](C:\Users\ADMINI~1\AppData\Local\Temp\1664849824420.png)
- ![66484984986](C:\Users\ADMINI~1\AppData\Local\Temp\1664849849862.png)
- 手册用法：
  - BootStrap预定义了大量类用来美化页面，掌握手册的查找方法是学习全局样式的重点。
  - 网站首页 → BootStrap3中文文档 → 全局CSS样式 → 按分类导航查找目标类
  - ![66484988710](C:\Users\ADMINI~1\AppData\Local\Temp\1664849887102.png)

# javascript

## JavaScript是什么？

- JavaScript：运行在客户端（浏览器）的编程语言，实现人机交互效果
- ​    网页特效  表单验证 数据交互   服务端编程  node.js
- ​      **组成： ECMAScript  webAPIs(DOM  BOM)**
  - ECMAScriptL:规定了js基础语法核心知识
    - DOM 操作文档  
    - BOM 操作浏览器，比如页面弹窗
    - ![65102468012](D:\web笔记\笔记\web笔记\1651024680129.png)

## 书写位置： 内联 内部 外部

### 内部：

- ​                  规范：**script****标签写在`</body>`****上面**
- ​                  拓展： alert(‘你好，js’) 页面弹出警告对话框
- ​                  我们将`< script>` 放在HTML文件的底部附近的原因是浏览器会按照代码在文件中的顺序加载 HTML。
- 如果先加载的 JavaScript 期望修改其下方的 HTML，那么它可能由于 HTML 尚未被加载而失效。
- 因此，将 JavaScript 代码放在 HTML页面的底部附近通常是最好的策略。

### 外部：

- ​	代码写在以.js结尾的文件里   引入方式  `<script src="“></script>`
- ​             1. script标签中间无需写代码，否则会被忽略！
- ​             2. 外部JavaScript会使代码更加有序，更易于复用，
- ​           且没有了脚本的混合，HTML 也会更加易读，因此这是个好的习惯。

### 内联：

​	代码写在标签内部  `< button onclick="alert('你好js')">< /button>`

```html
<!-- 内联 -->
    <button onclick="alert('月薪过万')">点击我</button>
    <!-- 内部js -->
    <script>
        // alert('你好， js')
    </script>
    <!-- 外部js -->
    <script src="./my.js">
        alert(11)
    </script>
```

## 注释

- ​	JavaScript 注释有那两种方式？单行注释 //  	多行注释 /* */ 
  ​	JavaScript 结束符注意点  结束符是？                 分号 ；
   ​	结束符可以省略吗？ 因为 js中换行符（回车）会被识别成结束符    但为了风格统一，要写每句都写，要么每句都不写

## 输入输出语句

- 输入： prompt()
- 输出：  alert()     输出的内容为标签 想body输出内容
- ​            document.write() 页面弹出警告框
- ​            console.log()  控制太语法  程序员调试使用

## 字面量

- 字面量（literal）是在计算机中描述 事/物
- ​       如： [] 数组字面量 {} 对象字面量   100 数字字面量

## 变量

- 变量：装数据的容器	   
  声明变量有两部分构成：声明关键字、变量名（标识）	Let 变量名/标识符
- let 不允许多次声明一个变量。

### 能够说出变量的本质是什么

- ​	内存：计算机中存储数据的地方，相当于一个空间

  ​	变量：是程序在内存中申请的一块用来存放数据的小空间

### 规则：

1. 不能用关键字
2. 只能用下划线、字母、数字、$组成，且数字不能开头
3. 字母严格区分大小写，如 Age 和 age 是不同的变量

### 规范：

1. 起名要有意义
2. 遵守小驼峰命名法
3. 第一个单词首字母小写，后面每个单词首字母大写。例：userName

### 三种变量

全局变量  js标签内 局部变量  函数内   块级变量 {}   

​	采取就近原则的方式来查找变量最终的值

## 数组

### 声明: let 数组名 = []

数组是按顺序保存，所以每个数据都有自己的编号

1. 计算机中的编号从0开始
2. 在数组中，数据的编号也叫索引或下标
3. 数组可以存储任意类型的数据

### 取值 数组名[下标]

 计算机程序可以处理大量的数据，为什么要给数据分类？

- 更加充分和高效的利用内存
- 也更加方便程序员的使用数据

### 数组操作

- 数组长度  a.length 
- ==查  数组[下标]==
- ==增  arr.push(新增的内容)   arr.unshift(新增的内容)==
- ==改  数组[下标] = 新值==
- ==删  arr.pop()  arr.shift()   arr.splice(操作的下标,删除的个数)==
- ==数组.push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度 (重点)==
- ==数组. pop() 方法从数组中删除最后一个元素，并返回该元素的值==
- ==数组. shift() 方法从数组中删除第一个元素，并返回该元素的值==
- ==数组. splice(起始位置，删除几个元素) 方法  删除指定元素==

```html
<script>
        let arr = ['pink', 'hotpink', 'deeppink']
        // 访问 / 查询
        console.log(arr[0])
        // 2. 改
        arr[0] = 'lightpink'
	//增 push   unshift
 	arr.push('blue', 'skyblue')
	arr.unshift('pink', 'blue')
	//删  pop   splice
   	    arr.pop()	 // 删除最后一个元素
	arr.splice(1, 1)  从下标为1起  删一个

    </script>
```

## **基本数据类型**

number 数字型    string 字符串型    boolean 布尔型   undefined 未定义型   null 空类型    

## 引用数据类型

object 对象       function 函数     array 数组

## 注意：

- JavaScript 中的正数、负数、小数等 统一称为 数字类型。
- JS 是弱数据类型，变量到底属于那种类型，只有赋值之后，我们才能确认
- Java是强数据类型 例如 int a = 3 必须是整数

## **字符串**

- 通过单引号（ '）、双引号（ ""）或反引号包裹的数据都叫字符串，单引号和双引号没有本质上的区别，
- ==推荐使用单引号。外双内单，或者外单内双==
- 拼接 +号    ==在反引号前前提下使用变量${变量名} 不需要拼接号==

```html
<script>
    	//+ 号拼接
     	let uname = prompt('请输入您的名字')
        document.write('我的名字是：' + uname)	
        //反引号 字符串
        let age = 81
        document.write(`我今年${age - 20}岁了`)
        document.write(`
        <div>123</div>
        <p>abc</p>
        `)
    </script>
```

 布尔数据类型有几个值？true 和 false

什么时候出现未定义数据类型？以后开发场景是？定义变量未给值 如果检测变量是undefined就说明没有值传递

null是什么类型？ 开发场景是？ 空类型 如果一个变量里面确定存放的是对象，如果还没准备好对象，可以放个null

控制台语句经常用于测试结果来使用。数字型和布尔型颜色为蓝色，字符串和undefined颜色为灰色   ==通过 typeof检测数据类型==

## **转换数据**

### Number(数据)

- 如果字符串内容里有非数字，转换失败时结果为NaN（Not a Number）即不是一个数字
- NaN也是number类型的数据，代表非数字

### parseInt(数据)

​	只保留整数

### parseFloat(数据)

​	可以保留小数

### 转换为字符型:

​	 String(数据)       变量.toString(进制)

 

## **运算符**

1. 算术运算符：+ - * / %   优先级 先乘除后加减，有括号先算括号里面的

2. 赋值运算符：+= -= *= /= %=  = 将等号右边的值赋予给左边,要求左边必须是一个容器变量

3. 一元运算符  --  ++ 、二元运算符 、三元运算符   ？：

4. 比较运算符：> < >= <=  ==  ===   != =    只会得到true或false 

   注意：NaN不等于任何值，包括它本身  

     		= 和 == 和 === 怎么区别？ 
    ​		= 是赋值      == 是判断 只要求值相等，不要求数据类型一样即可返回true
     		=== 是全等 要求值和数据类型都一样返回的才是true
    ​		开发中，请使用 ===

5. 逻辑运算符：1. 左边为假短路 &&与 一假则假   2. 左边为真则  短路 ||或    一真则真   3.！非 真变假  假变真真

![65102692610](D:\web笔记\笔记\web笔记\1651026926102.png)



## 分支语句

- if分支语句  三元运算符 条件 ？满足条件代码 ：不满足代码   switch 语句
- switch case语句一般用于等值判断,不适合于区间判断
- switch case一般需要配合break关键字使用 没有break会造成case穿透
- continue：结束本次循环，继续下次循环    break：跳出所在的循环

```html
<script>
     //if语句
   	  if () { } else if () {} else()
    //switch
    switch (2) {
            case 1:
                alert(1)
                break
            case 2:
                alert(2)
                break
            case 3:
                alert(3)
                break
            default:
                alert('没有数据')
        }
    
        // 1. 用户输入数字
        let num = prompt('请您输入一个数字')
        // 2. 判断条件是 小于 10  则数字前面 + '0'   01 否则 不补
        // let t = num >= 10 ? num : '0' + num
        let t = num < 10 ? '0' + num : num
        document.write(t)
    </script>
```

## 循环语句

for循环和while循环有什么区别呢：

1. 当如果明确了循环的次数的时候推荐使用for循环
2. 当不明确循环的次数的时候推荐使用while循环 
3. ​       外层循环一次，内层循环全部

```html
<script>
        // 循环必须有3要素
        // 变量的起始值
        let i = 1
        // 终止条件
        while (i <= 3) {
            document.write(`月薪过万 <br>`)
            // 变量变化
            i++
        }
   //for循环	
    for (let i = 1; i <= 10; i++) {
            document.write('月薪过万 <br>')
        }
      // 记忆单词案例
        // 分析
        // 1. 外面的循环 记录第n天 
        for (let i = 1; i < 4; i++) {
            document.write(`第${i}天 <br>`)
            // 2. 里层的循环记录 几个单词
            for (let j = 1; j < 6; j++) {
                document.write(`记住第${j}个单词<br>`)
            }
        }
    
    </script>

```

## 函数

### 关键词 function

- 格式  function 函数名（）{ }   调用 函数名()
- 形参：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）
- 实参：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）
  ​		尽量保持形参和实参个数一致

### return关键词

- return后面不接数据或者函数内不写return，函数的返回值是undefined
  ​	 return能立即结束当前函数, 所以 return 后面的数据不要换行写

### 立即执行函数

- 有什么作用？	防止变量污染
- 立即执行函数需要调用吗？ 无需调用，立即执行，其实本质已经调用了
- 有什么注意事项呢？ 多个立即执行函数之间用分号隔开

```html
 <script> 
        //函数
        function getMax(x, y) {
   	//返回值
            return x > y ? x : y
        }
        // 实参也可以放变量  传参
        let max = getMax(num1, num2)
         // 函数表达式
        let fn = function () {
            console.log(111)
        }
        fn()
     //立即执行函数
       (function () {
            console.log(111)
        })();
    </script>
```

## 对象

- 声明对象：let 对象名{ 方法 属性}
- 方法名：function(){}
- 属性和值用 ：冒号 隔开
- 多个属性用 ，逗号隔开
- 访问属性    对象.属性名  调用方法 对象.方法名()
- 改：对象.属性 = 值       对象.方法 = function() {}
- 增： 对象名.新属性名 = 新值
- 删： delete 对象名.属性名
- 对象如果有这个属性相当于重新赋值   对象如果没有这个属性相当于动态添加一个属性

遍历对象

- for  in  循环语句
- 语法
- for (let k in 对象名) {}  重点
- k 变量   k  或者  key    value  

```html
<script> 
        // 声明人对象
        let person = {
            uname: '刘德华',
            age: 18,
            sex: '男',
            // 方法名：function(){}
            sayHi: function () {
                console.log('hi~~~')
            },
            mtv: function (s) {
                console.log(s)
            }
        }
        // console.log(uname)
        // 1. 访问属性  得到值   对象.属性名
        console.log(person.uname)
        console.log(person.age)
        // 2. 访问属性  得到值   对象['属性名']
        console.log(person['sex'])
        // 调用方法 对象.方法名()
        person.sayHi()
        person.mtv('无间道')
	//改
        person.uname = '马云'
        person.sayHi =function () {
                console.log('hhh~~~')
            }
        //删  
        delete 对象名.属性名
        // document.write()
  
//遍历对象

        let obj = {
            uname: '小明',
            age: 18,
            sex: '男'
        }
        // for  in  循环语句
        // 语法
        // for (let k in 对象名) {}  重点
        // k 变量   k  或者  key    value  
        for (let k in obj) {
            console.log(k)  // 属性名
            // console.log(obj.k)  // obj.k 意思是 obj里面的k属性
            // console.log(obj['k'])
            console.log(obj[k])  // 属性值 

            // 为什么这么写？
            // k  ===  'uname'   === 'age'  === 'sex'
            // // obj.k
            // // obj['uname']
            // obj['sex']  === 18
        }
    </script>
```

## 内置数学对象

- random：生成0-1之间的随机数（包含0不包括1）
- ceil：向上取整   floor：向下取整   max：找最大数
- min：找最小数  pow：幂运算     abs：绝对值

```html
<script> 
     console.log(Math.PI)  //  圆周率    π  
        console.log(Math.random())  //  随机数  随机抽奖  随机点名
        // 返回的是小数  但是能得到 0  得不到 1
        // 向上取整  返回的整数
        console.log(Math.ceil(1.1))  // ceil  2
        console.log(Math.ceil(1.5))  // ceil  2
        console.log(Math.ceil(1.9))  // ceil  2
        // 向下取整  返回的整数  floor  
        console.log(Math.floor(1.1))  // floor  1
        console.log(Math.floor(1.5))  // floor  1
        console.log(Math.floor(1.9))  // floor  1
        console.log('-------------------------------')
        // round 就近取整( .5往大取证)  返回的整数   
        console.log(Math.round(1.1))  // round  1
        console.log(Math.round(1.5))  // round  2
        console.log(Math.round(1.9))  // round  2
        console.log('-------------------------------')
        console.log(Math.round(-1.1))  // round  -1
        console.log(Math.round(-1.5))  // round  -1
        console.log(Math.round(-1.9))  // round  -2
function getRandom(min, max) {
    //如何生成N-M之间的随机数
	//0-6   6+1  最大值（6）减 最小值（0）+1 +最小值（0）
	//1-6   5+1+1 最大值（6）减 最小值（1）+1 +最小值（1）
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
    
      </script>
```

# Web APIs

DOM :==文本对象模型(操作网页内容)，开发网页内容特效和实现用户交互==

## DOM树

- ​         含义：==将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树==
  ​	 作用：==文档树直观的体现了标签与标签之间的关系==

![1](D:\web笔记\笔记\web笔记\1.png)

## DOM对象

- 浏览器根据html标签生成的 JS对象（DOM对象）
- DOM的核心就是把内容当对象来处理                          

document 对象 document.write() 是用来访问和操作网页内容的

## 获取对象

1. ==document.querySelector('类名')   获取一个第一个==
2. ==document.querySelectorAll('类名')  获取多个  伪数组 通过遍历的方式，获得里面的每一个dom对象（元素）==

## 修该元素

1. 修改标签（元素）内容  box是对象   innerText 属性 ==innerHTML解析标签==

```html
  <script>
        // 1. 获取标签(元素)
        let box = document.querySelector('div')
        // 2. 修改标签（元素）内容  box是对象   innerText 属性
        // 对象.属性  = 值   不识别标签
        // box.innerText = '有点意思~'
        // box.innerText = '<strong>有点意思~</strong>'
        // 3. innerHTML解析标签
        box.innerHTML = '<strong>有点意思~</strong>
    	  box.style.backgroundColor = 'hotpink'
         box.className = 'one active'
      	// add是个方法 添加  追加
        box.classList.add('active')
        // remove() 移除 类
        box.classList.remove('one')
        // 切换类
        box.classList.toggle('one')
      
      input.value = '小米手机'
        input.type = 'password'
    </script>
```

1. ==修改元素属性   对象.属性 = 值==
2. ==修改元素样式属性    对象.style.样式属性 = '值'==
   - 注意：
     1. 修改样式通过style属性引出
     2. ==如果属性有-连接符，需要转换为小驼峰命名法==
     3. 赋值的时候，需要的时候不要忘记加css单位
3. 操作类  className 和 classList 
   - className 会覆盖原有的类    
   - classList   add 添加类   remove 移除类   toggle 切换类（有 删除   无添加）
4. 修改表单元素  按钮关闭 disabled、 复选框默认选择 checked、 下拉默认选择 selected 
   - // disabled 不可用   =  false  这样可以让按钮启用
   - 其他两个 true 选中  false 未选

## 间歇函数（定时器）

```html
 <script>
        function show() {
            console.log('月薪过2万')
        }
       //创建定时器  setInterval(函数名，毫秒数)
     let timer = setInterval(show, 1000)        
        // 清除定时器
        clearInterval(timer)
    </script>
```

## 事件监听

语法   事件源.addEventListener('事件', 事件处理函数 ) 第三个值 是否捕获了解

1. 事件：click 单击  dblclick双击  mouseenter 鼠标经过   mouseleave鼠标离开       foucus/blur 获得失去焦点    scroll滚动事件  resize窗口尺寸事件  Keydown 键盘按下触发     Keyup 键盘抬起触发

2. 事件监听三要素是什么？

   ​	事件源 (谁被触发了)

   ​	事件 (用什么方式触发，点击还是鼠标经过等)

   ​	事件处理程序 （要做什么事情）

```html
<script>
        //1. 获取按钮元素
        let btn = document.querySelector('button')
        //2. 事件监听   绑定事件 注册事件 事件侦听
        // 事件源.addEventListener('事件', 事件处理函数)
        btn.addEventListener('click', function () {
            alert('月薪过万')
        })
    </script>
```

## 高阶函数

### 函数表达式

​	let fn = function(){}  函数表达式 为高级函数的一种形式

### 回调函数

​	function fn(){} setIntreval(fn,1000)  此时fn为回调函数 回头去调用的函数

### 环境对象

​	变量this：他就是个对象【谁调用， this就是谁】是判断this指向的粗略规则

​	`btn.addEventListener(‘click’,function(){console.log(this)})` this指向btn

## 思想

排他思想  

1. 干掉所有人    使用for循环
2. 复活他自己    通过this或者下标找到自己或者对应的元素

## DOM节点

- DOM树里每一个内容都称之为节点
- 元素节点  如div标签
- 属性节点  如class属性
- 文本节点  如 文字

### 创建节点

​	创建节点：document.createElement(’标签名‘)

### 查找结点

- 父节点：子元素.parentNode       返回最近一级的父节点 找不到返回为null
- 子节点：父元素.children   仅获得所有元素节点  返回的还是一个伪数组
- 兄弟节点：nextElementSibling 下一个previousElementSibling 上一个

### 删除节点

- 删除节点：父元素.removeChlid(要删除的元素)   如不存在父子关系则删除不成功 
- 删除节点和隐藏节点（display:none）有区别的： 隐藏节点还是存在的，但是删除，则从html中删除节点

### 追加节点：

- 插入到父元素的最后一个子元素          父元素.appendChild(要插入的元素)
- 插入到父元素的某个子元素前面          父元素.insertBefore（要插入的元素，在哪个元素前面）
- 注意：获取元素 类名要加点   追加类 类名不加点 

### 克隆节点：

- 元素.cloneNode(布尔值)   cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值
- 若为true，则代表克隆时会包含后代节点一起克隆
- 若为false，则代表克隆时不包含后代节点  默认为false

```html
<body>
    <ul>
        <li>我是大毛</li>
        <li>我是二毛</li>
    </ul>
    <script>
        //获取节点
        let ul = document.querySelector('ul')
            // 1. 创建新的标签节点
        let li = document.createElement('li')
            // 删除节点
        ul.removeChild(ul.children[0])
        li.innerHTML = '我是xiao ming'
            // 2. 追加节点  父元素.appendChild(子元素) 后面追加
        ul.appendChild(li)
            // 3. 追加节点  父元素.insertBefore(子元素， 放到那个元素的前面)   
        ul.insertBefore(li, ul.children[0])
            //4.将克隆的li节点  追加到ul第一个孩子前面
        ul.insertBefore(ul.cloneNode(li), ul.children[0])
    </script>
</body>

```

## 时间对象

- 获取当前时间let date = new Date()
- 获取指定时间let date = new Date(‘1949-10-01’)
- 本地时间：new Date().toLocaleString()

![nipaste_2022-04-13_20-02-2](D:\web笔记\笔记\web笔记\Snipaste_2022-04-13_20-02-25.png)

### 什么是时间戳

 是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式

### 三种方式获取时间戳

1. 使用 getTime() 方法  let date = new Date()console.log(date.getTime())
2. 简写 +new Date()   console.log(+newDate())
3. 使用 Date().now()  console.log(Date().now())
4. 但是只能得到当前的时间戳， 而前面两种可以返回指定时间的时间戳

### 注意：

- 通过时间戳得到是毫秒，需要转换为秒在计算
  毫秒数 /1000=秒数
- 转换公式：
  d = parseInt(总秒数/ 60/60 /24); // 计算天数
  h = parseInt(总秒数/ 60/60 %24) // 计算小时
   h = h < 10 ? '0' + h : h
  m = parseInt(总秒数 /60 %60 ); // 计算分数
  m = m < 10 ? '0' + m : m
   s = parseInt(总秒数%60); // 计算当前秒数
    s = s < 10 ? '0' + s : s

```html
  <script>
    let hour = document.querySelector('#hour')
    let minutes = document.querySelector('#minutes')
    let scond = document.querySelector('#scond')
    time()
    setInterval(time, 1000)
    function time() {
      // 1. 得到现在的时间戳
      let now = +new Date()
      // 2. 得到指定时间的时间戳
      let last = +new Date('2021-8-29 18:30:00')
      // 3. （计算剩余的毫秒数） / 1000 === 剩余的秒数
      let count = (last - now) / 1000
      // console.log(count)
      // 4. 转换为时分秒
      // h = parseInt(总秒数 / 60 / 60 % 24)   //   计算小时
      let h = parseInt(count / 60 / 60 % 24)
      h = h < 10 ? '0' + h : h
      // m = parseInt(总秒数 / 60 % 60);     //   计算分数
      let m = parseInt(count / 60 % 60)
      m = m < 10 ? '0' + m : m
      // s = parseInt(总秒数 % 60); //   计算当前秒数
      let s = parseInt(count % 60);
      s = s < 10 ? '0' + s : s
      // console.log(h, m, s)
      hour.innerHTML = h
      minutes.innerHTML = m
      scond.innerHTML = s
    }

  </script>
```

## 事件对象

事件对象是对象里有事件触发时的相关信息

在事件绑定的回调函数的第一个参数就是事件对象 	一般命名为event、ev、e

e的 部分常用属性

- type    获取当前的事件类型
- clientX/clientY 获取光标相对于浏览器可见窗口左上角的位置
- offsetX/offsetY获取光标相对于当前DOM元素左上角的位置
- key用户按下的键盘键的值现在不提倡使用keyCode
- 常用   e.target 真正触发事件的元素   e.target.tagName  事件对象的触发元素的名字 

## 事件流

### 捕获阶段  从父到子

### 冒泡阶段  从子到父  事件冒泡是默认存在的

- 当一个元素触发事件后，会依次向上调用所有父级元素的同名事件

- 说明：
  addEventListener第三个参数传入true代表是捕获阶段触发（很少使用）
  若传入false代表冒泡阶段触发，默认就是false
  若是用 L0 事件监听，则只有冒泡阶段，没有捕获

- 阻止事件流动  事件对象.stopPropagation()  不光在冒泡阶段有效，捕获阶段也有效

- 鼠标经过事件：
  mouseover 和 mouseout 会有冒泡效果

   mouseenter 和 mouseleave 没有冒泡效果(推荐)

- 阻止默认行为，比如链接点击不跳转，表单域的跳转   e.prevenDefault()

### 两种注册事件的区别：

 传统on注册（L0）

- 同一个对象,后面注册的事件会覆盖前面注册(同一个事件)
- 直接使用null覆盖偶就可以实现事件的解绑
- 都是冒泡阶段执行的

事件监听注册（L2）

- 语法: addEventListener(事件类型, 事件处理函数, 是否使用捕获)
- 后面注册的事件不会覆盖前面注册的事件(同一个事件)
- 可以通过第三个参数去确定是在冒泡或者捕获阶段执行
- 必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)
- ==匿名函数无法被解绑==

```html
 <script>
        let fa = document.querySelector('.father')
        let son = document.querySelector('.son')
        fa.addEventListener('click', function (e) {
            alert('我是爸爸')
            e.stopPropagation()  //阻止冒泡
        })
        son.addEventListener('click', function (e) {
            alert('我是儿子')
            // 阻止流动 Propagation 传播
            e.stopPropagation()
        })
        document.addEventListener('click', function () {
            alert('我是爷爷')
        })
	 let a = document.querySelector('a')
        a.addEventListener('click', function (e) {
            // 阻止默认行为 方法
            e.preventDefault()
        })		
    </script>
```

### 事件委托

总结：

- 优点：给父级元素加事件（可以提高性能）
- 原理：事件委托其实是利用事件冒泡的特点
- 实现：事件对象.target 可以获得真正触发事件的元素

```html
<body>
    <ul>
        <li>我是第1个小li</li>
        <li>我是第2个小li</li>
        <li>我是第3个小li</li>
        <li>我是第4个小li</li>
        <li>我是第5个小li</li>
    </ul>
    <script>
        // 不要每个小li注册事件了  而是把事件委托给他的爸爸 
        // 事件委托是给父级添加事件 而不是孩子添加事件
        let ul = document.querySelector('ul')
        ul.addEventListener('click', function (e) {
            // 得到当前的元素
            e.target.style.color = 'red'
        })
    </script>
</body>
```

## 滚动事件

- 事件名：scroll   给 window 或 document 添加 scroll 事件

- 事件名：load    给 window 添加 load 事件 不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件

- 事件名：DOMContentLoaded    给 document 添加 DOMContentLoaded 事件

- ```html
  <script>
        let div = document.querySelector('div')
            //页面滚动
        window.addEventListener('scroll', function() {
            console.log(111)
        })
        // 盒子滚动
        div.addEventListener('scroll', function() {
            console.log(111)
        })
      //加载事件
       window.addEventListener('load', function () {
            let div = document.querySelector('div')
            console.log(div)
        })
    </script>
  ```

  ## 元素大小和位置

  scroll家族 

  - ==scrollLeft和scrollTop  获取取元素内容往左、往上滚出去看不到的距离  可以修改==
  - scrollWidth和scrollHeight 获取元素的内容总宽高（不包含滚动条）返回值不带单位
  - ==document.documentElement HTML 文档返回对象为HTML元素==

  offset家族

  - ==offsetLeft和offsetTop 注意是只读属性 获取元素距离自己定位父级元素的左、上距离==
  - offsetWidth和offsetHeight   获取元素的自身宽高、包含元素自身设置的宽高、padding、border

  client家族

  - clientLeft和clientTop 注意是只读属性 获取左边框和上边框宽度
  - ==clientWidth和clientHeight   获取元素的可见部分宽高（不包含边框，滚动条等）==
  - resize 窗口尺寸改变的时候触发事件

```html
     <script>
         //通过 scrollTop  和  offsetTop  显示隐藏
        let sk = document.querySelector('.sk')
        let header = document.querySelector('.header')
        // 1. 页面滚动事件
        window.addEventListener('scroll', function () {
            // 2. 要检测滚动的距离 >= 秒杀模块的offsetTop 则滑入   sk.offsetTop 是 秒杀模块距离上边的距离
            if (document.documentElement.scrollTop >= sk.offsetTop) {
                header.style.top = '0'
            } else {
                header.style.top = '-80px'
            }
        })
    </script>
```

## BOM操作浏览器

### window对象

- window对象 是==一个全局对象==，也可以说是JavaScript中的顶级对象
- 像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。
- 所有通过var/let 定义在全局作用域中的变量、函数都会变成window对象的属性和方法
- window对象下的属性和方法调用的时候可以省略window

```html
  <script>
        window.document.querySelector('.box')
         window.setInterval()
    	   function fun() {
	         }
        window.fun()
        addEventListener('scroll', function () {
            console.log(111)
        })
        window.alert()
        window.prompt()
        console.log(window)
    </script>
```

### 延时器和定时器

|              延时器器setTimeout              |                  定时器 setinterval                  |
| :------------------------------------------: | :--------------------------------------------------: |
|       延迟一段时间之后才执行对应的代码       |                每隔一段时间就执行一次                |
| let timerId = setTimeout(回调函数, 延迟时间) | let timerId =  setintervalt(回调函数, 多久执行一次 ) |
|       清除延时器clearTimeout(timerId)        |           清除延时器clearinterval(timerId)           |
|              延时函数: 执行一次              |     间歇函数:每隔一段时间就执行一次,除非手动清除     |

```html
<button>解除延时器</button>
    <script>
        let btn = document.querySelector('button')
        let timer = setTimeout(function () {
            console.log(111)
        }, 3000)
        // 仅仅执行一次
        btn.addEventListener('click', function () {
            clearTimeout(timer)
        })
    </script>
 <script>   
     //定时器
        function show() {
            console.log('月薪过2万')
        }
       //创建定时器  setInterval(函数名，毫秒数)
     let timer = setInterval(show, 1000)        
        // 清除定时器
        clearInterval(timer)
    </script>
```

## location对象	主要负责网页的地址栏

- location.href   		跳转页面
- location.reload()      刷新
- locaction.search      ?后面的内容
  locaction.hash		#后面的内容

```html
   <a href="#one">第一个</a>
    <a href="#two">第二个</a>
    <script>
   	location.href = 'http://www.itcast.cn'  跳转链接
        locaction.search        //?username=w       表单为post 无法使用
        location.hash      // #two one
        location.reload()   //相当于浏览器刷新按钮
    </script>
```

## navigator对象	主要用来获取浏览器的信息

​	navigator.userAgent 在这个字段里面判断是否有Mobile字段.  如果有表示是手机,反之则表示PC		

```html
  <script>
        // 检测 userAgent（浏览器信息）
        !(function () {
            const userAgent = navigator.userAgent
            // 验证是否为Android或iPhone
            const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
            const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
            // 如果是Android或iPhone，则跳转至移动站点
            if (android || iphone) {
                location.href = 'http://m.itcast.cn'
            }
        })()

    </script>
```

## histroy对象	管理历史记录

​	history.forward()  前进 
	history.back()   后退
	history.go(1/-1)   1前进  -1 后退

```html
   <button class="forward">前进</button>
    <button class="back">后退</button>
    <script>
        let qianjin = document.querySelector('.forward')
        let houtui = document.querySelector('.back')
        qianjin.addEventListener('click', function () {
            // history.forward()
            history.go(1)
        })
        houtui.addEventListener('click', function () {
            // history.back()
            history.go(-1)
        })
    </script>
```

## js执行机制

- js 把任务分为 同步任务和异步任务
  同步任务
  		let num = 10
  	异步任务
  		定时器    事件 click		load 加载		ajax
- 执行执行栈（同步任务）里面的任务，执行完毕再去任务队列（异步任务）里面看看是否有任务，如果有，则得到放入执行栈中执行，再次循环

## swiper 插件

​	插件: 就是别人写好的一些代码,我们只需要复制对应的代码,就可以直接实现对应的效果https://www.swiper.com.cn/ 

## 本地存储

- 作用: 可以将数据永久存储在本地(用户的电脑), 除非手动删除
  语法		存	localStorage.setItem('键', '值')
  		取	localStorage.getItem('键')
  		删	ocalStorage.removeItem('键')
- 存储复杂数据类型：本地只能存储字符串,无法存储复杂数据类型.需要将复杂数据类型转换成JSON字符串,在存储到本地
  转换成JSON字符串的语法			
  - JSON.stringify(复杂数据类型)		将复杂数据转换成JSON字符串		
    JSON.parse(JSON字符串)		将JSON字符串转换成对象

```html
 <script>
      let obj = {
            uname: '刘德华',
            age: 17,
            address: '黑马程序员'
        }
      localStorage.setItem('obj', JSON.stringify(obj))
  	JSON.parse(localStorage.getItem('obj'))
```

## 自定义属性

- 固有属性: 标签天生自带的属性 比如class id title等, 可以直接使用点语法操作
- 自定义属性: 由程序员自己添加的属性,在DOM对象中找不到, 无法使用点语法操作,必须使用专门的API
  ​		getAttribute('属性名') // 获取自定义属性
   ​		setAttribute('属性名', '属性值') // 设置自定义属性
   ​		removeAttribute('属性名') // 删除自定义属性
- 规范一下  为  data-自定义属性
  传统的自定义属性没有专门的定义规则,开发者随意定值,不够规范,所以在html5中推出来了专门的data-自定义属性	
- 在标签上一律以data-开头  在DOM对象上一律以dataset对象方式获取

```html
<body>
    <div class="box" data-index="0" data-name="andy"></div>
    <script>
        // 设置自定义属性
        let box = document.querySelector('.box')
        // box.setAttribute('myid', 10)
        // console.log(box.getAttribute('myid'))
        console.log(box.dataset)
        console.log(box.dataset.index)
    </script>
</body>
```

# jQuery

jQuery

（快速方便查询使用功能   j 就是 JavaScript；  Query 查询；意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。）

- 引入方式：同js   script src

- 入口函数：1.$(document).ready(function(){代码}])  

  1. ==$(function(){代码})==推荐使用

  2. ```javascript
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

  ```javascript
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

- ```javascript
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

- ```javascript
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

  - slideUp(毫秒数,fn回调函数)

- 切换滑动效果  slideToggle（）

  - slideToggle(毫秒数,fn回调函数)

- ```javascript
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

  - ```javascript
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

- ```javascript
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

### 4.1 jquery属性操作

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
  - letft top  获取距离文档左侧/顶部的距离  offset().top
  - 可以黄色至偏移  offset({top:10,left:30})
- position()  返回被选元素相对于带有定位的父级偏移坐标   父级没有定位  以文档为准
  - letft top 获取距离定位父级 左侧/顶部 的距离  position().top
  - 只能读取
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

​	==mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll==

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

- // 1. 如果$ 符号冲突 我们就使用 jQuery

- // 2. 让jquery 释放对$ 控制权 让用自己决定

  - var suibian = jQuery.noConflict();

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


## 2.模板引擎

- form表单
- ![](D:\web笔记\笔记\web笔记\12.png)
- method 
  - GET：通过URL地址  (一般不用)
  - POST：方式适合用来提交大量的、复杂的、或包含文件上传的数据。
- enctype
  - 文件上传的操作时，必须将enctype 的值设置为multipart/form-data

### 2.1监听表单提交事件

- submit()方法


- ```javascript
  $('#form1').submit(function(e) {
     alert('监听到了表单的提交事件')
  })

  $('#form1').on('submit', function(e) {
     alert('监听到了表单的提交事件')
  })

  ```

### 2.2 阻止表单默认提交行为

- event.preventDefault() 函数，来阻止表单的提交和页面的跳转

- ```javascript
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

- ```javascript
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

- ```javascript
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

- ```javascript
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

  - ```javascript
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
  - 把数据对象转换为字符串的过程，叫做序列化，例如：调用 JSON.stringify()函数的操作，叫做 JSON 序列化。
  - 把字符串转换为数据对象的过程，叫做反序列化，例如：调用JSON.parse()函数的操，叫做JSON反序列化。

### 上传文件

- ```javascript
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

- ```javascript
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

- ```javascript
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

- 解决	跨域数据访问的问题     支持JSONP	

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

- 用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询的请求，这样可以有效减少请求次数，节约请求资源；

```javascript
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


- ```javascript
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
- ​

### 响应消息

- 响应消息就是服务器响应给客户端的消息内容，也叫作响应报文。
- ​
- 状态行
  - 状态行由 HTTP协议版本、状态码和状态码的描述文本3 个部分组成，他们之间使用空格隔开;
  - 响应头部用来描述服务器的基本信息。响应头部由多行 键/值对 组成，每行的键和值之间用英文的冒号分隔。
  - ​
  - 响应消息中的空行，用来分隔响应头部与响应体。
  - 响应体中存放的，是服务器响应给客户端的资源内容。

### 请求方法

- 用来表明要对服务器上的资源执行的操作。最常用的请求方法是 GET 和 POST。

### 响应状态码

![](D:\web笔记\笔记\web笔记\13.png)

![](D:\web笔记\笔记\web笔记\14.png)

![](D:\web笔记\笔记\web笔记\15.png)

![](D:\web笔记\笔记\web笔记\16.png)

# 面向对象编程 和ES6

- 两大编程思想   面向过程  面向对象（多人）
- 面向对象编程 oop    封装 继承 多态  

## 1、ES6中的类和对象

### 1.1对象

- 对象是有属性和方法组成   一切皆为对象
  - 属性：事物的特征
  - 方法：事物的行为

### 1.2 类class

- 类抽象了对象的公共部分，它泛指某一大类（class） 对象特指某一个，通过类实例化一个具体的对象   

- 创建类

  - class  name{  }

- 创建实例化对象   类必须使用 new 实例化对象

  - let  xx=new name（）

- 构造方法  需要   constructor（）方法

- 类添加方法      名字(){}

- 调用   创建实例化对象    xx.方法名()

- ```javascript
  class name {  //创建了一个 name 类
     let name,   age
      constructor(name,age,){
          this.name=name
          this.age=name
      }
      say(){
          consle.log("我会说话")
      }
  }       
  let  ldh=new name("刘德华"，18)
  ldh.say()
  ```

  ​

### 类的继承

- 关键字  extends             Son  extends  Father

- 关键字 super 

  - super关键字 用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数。

- ​

- ```javascript
  class Father {
       constructor(name,age,){
          this.name=name
          this.age=name
      }
       say() {
           return '我是爸爸';
       }
  }
  class Son extends Father { // 这样子类就继承了父类的属性和方法
      super(name,age)
       say() {
            // super.say()  super 调用父类的方法
            return super.say() + '的儿子';
       }
  }
  var damao = new Son();
  console.log(damao.say());  
  ```

- ​

## 构造函数     

- 构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
- 在 JS 中，使用构造函数时要注意以下两点：
  - 1.构造函数用于创建某一类对象，==其首字母要大写==
  - 2.构造函数要和 ==new一起使用==才有意义
- new 在执行时会做四件事情：
  - ①在内存中创建一个==新的空对象。==
  - ②==让 this 指向这个新的对象。==
  - ③执行构造函数里面的代码，给这个新对象==添加属性和方法。==
  - ④返回这个新对象（==所以构造函数里面不需要 return ）。==

### 构造函数 （静态成员和实例成员）

- 静态成员：在构造函数本上添加的成员称为静态成员，==只能由构造函数本身来访问==
- 实例成员：在构造函数内部创建的对象成员称为实例成员，==只由实例化的对象来访问==

### 构造函数原型

- 构造函数通过原型分配的函数是所有对象所共享的
- JavaScript 规定，每一个构造函数都有一个prototype 属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。
- 原型对象里面放的是方法,  这个方法里面的this 指向的是这个方法的调用者, 也就是这个实例对象
- 数组和字符串内置对象不能给原型对象覆盖操作 Array.prototype = {} ，只能是 Array.prototype.xxx =function(){} 的方式。

### 继承

- 我们可以通过构造函数+原型对象模拟实现继承，被称为组合继承。

### 2.1call()

- 调用这个函数, 并且修改函数运行时的 this 指向   fn.call(this，其他参数)

- 通过 call() 把父类型的 this 指向子类型的 this ，这样就可以实现子类型继承父类型的属性。   

- ```javascript
      // 父类
      function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
      }
      // 子类
      function Student(name, age, sex, score) {
        Person.call(this, name, age, sex);  // 此时父类的 this 指向子类的 this，同时调用这个函数
        this.score = score;
      }
      var s1 = new Student('zs', 18, '男', 100);
      console.dir(s1); 
  ```

## 函数

- 调用方式   和 this指向

  ![](D:\web笔记\笔记\web笔记\19.png)![](D:\web笔记\笔记\web笔记\18.png)

- 改变this指向 三种方法：call方法     apply方法   . bind 方法

  - 相同点: 都可以改变函数内部的this指向.
  - 区别点:           
    - 1.call 和 apply  会调用函数, 并且改变函数内部this指向.、
    - 2.call 和 apply传递的参数不一样,call 传递参数 aru1,aru2..形式  apply 必须数组形式[arg]
    - 3.bind  不会调用函数, 可以改变函数内部this指向.
  - 主要应用场景:  
    - 1.call 经常做继承. 
    - 2.apply经常跟数组有关系.  比如借助于数学对象实现数组最大值最小值
    - 3.bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向. 

### S5的严格模式

- 在所有语句之前放一个特定语句“use  strict”;（或‘use strict’;）

### 闭包

- 闭包（closure）指有权访问另一个函数作用域中变量的函数。 
  - 作用：延伸变量的作用范围
  - 简单理解就是 ，一个作用域可以访问另外一个函数内部的局部变量

### 递归

- 一个函数在内部可以调用其本身    必须要加退出条件 return。

### 浅拷贝和深拷贝

- 1.浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用.
- 2.深拷贝拷贝多层, 每一级别的数据都会拷贝.
- 3.Object.assign(target, ...sources)    es6 新增方法可以浅拷贝

## 正则表达式

- var  变量名 = /表达式/
- 表达式的变量名.test（str）         返回 true  / false
- ^谁开始  \$ 谁结束/[abc]/  包含a/b/c  [a-z] 范围符
- [\^a]取反    边界符在外边
- \*0/ 多次  +一次 /多次     ？ 0/一次  {n} n次 {n，}n次 /更多次  {n，m} n-m次![
- ![](D:\web笔记\笔记\web笔记\20.png)
- replace替换  
  - 1.第一个参数:   被替换的字符串 或者  正则表达式
  - 2.第二个参数:   替换为的字符串
  - 3.返回值是一个替换完毕的新字符串
- switch(也称为修饰符) 按照什么样的模式来匹配. 有三种值：
  - lg：全局匹配 
  - li：忽略大小写 
  - lgi：全局匹配 + 忽略大小写
  - /表达式/[switch]

## ES5新增方法

- 数组方法

  - forEach()数组遍历
  - map()
  - filter()   数组筛选
  - some()  查找数组
  - every()；
  - 1. filter 也是查找满足条件的元素 返回的是一个数组 而且是把所有满足条件的元素返回回来
  - 1. some 也是查找满足条件的元素是否存在  返回的是一个布尔值 如果查找到第一个满足条件的元素就终止循环

- ```javascript
      // forEach 迭代(遍历) 数组
        var arr = [1, 2, 3];
        var sum = 0;
        arr.forEach(function(value, index, array) {
            console.log('每个数组元素' + value);
            console.log('每个数组元素的索引号' + index);
            console.log('数组本身' + array);
            sum += value;
        })
        console.log(sum);

      // filter 筛选数组
      var arr = [12, 66, 4, 88, 3, 7];
      //   var newArr = arr.filter(function (value, index) {
      //     // return value >= 20;
      //     return value % 2 === 0;
      //   });
      let newArr = arr.filter((value) => value % 2 === 0);
      console.log(newArr);
    //some查找
     var arr1 = ['red', 'pink', 'blue'];
        var flag1 = arr1.some(function(value) {
            return value == 'pink';
        });
        console.log(flag1);
    
  ```


- 字符串方法
  - str.trim() 删除两端空白字符
- 对象方法
  - Object.keys(obj)  获取所有属性   

# ES6

- ECMASrpit是由Ecma国际通过ECMA-262标准化的脚本程序设计语言
- 从 ES6 开始，每年发布一个版本，版本号比年份最后一位大 1

## ES6新特性

### 1.1let关键字

- let 关键字用来声明变量，使用 let 声明的变量有几个特点：
  - 1) 不允许重复声明
  - 2) 块儿级作用域
  - 3) 不存在变量提升
  - 4) 不影响作用域链
- ==应用场景：以后声明变量使用 let 就对了==

### 1.2const关键字

- 声明常量，const 声明有一下特点
- 1) 声明必须赋初始值
- 2) 标识符一般为大写
- 3) 不允许重复声明
- 4) 值不允许修改
- 5) 块儿级作用域
- ==注意: 对象属性修改和数组元素变化不会出发 const 错误==
- ==应用场景：声明对象类型使用 const，非对象类型声明选择 let==

### 1.3变量的解构赋值

- ```javascript
  //数组的解构赋值
  const arr = ['张学友', '刘德华', '黎明', '郭富城'];
  let [zhang, liu, li, guo] = arr;
  //复杂解构  对象
  let wangfei = {
   name: '王菲',
   age: 18,
   songs: ['红豆', '流年', '暧昧', '传奇'],
   history: [
   {name: '窦唯'},
   {name: '李亚鹏'},
   {name: '谢霆锋'}
   ]
  };
  let {songs: [one, two, three], history: [first, second, third]} =
  wangfei;

  let star = '王宁';
  let result = `${star}在前几年离开了开心麻花`;
  ```

### 1.4模板字符串

- 反引号 可以使用 ${xxx} 形式输出变量

### 1.5简化对象写法

- ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。

- ```javascript
  //属性和方法简写
  let atguigu = {
   name,
   slogon,
   improve,
   change() {
   console.log('可以改变你')
   }
  };
  ```

### 1.6箭头函数

- 箭头函数的注意点:

  - 1) 如果形参只有一个，则小括号可以省略
  - 2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
  - 3) 箭头函数 this 指向声明时所在作用域下 this 的值0
  - 4) 箭头函数不能作为构造函数实例化
  - 5) 不能使用 arguments（构造函数）
  - 箭头函数不会更改 this 指向，用来指定回调函数会非常合适

- ```javascript
  //箭头函数
  item => item % 2 === 0)
  //不用函数
  const result = arr.filter(function(item){
             if(item % 2 === 0){
             return true;
             }else{
                  return false;
              }
           });
  ```

### 1.7rest 参数

- ...args        用来代替 arguments  用于获取函数的实参

- rest 参数必须是最后一个形参

- rest 参数非常适合不定个数参数函数的场景

- ```javascript
  /**
  * 作用与 arguments 类似
  */
  function add(...args){
   console.log(args);
  }
  add(1,2,3,4,5);
  /**
  * rest 参数必须是最后一个形参
  */
  function minus(a,b,...args){
   console.log(a,b,args);
  }
  minus(100,1,2,3,4,5,19);
  ```

### 1.8spread扩展运算符

- 数组合并  

- 数组的克隆

- 伪数组转真正的数组

- ```javascript
  //1. 数组的合并 情圣  误杀  唐探
           const kuaizi = ['王太利','肖央'];
           const fenghuang = ['曾毅','玲花'];
  	 const zuixuanxiaopingguo = kuaizi.concat(fenghuang);
           const zuixuanxiaopingguo = [...kuaizi, ...fenghuang];
           console.log(zuixuanxiaopingguo);

          //2. 数组的克隆
          const sanzhihua = ['E','G','M'];
           const sanyecao = [...sanzhihua];//  ['E','G','M']
           console.log(sanyecao);

          //3. 将伪数组转为真正的数组
          const divs = document.querySelectorAll('div');
          const divArr = [...divs];
          console.log(divArr);// arguments
  ```

### 1.9Symbol

- 独一无二的值  


- ![](D:\web笔记\笔记\web笔记\21.png)

  ![](D:\web笔记\笔记\web笔记\22.png)

### 1.10迭代器

- 需要自定义遍历数据的时候，要想到迭代器。

- 工作原理

  - a) 创建一个指针对象，指向当前数据结构的起始位置
  - b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
  - c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
  - d) 每调用 next 方法返回一个包含 value 和 done 属性的对象

- ```javascript
      <script>
          //声明一个数组
          const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];
          //使用 for...of 遍历数组
           for(let v of xiyou){
             console.log(v);
          // }
          let iterator = xiyou[Symbol.iterator]();  //迭代器iterator()
          //调用对象的next方法
          console.log(iterator.next());
          console.log(iterator.next());
          console.log(iterator.next());
          console.log(iterator.next());
          console.log(iterator.next());
      </script>
  ```

### 1.11生成器

- 代码说明：

  - 1) * 的位置没有限制
  - 2) 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到
    yield 语句后的值
  - 3) yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next
    方法，执行一段代码
  - 4) next 方法可以传递实参，作为 yield 语句的返回值

- next方法可以传入实参

- 执行获取迭代器对象

- ```javascript
  <script>
        //模拟获取  用户数据  订单数据  商品数据 
        function getUsers(){
            setTimeout(()=>{
                let data = '用户数据';
                //调用 next 方法, 并且将数据传入
                iterator.next(data);
            }, 1000);
        }
        function getOrders(){
            setTimeout(()=>{
                let data = '订单数据';
                iterator.next(data);
            }, 1000)
        }
        function getGoods(){
            setTimeout(()=>{
                let data = '商品数据';
                iterator.next(data);
            }, 1000)
        }
        function * gen(){
            let users = yield getUsers();
            let orders = yield getOrders();
            let goods = yield getGoods();
        }
        //调用生成器函数
        let iterator = gen();
        iterator.next()
    </script>
  ```

### 1.12promise

- Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，
  用来封装异步操作并可以获取其成功或失败的结果。
  - 1) Promise 构造函数: Promise (excutor) {}
  - 2) Promise.prototype.then 方法
  - 3) Promise.prototype.catch 方法


- ```JavaScript
  //使用 promise 实现
  const p = new Promise((resolve, reject) => {
      fs.readFile("./resources/为学.md", (err, data) => {
          resolve(data);
      });
  });

  p.then(value => {
      return new Promise((resolve, reject) => {
          fs.readFile("./resources/插秧诗.md", (err, data) => {
              resolve([value, data]);
          });
      });
  }).then(value => {
      return new Promise((resolve, reject) => {
          fs.readFile("./resources/观书有感.md", (err, data) => {
              //压入
              value.push(data);
              resolve(value);
          });
      })
  }).then(value => {
      console.log(value.join('\r\n'));
  });
  ```

### 1.13 Set

- 1) size 返回集合的元素个数

- 2) add 增加一个新元素，返回当前集合

- 3) delete 删除元素，返回 boolean 值

- 4) has 检测集合中是否包含某个元素，返回 boolean 值

- 5) clear 清空集合，返回 undefined

- ```javascript
  <script>
         //声明一个 set
         let s = new Set();
         let s2 = new Set(['大事儿','小事儿','好事儿','坏事儿','小事儿']);
         //元素个数
        console.log(s2.size);
         //添加新的元素
         s2.add('喜事儿');
         //删除元素
        s2.delete('坏事儿');
         //检测
        console.log(s2.has('糟心事'));
         //清空
       s2.clear();
         // console.log(s2);
         for(let v of s2){
             console.log(v);
         }        
     </script>
  ```

### 1.14 Map

- ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。

- Map 的属性和方法：

  - 1) size 返回 Map 的元素个数
  - 2) set 增加一个新元素，返回当前 Map
  - 3) get 返回键名对象的键值
  - 4) has 检测 Map 中是否包含某个元素，返回 boolean 值
  - 5) clear 清空集合，返回 undefined

- ```javascript
  <script>
       //声明 Map
       let m = new Map();
       //添加元素
       m.set('name','尚硅谷');
       m.set('change', function(){
           console.log("我们可以改变你!!");
       });
       let key = {
           school : 'ATGUIGU'
       };
       m.set(key, ['北京','上海','深圳']);
       //size
        console.log(m.size);
       //删除
      m.delete('name');
       //获取
       console.log(m.get('change'));
        console.log(m.get(key));
       //清空
        m.clear();
       //遍历
       for(let v of m){
           console.log(v);
       }
        console.log(m);
   </script>
  ```

### 1.15class

- 1) class 声明类

- 2) constructor 定义构造函数初始化

- 3) extends 继承父类

- 4) super 调用父级构造方法

- 5) static 定义静态方法和属性

- 6) 父类方法可以重写

- ```javascript
  <script>
          //手机
          function Phone(brand, price){
              this.brand = brand;
              this.price = price;
          }
          //添加方法
          Phone.prototype.call = function(){
              console.log("我可以打电话!!");
          }
          //实例化对象
          let Huawei = new Phone('华为', 5999);
          Huawei.call();
          console.log(Huawei);
          //class
          class Shouji{
              //构造方法 名字不能修改
              constructor(brand, price){
                  this.brand = brand;
                  this.price = price;
              }
              //方法必须使用该语法, 不能使用 ES5 的对象完整形式
              call(){
                  console.log("我可以打电话!!");
              }
          }
          let onePlus = new Shouji("1+", 1999);
          console.log(onePlus);
      </script>
  ```

### 2.16数值扩展

- ![66407580901](C:\Users\ADMINI~1\AppData\Local\Temp\1664075809013.png)

![66407581767](C:\Users\ADMINI~1\AppData\Local\Temp\1664075817673.png)

### 1.17对象扩展

- 1) Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
- 2) Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象
- 3) \__proto__、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型

### 1.18

- ```javascript
  <script type="module">
         //1. 通用的导入方式
         //引入 m1.js 模块内容
          import * as m1 from "./src/js/m1.js";
         // //引入 m2.js 模块内容
          import * as m2 from "./src/js/m2.js";
         // //引入 m3.js 
          import * as m3 from "./src/js/m3.js";

         //2. 解构赋值形式
          import {school, teach} from "./src/js/m1.js";
          import {school as guigu, findJob} from "./src/js/m2.js";
          import {default as m3} from "./src/js/m3.js";

         //3. 简便形式  针对默认暴露
         import m3 from "./src/js/m3.js";
          console.log(m3);
     </script>
  ```




