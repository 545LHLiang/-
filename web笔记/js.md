# javascript	

## JavaScript是什么？

- JavaScript：运行在客户端（浏览器）的编程语言，实现人机交互效果
- ​    网页特效  表单验证 数据交互   服务端编程  node.js
- ​      **组成： ECMAScript  webAPIs(DOM  BOM)**
  -    	 ECMAScriptL:规定了js基础语法核心知识
    -    DOM 操作文档  
    -    BOM 操作浏览器，比如页面弹窗

![65102468012](E:\web笔记\笔记\web笔记\1651024680129.png)

## 书写位置： 内联 内部 外部

###      内部：

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

```HTML
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


###  能够说出变量的本质是什么

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

```HTML
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

```HTML
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

##  **转换数据**

###  Number(数据)

- 如果字符串内容里有非数字，转换失败时结果为NaN（Not a Number）即不是一个数字
-  NaN也是number类型的数据，代表非数字

###  parseInt(数据)

​	只保留整数

###  parseFloat(数据)

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

![65102692610](E:\web笔记\笔记\web笔记\1651026926102.png)



## 分支语句

- if分支语句  三元运算符 条件 ？满足条件代码 ：不满足代码   switch 语句
- switch case语句一般用于等值判断,不适合于区间判断
- switch case一般需要配合break关键字使用 没有break会造成case穿透
- continue：结束本次循环，继续下次循环    break：跳出所在的循环

```HTML
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

```HTML
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

-  格式  function 函数名（）{ }   调用 函数名()
- 形参：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）
- 实参：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）
	 ​		尽量保持形参和实参个数一致

### return关键词  

-  	return后面不接数据或者函数内不写return，函数的返回值是undefined
	 ​	 return能立即结束当前函数, 所以 return 后面的数据不要换行写

### 立即执行函数

- 有什么作用？	防止变量污染
-  立即执行函数需要调用吗？ 无需调用，立即执行，其实本质已经调用了
- 有什么注意事项呢？ 多个立即执行函数之间用分号隔开

```HTML
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
-  对象如果有这个属性相当于重新赋值   对象如果没有这个属性相当于动态添加一个属性

遍历对象

-  for  in  循环语句
-  语法
- for (let k in 对象名) {}  重点
-  k 变量   k  或者  key    value  

```HTML
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

-  random：生成0-1之间的随机数（包含0不包括1）
- ceil：向上取整   floor：向下取整   max：找最大数
- min：找最小数  pow：幂运算     abs：绝对值

```HTML
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

![65106090388](d:\web笔记\笔记\web笔记\1651060903883.png)  

 

## DOM对象

- 浏览器根据html标签生成的 JS对象（DOM对象）
- DOM的核心就是把内容当对象来处理                          

document 对象 document.write() 是用来访问和操作网页内容的

## 获取对象

1. ==document.querySelector('类名')   获取一个第一个==
2. ==document.querySelectorAll('类名')  获取多个  伪数组 通过遍历的方式，获得里面的每一个dom对象（元素）==

## 修该元素     

1. 修改标签（元素）内容  box是对象   innerText 属性 ==innerHTML解析标签==

```HTML
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

2. ==修改元素属性   对象.属性 = 值==
3. ==修改元素样式属性    对象.style.样式属性 = '值'==
   - 注意：
     1. 修改样式通过style属性引出
     2. ==如果属性有-连接符，需要转换为小驼峰命名法==
     3. 赋值的时候，需要的时候不要忘记加css单位
4. 操作类  className 和 classList 
   - className 会覆盖原有的类    
   - classList   add 添加类   remove 移除类   toggle 切换类（有 删除   无添加）
5.  修改表单元素  按钮关闭 disabled、 复选框默认选择 checked、 下拉默认选择 selected 
   -  // disabled 不可用   =  false  这样可以让按钮启用
   - 其他两个 true 选中  false 未选

## 间歇函数（定时器）

```HTML
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

```HTML
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

###  追加节点：

- 插入到父元素的最后一个子元素          父元素.appendChild(要插入的元素)
- 插入到父元素的某个子元素前面          父元素.insertBefore（要插入的元素，在哪个元素前面）
- 注意：获取元素 类名要加点   追加类 类名不加点 

### 克隆节点：

- 元素.cloneNode(布尔值)   cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值
- 若为true，则代表克隆时会包含后代节点一起克隆
- 若为false，则代表克隆时不包含后代节点  默认为false

```HTML
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

![65106352173](d:\web笔记\笔记\web笔记\1651063521730.png)

###  什么是时间戳

 是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式

###   三种方式获取时间戳

1.  使用 getTime() 方法  let date = new Date()console.log(date.getTime())
2.   简写 +new Date()   console.log(+newDate())
3.    使用 Date().now()  console.log(Date().now())
4.    但是只能得到当前的时间戳， 而前面两种可以返回指定时间的时间戳

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

```HTML
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

-  type    获取当前的事件类型
-  clientX/clientY 获取光标相对于浏览器可见窗口左上角的位置
- offsetX/offsetY获取光标相对于当前DOM元素左上角的位置
- key用户按下的键盘键的值现在不提倡使用keyCode
-  常用   e.target 真正触发事件的元素   e.target.tagName  事件对象的触发元素的名字 



## 事件流

### 捕获阶段  从父到子

### 冒泡阶段  从子到父  事件冒泡是默认存在的

- 当一个元素触发事件后，会依次向上调用所有父级元素的同名事件

-  说明：
  addEventListener第三个参数传入true代表是捕获阶段触发（很少使用）
  若传入false代表冒泡阶段触发，默认就是false
  若是用 L0 事件监听，则只有冒泡阶段，没有捕获

- 阻止事件流动  事件对象.stopPropagation()  不光在冒泡阶段有效，捕获阶段也有效

-  鼠标经过事件：
  mouseover 和 mouseout 会有冒泡效果

   mouseenter 和 mouseleave 没有冒泡效果(推荐)

- 阻止默认行为，比如链接点击不跳转，表单域的跳转   e.prevenDefault()

###  两种注册事件的区别：

 传统on注册（L0）

- 同一个对象,后面注册的事件会覆盖前面注册(同一个事件)
- 直接使用null覆盖偶就可以实现事件的解绑
- 都是冒泡阶段执行的

事件监听注册（L2）

-  语法: addEventListener(事件类型, 事件处理函数, 是否使用捕获)
- 后面注册的事件不会覆盖前面注册的事件(同一个事件)
- 可以通过第三个参数去确定是在冒泡或者捕获阶段执行
-  必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)
-  ==匿名函数无法被解绑==

```HTML
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

-  优点：给父级元素加事件（可以提高性能）

- 原理：事件委托其实是利用事件冒泡的特点
- 实现：事件对象.target 可以获得真正触发事件的元素

```HTML
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

- ```HTML
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

    -   ==scrollLeft和scrollTop  获取取元素内容往左、往上滚出去看不到的距离  可以修改==
    -   scrollWidth和scrollHeight 获取元素的内容总宽高（不包含滚动条）返回值不带单位
    -   ==document.documentElement HTML 文档返回对象为HTML元素==

    offset家族

    * ==offsetLeft和offsetTop 注意是只读属性 获取元素距离自己定位父级元素的左、上距离==
    * offsetWidth和offsetHeight   获取元素的自身宽高、包含元素自身设置的宽高、padding、border

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
-  所有通过var/let 定义在全局作用域中的变量、函数都会变成window对象的属性和方法
- window对象下的属性和方法调用的时候可以省略window

```HTML
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

```HTML
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


```HTML
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

```HTML
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

```HTML
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

-  js 把任务分为 同步任务和异步任务
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

```HTML
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

```HTML
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
</body
```

## 