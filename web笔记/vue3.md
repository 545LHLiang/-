# 基于TS的VUE3

- [6. 其它 | Vue3+TS 快速上手 (gitee.io)](http://huaxhe.gitee.io/vue3_study_docs/chapter2/6_other.html#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1)

## 区别：

- vue2:必须有根标签
- vue3：可以没有根标签
- difineComponent 函数 目的定义一个组件，内部可以传入一个配置对象  返回一个option对象

## 组合API

### ​setup

- 是所有组合API的入口函数   只执行一次 组件中用到的：数据、方法都要配置在setup中
- 返回一个对象 则对象的属性和方法，在模板中均可使用
- 在beforeCreate之前执行一次，this是undefined
- props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
- context：上下文对象
  - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于this.\$attrs 
  - slots: 收到的插槽内容, 相当于 this.\$slots 。
  - emit: 分发自定义事件的函数, 相当于 this.$emit 。

### ref函数

- 定义一个响应式数据，返回一个ref对象,  适用：基本类型  对象类型(一般不用ref修饰对象)   
- ==语法: const xxx = ref(内容)==
- ==操作数据: xxx.value===
- ==html 中不需要 .value==

### reactive函数

- 作用: 定义一个==对象类型的响应式数据==（基本类型不要用它，要用 ref 函数）
- 语法： const 代理对象= reactive(源对象) ==接收一个对象（或数组）==，返回一个代理对象（Proxy的实例对
  象，简称proxy对象）
- reactive定义的响应式数据是==“深层次的==”。
- 内部基于 ES6 的 ==Proxy== 实现，通过代理对象操作源对象内部数据进行操作

### reactive对比ref

- 从定义数据角度对比：
  - ref用来定义：==基本类型数据=。==
  - reactive用来定义：==对象（或数组）类型数据==
  - 备注：ref也可以用来定义==对象（或数组）类型数据==, 它内部会自动通过 reactive 转为==代理对象==
- 从原理角度对比：
  - ref通过 Object.defineProperty() 的 get 与 set 来实现响应式（数据劫持）。
  - reactive通过使用==Proxy==来实现响应式（数据劫持）, 并通过==Reflect==操作源对象内部的数据。
- 从使用角度对比：
  - ref定义的数据：操作数据==需要== .value ，读取数据时模板中直接读取==不需要 ==.value 。
  - reactive定义的数据：操作数据与读取数据：==均不需要== .value 。

### 