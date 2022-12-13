

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

- ```JavaScript
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

-  关键字  extends             Son  extends  Father

- 关键字 super 

  - super关键字 用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数。

- ​

- ```JavaScript
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

- ![66398352536](C:\Users\ADMINI~1\AppData\Local\Temp\1663983525364.png)

## 构造函数     1

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

- ```JavaScript
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

  ![66398482812](C:\Users\ADMINI~1\AppData\Local\Temp\1663984828125.png)

-  改变this指向 三种方法：call方法     apply方法   . bind 方法

  - 相同点: 都可以改变函数内部的this指向.
  - 区别点:              1111111111111
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

###  浅拷贝和深拷贝

- 1.浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用.
- 2.深拷贝拷贝多层, 每一级别的数据都会拷贝.
- 3.Object.assign(target, ...sources)    es6 新增方法可以浅拷贝

## 正则表达式 

- var  变量名 = /表达式/
- 表达式的变量名.test（str）         返回 true  / false
- ^谁开始  \$ 谁结束/[abc]/  包含a/b/c  [a-z] 范围符
-   [\^a]取反    边界符在外边
- \*0/ 多次  +一次 /多次     ？ 0/一次  {n} n次 {n，}n次 /更多次  {n，m} n-m次![66398698069](C:\Users\ADMINI~1\AppData\Local\Temp\1663986980691.png)
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
  - 2. some 也是查找满足条件的元素是否存在  返回的是一个布尔值 如果查找到第一个满足条件的元素就终止循环

- ```JavaScript
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

- ```JavaScript
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

- ```JavaScript
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

- ```JavaScript
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


- ![66407427305](C:\Users\ADMINI~1\AppData\Local\Temp\1664074273054.png)

### 1.10迭代器

- 需要自定义遍历数据的时候，要想到迭代器。

-  工作原理

  - a) 创建一个指针对象，指向当前数据结构的起始位置
  - b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
  - c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
  - d) 每调用 next 方法返回一个包含 value 和 done 属性的对象

- ```JavaScript
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

-  next方法可以传入实参

-   执行获取迭代器对象

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

- ```JavaScript
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

- ```JavaScript
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

- ```JavaScript
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