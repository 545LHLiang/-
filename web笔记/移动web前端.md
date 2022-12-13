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
-  align-content 行对齐方式  与 justify-content 基本相同

## 移动适配

### rem

- rem单位
  -  相对单位
  - rem单位是相对于HTML标签的字号计算结果
  -  1rem = 1HTML字号大小
- 媒体查询
  - ==@media（尺寸）{ html{ font-size：32px}}==
  - ==min-width  从小到大写==  
  - ==max-width  从大到小==
- rem单位尺寸
- 根据视口宽度，设置不同的HTML标签字号
- 书写代码，尺寸是rem单位
  - 2.1 确定设计稿对应的设备的==HTML标签字号==
    -  查看==设计稿宽度== → 确定参考==设备宽度==(视口宽度) → 确定==基准根字号==（1/10视口宽度）
  - 2.2 rem单位的尺寸
    -  N * 37.5 = 68 → N = 68 / 37.5
    -  rem单位的尺寸 = ==px单位数值 / 基准根字号==

### flexible

- script标签引入flexible.js  框架

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

