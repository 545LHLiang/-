# 电商后台管理系统(前后端分离)

- vue2 ： element-ui@2.15.13   less@3    less-loader@4
- 语法警告eslint  

## git命令

- git  status  查看状态
- git add .    提交暂存区
- git commit 提交本地仓库中
- git branch  查看分支
- git checkout -b  xxx   创建分支
-  git checkout 分支名  切换分支
- git merge 子分支名     将子分支合并到主
- git push -u origin 分支名  将本地子分支推送到云端 (进入子分支 执行命令)
- 创建分支、完成分支 、分支完成后提交本地仓库中 、切换到主分支、合并分支 、git push


## 初始化

- vue  ui
- 托管到码云  
  -  ssh密钥
  -  创建仓库 上传

##Element-UI

- ```js
  npm i element-ui -S  npm i element -S  npm install babel-plugin-component -D
  npm i @babel/preset-env -D
  //bable.config.js
  module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset',
      ["@babel/preset-env", { "modules": false }]
    ],
    "plugins": [
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
  }
  ```

  ​

- ![](D:\web笔记\笔记\web笔记\element.png)

- 查看文档

### Form使用

- form标签属性  :mode='表单数据对象' :rules='表单验证对象'   label-width  长度 

- form-item ：prop='验证数组名'

- 重置按钮方法： 对form 标签添加 ref属性  对重置按钮添加点击事件  执行 this.$refs.LoginForm.resetFields() 

- 表单预校验：  this.$refs.LoginForm.validate(valid => {})

- ```js
  //重置   
  restLonginForm () {
        this.$refs.LoginForm.resetFields()
      },
     //登录
      Longin () {
        this.$refs.LoginForm.validate(valid => {
          if (!valid)  return
        })
      }
  ```

- 消息提示  Message  按需引入需要  加入vue原型 成为全局 this.$Message 调用    成功success  失败 error

- 用到的组件  布局  菜单 

- ​

## Axios配置

### 尚硅谷二次封装

```js
import axios from "axios"
//利用axios对象方法 create 创建一个axios实例
const requests = axios.create({
baseURL:'/api',//发请求时路径会出现 api
setTimeout:5000,//请求时间超过5s
})
//请求拦截器
requests.interceptors.request.use((config)=>{
//config：配置对象 对象里面含有一个属性很重要 headers请求头
return config; //直接返回这个对象
})
//响应拦截器
requests.interceptors.response.use((res)=>{
//成功回调函数：反应数据回来后，
return res.data
},(err)=>{
return Promise.reject(new Error('faile')
})
export default requests
```



### 黑马将Axios绑定为全局

```js
//引入包
import axios from 'axios' //或者 import axios from '二次封装的文件'
//配置根路径
axios.defaults.baseURL=' 请求根路径'
Vue.prototype.$http =axios
//使用  看登录
方法前 async    const {data:res} =  await this.$http.post/get('路径'，数据)
```



## 登录退出

- 点击登录后 将用户名和密码  调用接口验证  通过服务器返回的状态 和 token 返回     是否跳转
- 通过token 方式维持状态   (前端与服务器不存在跨域 使用 cookie 和 seesion)
- token 服务器生成token并返回  客户端存取token  后续携带此token发请求   服务器验证token
- localstorage/sessionStorage 方法  setItem   getItem   clear()清楚 
- 使用element-ui表单验证通过后 进行实现  message 弹窗![](D:\web笔记\笔记\web笔记\后台ogin.png)

### 路由全局守卫

- to: 将要访问的路径   from：从哪个路径来的 
-  next 放行  next（） next（'路径'）强制跳转到
- ![](D:\web笔记\笔记\web笔记\后台ogin守卫.png)

### 退出

- ![](D:\web笔记\笔记\web笔记\退出.png)

## 主页

- 携带请求头 xxx字段提供 token
- 通过axios请求拦截器添加token ![](D:\web笔记\笔记\web笔记\请求拦截器.png)
- 选取数据     vuex三联环 或者 全局请求 放入data中   

### mock使用

- 安装 mockjs      创建mock文件夹 新建mockserve.js和 .json文件数据

- mockserve.js 文件  引入mockjs  和 .json文件  mock('请求路径'，{code：200， .json文件名})

- ```js
  import Mock from "mockjs";
  //放在
  import banner from './banner.json'
  import floor from "./floor.json"
  Mock.mock('/mock/banner',{code:200,banner})
  Mock.mock('/mock/floor',{code:200,floor})
  ```

- 将mockserve.js 引入 main.js中

- 请求mock数据    将axios二次封装复制一份改为mockrequest  将baseURL改为/mock 

- ```js
  // 在api/index.js 下
  export const reqmeun = () => mockreq({
    method: 'GET',
    url: '/meun'
  })
  //将mocreq.js 二次封装 挂入全局  main.js
  import mock from '@/api/mockreq'
  Vue.prototype.$Mock = mock
  //使用   组件中
  import { reqmeun } from '@/api/index'
   async getmeun () {
        const reslut = await reqmeun()
        //全局api 
        const reslut=await this.$mockhttp.get('/meun') 
        //将数据保存到data中
        this.meunlist = reslut.meun
      }
  ```

### 折叠侧边栏

- ul组件中提供了  :collapse="ismeun" 是否折叠    :collapse-transition="false"  是否有动画
- 给\<el-aside :width="ismeun ? '64px' : '200px'"> 动态改变大小

###侧边栏二级路由

- 重定向 及elementui跳转  给el-menu标签 添加router属性开启路由跳转  将 index动态赋值为数据中的path

- ```js
  <el-menu-item
                :index="'/'+s.path">
   {
        path: '/home',
        // eslint-disable-next-line arrow-spacing
        component: () => import('@/components/Home'),
        redirect: '/welcome',
        children: [
          {
            path: '/welcome',
            component: () => import('@/components/Welcome')
          },]
  }
  ```



### 侧边栏完善

- 进入默认高亮： el-menu 添加属性 default-active="path路径"  
- 保存链接激活状态  default-active="\$route.fullpath"   或者 点击事件  将path地址传入方法中 保存到本地 
- ![](D:\web笔记\笔记\web笔记\保存链接激活状态.png)
- 用户列表 card 为白色卡片    row为一行   ：gutter 为间距 span：多宽   data：显示数据 lable字段名  prop显示数据信息
- ![](D:\web笔记\笔记\web笔记\searchpng.png)
-   data：显示数据 lable字段名  prop显示数据信息  border 边框   stripe  隔行变色
- ![](D:\web笔记\笔记\web笔记\users.png)

- 使用作用域插槽 显示修改状态 通过scope.row 获取该行数据 的状态值
- ![](D:\web笔记\笔记\web笔记\状态.png)
- 操作   tooltip 移入按钮 上方提示  enterable='false' 自动隐藏![](D:\web笔记\笔记\web笔记\操作.png)
- 分页器  第一方法 当前显示条数   第二个 当前第几页 
- ![](D:\web笔记\笔记\web笔记\分页器1.png)
- ![](D:\web笔记\笔记\web笔记\分页器.png)

### 搜索

- 双向绑定数据  获取数据 请求  返回 渲染

### 添加用户

- 弹出对话框  visible 显示隐藏  data定义 add默认flase 点击取消或者确认 将ad值设为false 添加 设为true
- 将内容主体区域设置为 自己想要的页面  
- 自定义规则 在data 中自定义一个校验函数  再检验rules 中使用 validator：函数名   看文档![](D:\web笔记\笔记\web笔记\自定义.png)
- ​
- ![](D:\web笔记\笔记\web笔记\对话框.png)

### 关闭对话框 处理函数

- @close='aaaa'   a(){this.\$ref.xxxx.reseFields()}

### 确定 

- 点击确定  调用预校验方法 回调函数发送请求（添加修改 删除 同理）

## 权限

- 展开列 type=expand  索引列 index
- 展开实现
  - 请求 获取当前用户下的权限列表  v-for嵌套渲染
- 删除权限：传入角色id和权限id 请求   （根据api接口 写） 直接页面返回的数据重新赋值
- 分配权限
  - 树形控件  data数据 props绑定对象   lable 展示名字  children中名字  
  - show-checkbox 显示复选框  node-key唯一标识  default-expand-all 默认都展开![](D:\web笔记\笔记\web笔记\树形控件.png)
  - 通过递归获取所有三级权限的id
  - ![](D:\web笔记\笔记\web笔记\递归循环数组获取.png)
  - 在展开对话框时  调用递归方法 传入 数据和 定义的数组  关闭对话框时去情空数组
  - 分配权限： 第一个获取已选中节点的id   半展开节点的id  ...扩展运算符 合并到数组 发请求
  -  ![](D:\web笔记\笔记\web笔记\分配 请求.png)
  - 分配角色 同分配权限


## 数据统计

- echart   安装引入

- 初始化     var echart = echarts.init(dom节点，"light"/"dark");  亮或暗

- 定义选项option 

  ```js
     var option = {
          title: {  //标题
              text: "第一个表格"
          },
          color: ["#e01f54", "#001852", "#f5e8c8",],  //颜色
          legend: {  //图例
              data: ["成绩"]
          },
          tooltip: {}, //提示
          xAxis: {    //x轴
              data: ["3.1", "3.2", "3.3", "3.4", "3.5"]
          },
          yAxis: {}, // y轴 
          series: [{     //系列数据
              type: "bar",  //bar 柱状图   line 线   pie 饼状图
              data: [90, 80, 100, 60, 80],
              name: "成绩"
          }]
      }
  ```

- 更新选项  echart.setOption(option);

- 渲染服务器对象时  将服务器返回的数据 和 data模版数据 进行合并对象 最后提交到echart

- 引入  import _ from 'lodash'

- ![](D:\web笔记\笔记\web笔记\lodash 合并对象.png)

## 优化和尚硅谷补充

- 打包生成报告  通过 vue ui 可视化面板进行查看
- 第三方库启用CDN资源  在vue.config.js 添加 config.set（）方法 externals
- 最后在html 中引入第三方库的的js网络地址
  - ![](D:\web笔记\笔记\web笔记\cdn.png)
- Element-UI按需加载
- 路由懒加载
- 首页内容定制
- bulid 移除console命令 npm instal bable-plugin-transform-remove-console --D
- ![](D:\web笔记\笔记\web笔记\移除console.png)



## node 创建web服务器

- 打开打包好的项目
- ![](D:\web笔记\笔记\web笔记\服务器打开打包好的项目.png)