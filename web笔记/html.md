# HTML

## 权重

​	可以把样式的应用方式分为几个等级，按照等级来计算权重

1. !important	权重值为10000
   . . 内联样式 	权重值为1000
   . . ID选择器	权重值为100
   . . 类，伪类和属性选择器	权重值为10
   . . 标签选择器和伪元素选择器	权重值为1
2. 其他权重为0

## 文件英文名

1. ​	文  件  夹：	==index.html 首页 favicon.ico ico图标 image 固定使用的图片素材 uploads 非固定使用图片==、

   . ​	css 文 件： 	==base.css 基础公共样式 common 多个页面相同模块 index.css首页css文件==

   . ​	页面结构：	容 器:container     	==页头：header== 		内容：content/container 	页面主体：main 

    				==尾：footer==		==导航：nav==		 侧栏：sidebar 			栏目：column 		

    				==页面外围控制整体布局宽度：wrapper== 	  ==左右中：left right center==        ==上下： prev  next==

    				 菜单：menu		子导航：subnav 	  头部导航:topnav      		==快捷导航：shortcut==	

   ​				==横幅：banner==

## SEO三大优化

```html
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

```html
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

```html
.clearfix {
            /* 清除左右两侧浮动的影响 */
            clear: both;
        }
```

3.单伪元素清除法 

```html
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

```html
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

​	网页是==图片、链接、文字、声音、视频==等元素组成, 其实就是一个html文件(后缀名为html)

## 网页生成

​	网页生成制作: 有前端人员书写 ==HTML 文件==, 然后浏览器打开,就能看到了网页.

## HTML是什么

​	==HTML: 超文本标记语言==, 用来制作网页的一门语言. 有标签组成的. 比如 图片标签 链接标签 视频标签等…

## 什么是WEB标准

​	==Web 标准是由 W3C 组织和其他标准化组织制定的一系列标准的集合==。W3C（万维网联盟）是国际最著名的标准化组织

## WEB结构

​	==结构写到 HTML 文件中， 表现写到 CSS 文件中， 行为写到 JavaScript 文件中。==

## 基本语法概述

1. HTML 标签是由尖括号包围的关键词，例如 < html>。
2. HTML 标签通常是成对出现的，例如 < html> 和 < /html> ，我们称为双标签。标签对中的第一个标签是 开始标签，第二个标签是结束标签。
3. 有些特殊的标签必须是单个标签（极少情况），例如 < br />，我们称为单标签。

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

```html
< audio controls="controls">

	< source src="音频地址" type="audio/mp3">

	< source src="音频地址" type="audio/audio/ogg">

 	 -你的浏览器不支持audio

< /audio>

```

## 视频标签

- ==src：地址 controls：控制播放控件 autoplay：自动播放(谷歌需要配合muted实现静音播放) loop：循环播放 poster 显示图片==
- ==source可以让浏览器自己选择播放的格式 mp4和ogg==

```html
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
- ==table标签：表格整体==
- ==tr标签：表格每行==
- ==td标签：对于主题的每一项内容==
- 表格基本标签的嵌套规范是什么？
- table > tr > td

### 表格属性

- border属性：表格边框
- width属性：表格整体的宽度
- height属性：表格整体的高度
- 表格整体大标题：==caption标签== • 书写在table标签内部
- 表头单元格：==th标签== • 书写在tr标签内部（用于替换td标签）
- 表格的结构标签分别有哪些？表示什么含义？
- ​         thead：表格头部
- ​         tbody：表格主体
- ​         tfoot：表格底部
- 表格结构标签书写在什么位置？
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

```html
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
- ==需要把label标签的for属性删除即可==

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

```html
<div class=“header”> </div>

<div class=“nav”> </div>

<div class=“content”> </div>

<div class=“footer”> </div>

```

# 