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

- ==文本水平对齐方式：text-align：letf center right==

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
- 单词之间间距word-spacing
- 文本的大小写text-transform
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

```html
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

```html
 /* 只选择 type =text 文本框的input 选取出来 */
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

1. 要么把单独的样式写在连写的下面

2. 要么把单独的样式写在连写的里面

   ​

------

### 元素显示模式

#### 块级元素

- ==独占一行（一行只能显示一个）==
- 宽度默认是父元素的宽度，高度默认由内容撑开
- 可以设置宽高

#### 行内元素

- ==一行可以显示多个==
- 宽度和高度默认由内容撑开
- ==不可以设置宽高==

#### 行内块元素

- ==一行可以显示多个==
- ==可以设置宽高==

#### 元素模式转换：

- ==display：block转换为块级元素 inline-block行内块 inline 行内==
- p标签中不要嵌套div、p、h等块级元素
- a标签不能嵌套a标签
- css具有继承性、层叠性、优先级
- 子元素有默认继承父元素样式的特点

#### 优先级排序

- ==继承 < 通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important==
- !important写在属性值的后面，分号的前面！
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

- 标准流：又称文档流，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了应该以何种方式排列元素

- ➢ 常见标准流排版规则：
  ​	块级元素：从上往下，垂直布局，独占一行   行内元素   行内块元素：从左往右，水平布局，空间不够自动折行

------

### 浮动

`float:left/right`

#### ➢ 浮动元素的特点有哪些？

- ==浮动元素会脱标，在标准流中不占位置==
- 浮动元素比标准流高出半个级别，可以覆盖标准流中的元素
- 浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动
- ==浮动元素有特殊的显示效果：① 一行可以显示多个 ② 可以设置宽高==
- ==浮动的元素不能通过text-align:center或者margin:0 auto==

------

### 定位

​	`position：relative/absolute/fixed`

### 静态定位

- 静态定位就是之前标准流，不能通过方位属性进行移动
- 之后说的定位不包括静态定位，一般特指后几种：相对、绝对、固定

#### ==相对定位==

- 需要配合方位属性实现移动
- 相对于自己原来位置进行移动
- 在页面中占位置 → 没有脱标

#### ==绝对定位==

- 需要配合方位属性实现移动
- 默认相对于浏览器可视区域进行移动
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
- 相对于浏览器可视区域进行移动
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
- 文本框和表单按钮无法对齐问题
- input和img无法对齐问题div中的文本框，文本框无法贴顶问题
- div不设高度由img标签撑开，此时img标签下面会存在额外间隙问题
- 使用line-height让img标签垂直居中问题

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

```html
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

1. 在使用(调用)动画

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

![](E:\web笔记\web笔记\Snipaste_2022-04-06_09-13-18.png)

![nipaste_2022-04-06_09-15-1](E:\web笔记\web笔记\Snipaste_2022-04-06_09-15-11.png)

### ==透视：perspective==

用来实现3d效果，透视值越小越大。给父元素添加，位移的Z轴的正值越大物体越大

### 3D呈现

transfrom-style			flat 不开启，preserve-3d 开启