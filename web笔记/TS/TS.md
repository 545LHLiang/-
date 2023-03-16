# TS

## 介绍

- [6. 其它 | Vue3+TS 快速上手 (gitee.io)](http://huaxhe.gitee.io/vue3_study_docs/chapter2/6_other.html#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1)
- vscode 中設置添加   "typescript.tsserver.useSyntaxServer": "auto",
- TypeScript(TS)是JavaScript的超集  添加了 ==类型支持==     微软开发的
- TS属于 静态类型 编译期做类型检查   JS属于动态编程 执行期做类型检查   先编译 后执行
- 优点：
  - 减少找bug 改bug 时间
  - 任何位置都有代码提示
  - 重构代码更加容易  支持ES最新语法
  - 类型推断机制
  - 显示标记出代码中的意外行为

## 安装编译

- 安装：npm i  -g  typescript          提供tsc命令
- 验证：tsc -v 
- 运行：创建ts文件  编译 tsc  hello.ts  执行  node hello.js
  - 简化：npm i -g  ts-node  安装简化包    ==ts-node hello.ts==

##  webpack配置TS

- ​

## 类型注解(添加类型约束)

- let  age：number =18   number为类型注解    约定什么类型 只能给变量赋相同的类型   age='www' 则会报错

## 常用类型

js原有类型：number、string、boolean、null、undefined、symbol、object(数组、对象、函数)   

- ==使用  冒号名字   let sum：number =20          let name：string ='小米'  ...   小写== 

  ```typescript
  //js基本
  let age: number = 18
  let myname: string = '小米'
  console.log(`我的年龄${age}我的名字${myname}`);
  ```

### 数组

### 联合类型

- 联合类型 ： |  符号  （numbe | string)[] 既有数组又用字符串

###  函数

- 单独指定参数、返回值的类型   function  add(参数：参数类型): 返回值类型{}
- 同时：函数名:(参数：参数类型)=>返回值类型=（参数）=>{}  只适用于函数表达式
- ==可选参数：？ 只能出现在参数列表 最后==
- 剩余参数(rest参数)  ..args：类型  放在最后
- 函数重载   函数名字相同，函数参数个数不同![](D:\web笔记\笔记\web笔记\TS\函数重载.png)

### 对象

- 对象:{属性：类型;方法名(参数：参数类型)：返回值类型}={属性：属性值}  类型注解一行中需要 加分号

- 方法第二中写法： sayhi:()=>参数类型

- ==可选属性   ？==

  ```ts
  //数组
  let arr0: number[] = [1, 2, 3]
  let arr2: Array<string> = ['1', '2', '4']
  //联合类型
  let arr: (number | string)[] = [1, '2', 3]
  console.log(arr);
  //函数
  //单独指定类型
  //add(参数：参数类型): 返回值类型
  function add(x: number, y: number): number {
      return x + y
  }
  const add1 = (x: number, y: number): number => {
      return x + y
  }
  //同时指定
  //函数名:(参数：参数类型)=>返回值类型=（参数）=>{}
  const add2: (x: number, y: number) => number = (x, y) => {
      return x + y
  }
  //可选参数
  function myslice(start?: number, end?: number): void {
      console.log('起始索引', start, '结束索引', end);
  }
  myslice()
  myslice(1)
  myslice(1, 2)
  //对象:{属性：类型 ; 方法名(参数：参数类型)：返回值类型}={属性：属性值}

  let person: { name: string; age: number; sayhi(): void; jsage(age: number): number } = {
      name: 'John',
      age: 34,
      sayhi() {
          console.log('我叫' + this.name);
      },
      jsage(age: number) {
          return age
      }
  }
  //对象可选属性
  function axios(config: { url: string; method?: number }) {
      console.log(config);
  }
  axios({
      url: 'http://localhost',
  })
  ```

### Ts新增

ts新增：自定义类型（类型别名）、接口、元组、字面量、枚举、void、any等

### 自定义类型

自定义类型    ==type CustomArray=(number | string)[]==

### void

void类型：无返回值类型函数  function 函数名(参数：参数类型)：void{}

```ts
//自定义类型
type CustomArray = (number | string)[]
let arr1: CustomArray = [1, '2', 3]
//void
//function 函数名(参数：参数类型)：void{}
function g(name: string): void {
    console.log('hello', name);
}
g('jacl')

```

### 接口

- 接口

  - 接口来描述对象的类型 达到复用
  - 使用关键字 interface  变量名
  - interface接口与 type 类型别名
    - 相同点：都可以给对象指定类型
    - 不同点：==接口只能为对象指定类型  类型别名 可以为任意类型指定别名==
  - 继承：两个接口之间都有相同的属性和方法 可以将公共的属性和方法抽离出来 通过extends复用
    - ==关键字  继承者(子)  extends  被继承者(父)==

- ```ts
  //接口
  interface IPerson {
      name: string
      age: number
      sayhi(): void
  }
  let person2: IPerson = {
      name: 'John',
      age: 34,
      sayhi() { }
  }
  //类型别名
  type IPerson = {
      name: string
      age: number
      sayhi(): void
  }
  let person2: IPerson = {
      name: 'John',
      age: 34,
      sayhi() { }
  }
  //继承
  interface IPerson2 extends IPerson { sayhello(): void }
  let person3: IPerson2 = {
      name: 'John',
      age: 34,
      sayhi() { },
      sayhello() { }
  }
  ```

### 元组

元组

- 场景 地图位置信息(经纬度)
- ==确切地知道包含多少个元素==
- let position：[number,number]=[39.5427,116.2314]

### 类型推论

类型推论

- 初始化时 可以省略类型注解![](D:\web笔记\笔记\web笔记\TS\Snipaste_2023-02-17_16-37-44.png)
- ==如果变量没有立即初始化值时，需要添加类型注解==
- 当函数有返回值时  返回值的类型注解也可以省略
- 能省略则省略

### 类型断言

- 类型断言
  - 当你比TS 知道改元素类型时   将使用类型断言   获取元素后  as   元素类型
    - as HTMLxxxElement  （a标签 HTMLAnchorElement ）
    -  ==其他可通过 浏览器控制台 点击想看的标签 consloe.dir($0)  列表最后==
    - ![](D:\web笔记\笔记\web笔记\TS\Sn.png)

### 字面量

- 变量的值可以为任意  所以类型可以改变

- 常量的值不能改变   则类型注解为值

- 任意js字面量(对象、数字等)都可以作为类型使用

- ```ts
  //字面量
  let str = 'Hello Ts'
  const str2: 'hello Ts' = 'hello Ts'  
  let age18: 18 = 18   //如果等于19  则会报错
  ```

- 作用：==表示一组明确的可选值列表===  配合联合类型使用  更加严谨和精确

  - ```ts
    //贪吃蛇  方向只能为上下左右
    function changefangxiang(fangxiang: '上' | '下' | '左' | '右') {
        console.log(fangxiang);
    }
    changefangxiang('上')
    ```

### 枚举

- 枚举类型(字面量类型+联合类型组合的功能) 也可以表示一组明确的可选值  一般推荐使用字面量


- - ==枚举:定义一组变量名常量  关键字 enum==  

  - ==枚举中值以大写字母开头 用逗号分隔  直接用枚举名作为类型注解==

  - (.)语法 访问枚举成员

  - ```ts
    //贪吃蛇  枚举
    enum Fangxiang { Up, Down, Left, Right }
    function change(fangxiang: Fangxiang) {
        console.log(fangxiang);
    }
    change(Fangxiang.Left)
    ```

  - 枚举成员的值、

    - 数字枚举
      - 将鼠标移入 Fangxiang.Left 可以看到值为2    从0开始  自增    
      - 初始化枚举值     enum Fangxiang { Up=10, Down, Left, Right }  则 left=12
    - 字符串枚举
      - 没有自增行为  字符串枚举的每个成员必须有初始值

  - 特性和原理

    - 枚举不仅用作类型，还提供值
    - 枚举类型会被编译成js代码![](D:\web笔记\笔记\web笔记\TS\枚举特性.png)

### any

- 不推荐使用any   失去ts类型保护优势   ==可以对值进行任意操作 不会有代码提示==
  - let obj：any={x:0}  
  - 声明的变量 无代码错误提示 
  - ==隐式any  声明变量不提供类型也不提供默认值   函数参数不加类型==

### typeof

- typeof
  - 新功能  ==类型上下文 类型查询   typeof出现在 类型注解的位置时==
  - typeof  可以获取其他变量的类型  只能用来查询变量或属性的类型 ==无法查询其他形式的类型如函数调用==
    - let num ：typeof p.x   （ V）        let num2 ：typeof add(1,2)   （x） 报错无法获取
  - ![](D:\web笔记\笔记\web笔记\TS\tyepof .png)


## 高级类型

## class类

###   class基本使用

- 语法与js相同   创建类class person{}   创建实例     const p = Person()    ==类型注解为类==

- 实例属性： age：number（无默认值）   gender='男' (有默认值可省略类型注解)

- ```ts
  class Person { 
      age: number
      gender = '男'
      }
  }
  const p = new Person()
  ```


### class构造函数

- constructor(参数：参数类型){}  返回值类型不能出现在构造函数里

- ```ts
  class Person {
      age: number
      gender: string
      //构造函数
      constructor(age: number, gender: string) {
          this.age = age
          this.gender = gender
      }
  }
  const p = new Person(12, '男')
  ```

### class实例方法

- 方法的类型注解与函数用法相同

- ```ts
  //定义一个数学方法类  sum方法 两个数相加
  class myMath {
      x: number
      y: number
      constructor(x?: number, y?: number) {
          this.x = x || 0
          this.y = y || 0
      }
      sum(x: number, y: number): number {
          return x + y
      }
  }
  const math = new myMath()
  console.log(math.sum(2, 6));//8
  ```

### class 类的继承

- extends 继承父类   implements 实现接口.

- super 调用父类构造函数 实现子类中属性的初始化操作

- ==实现接口意外着，类中必须提供接口中指定的所有方法和属性==

- ```ts
  // extends 继承
  class a {
      saya() {
          console.log('我是 a');
      }
  }
  class b extends a {
      sayb() {
          console.log('我是B');
      }
  }
  const B = new b()
  console.log(B.saya()); 

  //实现接口   Singable接口中的所有方法和属性   在children类中都必须存在 
  interface Singable {
      sing(): void;
      age：number
  }
  class children implements Singable {
      sing() {
          console.log('你是我的小雅');

      }
  }
  ```

  ![](D:\web笔记\笔记\web笔记\TS\实现接口.png)



### 存取器

- 让我可以有效的控制 对  对象中的成员的访问，通过 getters和setters 操作
  - get   和 set 
  - ![](D:\web笔记\笔记\web笔记\TS\存取器.png)

### 抽象类

- 没有任何内容的实现  抽象放法 也可包含实例方法   不能被实例化 为了让子类进行实例化及实例内部的抽象方法
- 抽象类的目的为了子类服务的
  - abstract 关键词
  - ![](D:\web笔记\笔记\web笔记\TS\抽象.png)



### class可见性修饰符

- piblicg共有的(默认)   protected 受保护的  private私有     

- ==static静态属性   通过类名.的这种语法调用   无法使用this 调用==

-  protected 仅对其申声明所在类和子类(非实例对象)中可见  子类通过 this.父类方法名  访问父类中的方法

- readonly 只读  ==只能在构造函数里对属性赋值== ==只能修饰属性==  接口 或者{} 表示的对象类型 也可以使用

- ```ts
  class a {
      readonly age：number=11  //类型为 number
      readonly age=11  //类型为11 
      public saya() {
          console.log('我是 a');
          console.log('我是公有的');
      }
      protected move() {
          console.log('我是受保护的');
      }
      private sing() {
          console.log('我是' + name);
          console.log('我是私有');
      }
  }
  //接口
  interface Iperson {
      readonly name: string;
  }
  let ogj: Iperson = {
      name: 'w'
  }

  //对象
  let obj: { readonly name: string } = {
      name: 'www'
  }

  ```


## 类型兼容性

-  TS采用的结构化类型系统        
  - 如 p：Point =new Point2D()     只检查结构、属性、属性类型都一样时则不会报错   

### 对象

- 对于对象类型来说，y的成员至少与x相同，则 x 兼容y (成员==多==的可以==赋==值给==少==的）

- 只要满足 前面类型要求的成员数量  就可以实现类型兼容

- ```ts
  class Point { x: number; y: number }
  class Point3d { x: number; y: number; z: number }
  const w: Point = new Point3d(); 
  ```

  ​

### 接口

- 接口类型之间兼容： 类似class 并且，class和interface之间也可以兼容

- ```ts

  //接口
  interface Point3D { x: number; y: number; z: number }
  interface Point2D { x: number; y: number; }
  interface Point1D { x: number; y: number; }
  class Point3d { x: number; y: number; z: number }
  let w1: Point1D = { x: 4, y: 5 }
  let w3: Point3D = { x: 4, y: 5, z: 6 }
  let p2: Point2D = { x: 4, y: 5 }
  w1 = w3
  w1 = p2
  p2 = w3
  w3 = new Point3d()   //class和interface之间也可以兼容
  ```

### 函数

- 比较复杂  参数个数  参数类型  返回值类型

- 参数个数

  - 参数==少==的可以==赋==值给参数==多==的      

  - ```ts
    //函数
    type F1 = (a: number) => void
    type F2 = (a: number, b: number) => void
    let f1: F1 = (a = 1) => { }
    let f2: F2 = f1
    ```

    ​

- 参数类型

  - 相同位置的参数类型要相同或者兼容

  - 原始类型相同

    ```js
    type F1 = (a: number) => void
    type F2 = (a: number) => void
    let f1: F1 = (a = 1) => { }
    let f2: F2 = f1
    ```

  - 对象类型

    ```ts
    //接口
    interface Point3D { x: number; y: number; z: number }
    interface Point2D { x: number; y: number; }
    type F1 = (p: Point3D) => void  //3个参数
    type F2 = (p: Point2D) => void  //2个参数
    let f1: F1
    let f2: F2
    f1 = f2   //  少赋给多 
    ```

    ​

- 返回值类型

  - 原始类型本身是否相同   要number 都number
  - ==对象类型== 则按对象类型兼容性 考虑  此时则==多==的可以==赋==给==少==的     

## 交叉类型

- 类似与接口  用于组合多个类型为一个类型 (常用于对象类型)  &符号

- ```ts
  interface a { name: string }
  interface b { age: number }
  type c = a & b 
  //上面代码 相当于   type c= { name: string; age: number }
  let obj: c = {
      name: 'www',
      age: 18
  }

  ```

- ![67671093438](C:\Users\ADMINI~1\AppData\Local\Temp\1676710934387.png)

## 泛型

- 可以在保证类型安全与多种类型一起工作   实现复用.同时保证安全

- 创建泛型

  ```ts
  // Type类型变量 可以替换 名字   
  function id<Type>(value: Type): Type {
      return value
  }
  //调用
  const num = id<number>(10)
  console.log(num);
  ```

- 简化泛型  能省则省   如果系统推断的类型不明确 时   则需要手动传入

- ```ts
  function id<Type>(value: Type): Type {
      return value
  }
  const num = id(10)
  const a = id(101)
  ```

- 泛型约束

  - Type可以代表任意类型     无法保证一定存在length属性 如number就没有 length属性

  - 指定更加具体的类型

    ```ts

    function id<Type>(value: Type[]): Type[] {
        console.log(value.length);       //2
        return value    //【1，2】
    }
    const w = id([1, 2])
    console.log(w);

    ```

  - 添加约束  extends 使用接口，并添加约束  表示：传入的类型必须具有length属性

    ```ts
    interface length { length: number }
    function id<Type extends length>(value: Type): Type {
        console.log(value.length);
        return value
    }
    const w = id([1, 2])
    console.log(w);
    ```

  - 多个变量   用逗号 隔开   keyof 接受一个对象类型，生成其键名称的联合类型

  - keyof 接受一个对象类型   

    ```ts
    //获取对象中存在属性值    
    //key extends keyof Type  key 必须满足 Type中所有键中的其中一个  'name'或'age'
    function getprop<Type, key extends keyof Type>(obj: Type, key: key) {
        //obj:{ name: 'John', age: 18 }
        //key:'name
        //obj[name]    John      ;
        return obj[key];
    }
    let person = { name: 'John', age: 18 }
    console.log(getprop(person, 'name')); //John
    //打印传入的两个数
    function log<Type, key extends Type>(x: Type, y: key) {
        return console.log(x, y);
    }
    console.log(log(1, 2));  

    ```

  - 泛型接口    

    - 接口类型变量Type 对接口中所有其他成员可见  都可以使用  

    - ```Ts
      interface a<Type> {
          id: (value: Type) => Type
          ids: () => Type[]
      }
      let obj: a<number> = {
          id: (value) => { return value },
          ids: () => { return [1, 2, 3] }
      }
      ```

    - 通过泛型接口实现具体参数的类型

  - 泛型类

    - ```ts
      class Person<T1, T2> {
          name: T1
          age: T2
          constructor(name: T1, age: T2) {
              this.name = name
              this.age = age
          }
          say(name: T1, age: T2) {
              console.log(`我的名字为${name},年龄为${age}`);
          }
      }
      const p1 = new Person('李慧亮', 21)
      const p1 = new Person<string,number>('李慧亮', 21)
      const p1：Person<string,number> = new Person('李慧亮', 21)  
      console.log(p1.age); //21
      console.log(p1.say('李慧亮', 21)); //我的名字为李慧亮,年龄为21
      ```

  - 泛型内置方法

    - Partial\<Type>   将Type中所有属性变为可选  不改变原有类型![](D:\web笔记\笔记\web笔记\TS\partial.png)
    - Readonly\<Type>  所有属性变为只读![](D:\web笔记\笔记\web笔记\TS\Readonly.png)
    - Pick\<Type,keys>   选择一组属性来构造新的类型 Type是选择谁的属性    keys 那几个属性![](D:\web笔记\笔记\web笔记\TS\Pick.png)
    - Record\<keys,Type>  构建一个对象类型   keys对象有那些属性， 属性值类型![](D:\web笔记\笔记\web笔记\TS\Record.png)

## 索引签名类型

- 无法确定对象中有那些属性时  就用索引签名类型    
- [key:string]:number  key为占位符  可以换成任意名字     key:string约束  键名的类型![](D:\web笔记\笔记\web笔记\TS\索引.png)

## 映射类型

- 映射类型是基于索引签名类型的 已使用了[]           减少重复、提升开发效率
-  [key in 类型]：类型     in关键字  ![](D:\web笔记\笔记\web笔记\TS\映射.png)
- ![](D:\web笔记\笔记\web笔记\TS\映射 2.png)
- 索引查询类型  T[p] p为配查询类型中的属性   ![](D:\web笔记\笔记\web笔记\TS\映射3.png)
- 查询多个是  T[p|g] 用 | 隔开![](D:\web笔记\笔记\web笔记\TS\映射4.png)

## 类型声明文件

-  用来为已存在的js库提供类型信息
-  .ts文件   包含类型声明、可执行代码   可以编译为.js文件   
-  .d.ts文件  包含类型声明  不包含可执行代码  不会生成.js文件  仅用于==为js提供类型信息==
-  使用已有类型声明文件  内置   第三方    ==CTrl+左键 方法名==
-  安装第三方包 npm i  -D  @types/包名

### 创建自己的类型声明文件

- 项目内共享项    多个文件 共享一个类型时
  - 创建  xxxx.d.ts 文件  使用 export    导出   导入  import {xxx}  from   '路径'![](D:\web笔记\笔记\web笔记\TS\d.png)
- 为已有的js文件提供类型声明
  - js项目迁移到TS项目时(创建库 为他人使用)
    - declare 关键字  ：类型声明 为其他地方(如.js文件)已存在的变量声明类型
    - 当只能再TS使用  则可以省略declare            如：type、interface
    - ![](D:\web笔记\笔记\web笔记\TS\d2.png)
    - ![](D:\web笔记\笔记\web笔记\TS\d3.png)

    ​


## 内置对象

- ![67696483525](C:\Users\ADMINI~1\AppData\Local\Temp\1676964835251.png)