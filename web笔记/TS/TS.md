# TS

## 介绍

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
-  运行：创建ts文件  编译 tsc  hello.ts  执行  node hello.js
  - 简化：npm i -g  ts-node  安装简化包    ==ts-node hello.ts==

## 类型注解(添加类型约束)

- let  age：number =18   number为类型注解    约定什么类型 只能给变量赋相同的类型   age='www' 则会报错

## 常用类型

- js原有类型：number、string、boolean、null、undefined、symbol、object(数组、对象、函数)   
  - ==使用  冒号名字   let sum：number =20          let name：string ='小米'  ...   小写== 
  - 数组： ：==：数组存放类型[]==  或者Array\<数组存放类型>  （numbe | string)[] 既有数组又用字符串
- ts新增：自定义类型（类型别名）、接口、元组、字面量、枚举、void、any等
  -  
- ​

