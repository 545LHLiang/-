# Mysql

- 启动与停止
  - services.msc     启动Mysql
  - net  start/stop mysql80 
- 客户端链接
  - 直接使用自带的
  - ==命令：mysql [-h 127.0.0.1]\[-p 3306] -u root -p==
- 关系型数据库 多张二维表组成的数据库  

## 图形化界面

- datagrip

## Sql

### 通用语法

- 单行或多行书写  分号结尾
- 空格/缩进来增强语句的可读性
- 不区分大小写  关键字建议使用大写
- 注释 -- #   /**/
- ==DDL 定义语言  DML操作语言  DQL 查询语言  DCL控制语言==

### DDL操作数据库表 表中字段

#### 数据库

- ==SHOW DATABASES== ==查询所有数据库
- ==SELECT　DATABASE（=）===查询当前数据库
- ==CREATE DATABASE 数据库名==     创建数据库   推荐使用 utf8mb4字符集
- ==DROP DATABSE 数据库名==      删除数据库
- ==USE 数据库名== == 进入/使用数据库

#### 表的查看和创建

- ==show tables； 查看当前数据库所有表==

- ==desc 表名      查询表结构==

- ==show create table 表名  查询指定表的建表语句==

- ==create table  表名() 创建表==

  - 注意：==最后一个属性不要加逗号==

- ```sql
   create table tb_user(      --comment 备注
      -> id int comment  '编号',
      -> name varchar(50) comment  '姓名',
      -> age int comment  '年龄',
      -> gender varchar(1) comment  '性别'
      -> ) comment '用户表';
     Query OK, 0 rows affected (0.03 sec)
   ```
#### 数值类型

- ![](D:\web笔记\笔记\web笔记\数值类型.png)
  - double（长度，小数位） 如100.0 设置为 double(4,1)
  - age 取值 int/tinyint unsigned 

#### 字符串

- ![](D:\web笔记\笔记\web笔记\字符串.png)
  -  文本和二进制 一般不用
  -  char(最大长度)：为占用的字符 则用空格 代替  定长长度  在不管什么情况 占用空间一样时 使用
  -  varchar(最大长度)：根据所存取的计算空间      变长长度

#### 日期时间类型

- ![](D:\web笔记\笔记\web笔记\日期.png)
  -  常用 data 年月日 time 时/分/秒  datatime  年月日时分秒

#### 案例

- 建表：编号数字 工号/姓名字符串10位 性别男/女  年龄 不为负数  身份证 18位 入职 年月日  

```sql
 create table emp(
    -> id int,
    -> gh varchar(10),
    -> name varchar(10),
    -> sex char(1),
    -> age tinyint unsigned,
    -> sfz char(18),
    -> rz  date
    -> );
    --添加字段名
     alter table emp add nickname varchar(20);
    --修改字段的 数据类型
alter table emp  modify age int;
--修改字段名和类型
alter table emp  change sex gender char(1);
--删除字段名
 alter table emp drop nickname;
 --修改表名
  alter table emp  rename to emp1;
  --删除表
  drop table  td_user；
  --删除指定表名  并重新创建改表
  truncate table td_user;
```

#### 表的操作

- alter table 表名 ==add== 字段名 类型长度  --添加字段
- alter table 表名==modify==  字段名  新类型  --修改字段类型
- alter table 表名 ==change==  原字段名  新字段名 类型   --修改字段名和类型
- alter table 表名 ==drop== 字段名  --删除字段
- alter table 原表名 ==rename to== 新表名   --修改表名
- ==drop table 表名； 删除表==            ==两种删除语法 数据都会被删除==
- truncate table 表名   删除指定表名  并重新创建改表 

### DML 数据操作语言

#### 增加数据 insert

- insert  into   表名(字段1，字段2，....) values(值1，值2，....)； 给指定字段添加数据
- insert  into   表名 values(值1，值2，....)； 给所有字段添加数据
- ==insert  into   表名(字段1，字段2，....) values(值1，值2，....)，(值1，值2，....)，(值1，值2，....)；批量添加==
- ==insert  into   表名 values(值1，值2，....)，(值1，值2，....)，(值1，值2，....)；==

#### 修改数据 update

- ==update 表名 set 字段名1=值1.字段名2=值2,.... [where 条件]；==
- update 表名 set 字段名1=值1.字段名2=值2；修改所有

#### 删除数据 delete

- ==delete from 表名  [where 条件]；--删除一条==
-   delete  from user --删除所有数据

#### 案例

- 注意：
  - ==指定字段顺序需要和值 一 一对应==
  - 字符串和日期 数据  包含在==引号==里
  - 插入数据大小应在字段范围内
  - ==修改或删除语句如果没有where 则修改或删除整张表的所有数据==
  - ==delete语句不能删除 某一字段的值(可以使用update)==

```sql
--插入数据
insert into user(id, name, age) values (001,'李慧亮',10); --指定字段插入
insert into user values (002,'scdad',16); --给所有字段插入
--批量
insert into user(id, name, age values (004,'scdad',16),(003,'scwdad',16);
insert into user values (005,'scdad',16),(006,'scwdad',16);
--修改数据
update  user set name='王五',age=18 where id=1;  --将id为1的人名字 改为王五  年龄改为18
update  user set age=19; --修改所有行
 --删除
 delete  from user where id=1; --删除id为1的人
  delete  from user --删除所有数据
```

### DQL数据查询语言

#### 编写顺序

- ==select 字段列表 from 表名 where 条件  group by 分组字段  having分组后条件 order by 排序查询 limit 分页参数==

#### 基本查询

- ==查询多个字段 select 字段1，字段2，.... from 表名    查询所有  select * from 表名==

- ==设置别名    select 字段1[as别名]，字段2[as别名]... from 表名==

- ==去重： select distinct 字段列表 from 表名==

- ```sql
  # --基本查询
  -- 查询指定字段 name workno age
  select  name,workno,age from emp;
  -- 查询所有
  select * from emp;
  -- 查询所有员工的工作地址,起别名
  select  workaddress as '工作地址' from emp;
  select  workaddress '工作地址' from emp;
  -- 查询所有员工地址 不重复
  select distinct  workaddress as work from emp;
  ```

#### 条件查询

- select 字段列表  from 表名  where 条件列表

- ![](D:\web笔记\笔记\web笔记\条件1.png)

- ```sql
  -- 条件查询
  -- 年龄等于88
  select * from emp where age=88;
  -- 年龄 小于20
  select * from emp where age<20;
  -- 年龄 小于等于20
  select * from emp where age<=20;
  --  没有省份证
  select * from emp where idcard is null ;
  -- 有身份证
  select * from emp where idcard is not null ;
  -- 年龄不等88
  select * from emp where age!=88 ;
  --  15-20
  select * from emp where age between 15 and 20;
  -- 小于25 女
  select * from emp where gender='女'and age<25 ;
  -- 年龄 18 20 40
  select * from emp where age=18 || age=20 || age=40;
  select * from emp where  age in (18,20,40);
  -- 两个字  _单个字符  %任意个字符
  select * from emp where name like '__';
  -- 省份证最后为x
  select  * from emp where idcard like '%X';
  select  * from emp where idcard like '140%';
  ```

#### 聚合函数

- 纵向计算  count 统计数量 max最大值 min 最小值 avg平均值 sum 求和

- ==select 聚合函数(字段列表) from 表名==       不计算为null的值

- ```sql
  -- 统计员工数量
  select count(id) from emp;
  select count(*) from emp;
  -- 平均年龄
  select avg(age)  from  emp;
  -- 最大年龄
  select max(age)  from  emp;
   -- 最小年龄
   select min(age)  from  emp;
  -- 北京地区 所有员工之和
  select sum(age) from emp where workaddress='北京';
  ```

#### 分组查询

- ==select 字段列表 from 表名 where 条件  group by  基于的分组字段 having 分组过滤条件==

- where 分组之前过滤   不能对聚合函数进行判断(条件不可以写聚合函数)

- having 分组之后过滤   可以对聚合函数进行判断

-  ==select 字段列表     from  表名   group by 分组字段名==

- ```sql
  -- 性别 分组  统计员工 男和女的数量
  select gender,COUNT(*) from emp group by gender;
  -- 小于45 根据地址分组  获取员工数量大于3的工作地址
  select workaddress,count(*) from emp where age <45 group by  workaddress having count(*)>3;
  ```

#### 排序查询

- order by

- select 字段列表 from 表名 ==order by== 字段1 排序方式2，字段1 排序方式2， 

- == asc 升序默认  desc 降序==

- ==如果是多字段排序，第一个字段值相同时，才会执行第二个字段==

- ```sql
  -- 年龄升序
  select * from emp  order by age ;
  -- 入职时间 降序
  select * from emp  order by entrydate desc ;
  -- 年龄升序 如果年龄相同，则入职时间降序
  select * from emp  order by age,entrydate desc ;
  -- 分页查询  
  select * from emp limit 9,3;
  -- 第一页  10
  select  * from  emp limit 10;
  -- 第二页  2-1 *10
  select  * from  emp limit 10,10;
  ```

#### 分页查询

- limit
- select 字段列表 from 表名 limit 起始索引，查询记录；
- 从0开始   起始索引=（查询页码-1）*记录数
  - 如 每页显示10跳  则 查询第二页  = （2-1）*10  limit 10,10

#### 案例

```sql
-- 查询 年龄 20 21 22 23员工信息
select * from  emp where  age in(20,21,22,23);
-- 性别 男  年龄20-40 名字 2个
select * from  emp where gender='男' and age between 20 and 40 and  name like '__';
-- 年龄小于 60  男性和女性的人数
select gender,count(*) from emp where  age<60 group by gender;
-- 年龄 小于等于 35的姓名和年龄 对结果 年龄升序 相同则入职时间 降序
select  age,name from emp where  age<=35 order by age, entrydate desc ;
-- 性别为男  年龄20-40 前5个  年龄升序 入职升序
select * from emp where gender='男' and age between 20 and 40  order by age,entrydate limit 2;
```

#### 执行顺序和编写

- from where group by select  order by  limit   执行
- select from where group by having  order by limit  编写

![](D:\web笔记\笔记\web笔记\Dql.png)

### DCL 控制数据语言

![](D:\web笔记\笔记\web笔记\DCL.png)

### 函数

- mysql内置函数  

#### 字符串函数

- ![](D:\web笔记\笔记\web笔记\字符串函数.png)

#### 数值函数

![](D:\web笔记\笔记\web笔记\数值函数.png)

#### 日期函数

![](D:\web笔记\笔记\web笔记\日期函数.png)

#### 流程函数

- ifnull('','123')  ' '  ifnull(null,'123')  '123'  
- if(true,1,2) 1     if(false,1,2) 2

![](D:\web笔记\笔记\web笔记\流程.png)

![](D:\web笔记\笔记\web笔记\case.png)

```sql
-- 为工号补0
update emp set workno= lpad(workno,5,'0');
--生成六位验证码  由于第一位 0不显示 需要补0
select  rpad(ceil(rand()*1000000),6,'0');
-- 查询 所有员工 入职天数(当前时间 距离 入职时间的天数)  并根据入职天数 进行降序
select name, datediff(curdate(),entrydate) as 'data' from emp order by data desc;
-- 北京显示 一线  阳泉显示 五线 其他 为工作地址
select
     name,
     (case workaddress when '北京' then '一线' when '阳泉' then '五线' else workaddress end) '工作地址'
from emp;
```

### 约束

![](D:\web笔记\笔记\web笔记\约束.png)

==约束是作用与表中字段上的==

![](D:\web笔记\笔记\web笔记\约束1.png)

```sql
create  table  users(
    id int  primary key  auto_increment comment '编号',
    name varchar(10) not null unique comment '姓名',
    age int check (age>0&&age<20 ) comment '年龄',
    status char(1) default 1 comment '状态',
    gender char(1) comment '性别'
) comment '用户表';
```

#### 外键约束

- 让两张表的数据之间建立连接

- 关联表的数据 无法直接删除

- 添加外键 创建时   最后  constraint fk_xbuser_dept_id foreign key (dept_id) references dept(id)

-  alter table  表名  add constraint   外键名称fk_表名_字段名   foreign key(字段名)    references 那个表(那列)； 

- 删除外键

- alter table 表名 drop foreing key 外键名

- ![](D:\web笔记\笔记\web笔记\empd.png)empd

- ![](D:\web笔记\笔记\web笔记\dept.png) dept

- ```sql
  -- 添加外键
  -- alter table  表名  add constraint   外键名称fk_表名_字段名   foreign key(字段名)    references 那个表(那列)；
  alter  table  empd add  constraint fk_empd_dept_id foreign key(dept_id) references dept(id);
  -- 创建时 添加外键
  create table xbuser(
      id int auto_increment primary key ,
      name varchar(50) not null ,
      dept_id int comment '部门ID',
      constraint fk_xbuser_dept_id foreign key (dept_id) references dept(id)
  );
  insert into xbuser(id,name,dept_id) values (1,'李四',2),(2,'王五',1);
  -- 删除外键
  alter table  xbuser drop  foreign key fk_xbuser_dept_id;
  ```

#### 外键 删除/更新行为

- 加在最后 on update xxx  ondelete xxx

![](D:\web笔记\笔记\web笔记\外键行为png.png)

#### 总结

![](D:\web笔记\笔记\web笔记\约束小结.png)

### 多表查询

#### 多表关系

- 多的一方建立外键，指向唯一的方的主键

- ![](D:\web笔记\笔记\web笔记\一对多.png)

  ![](D:\web笔记\笔记\web笔记\多对多.png)

  ![](D:\web笔记\笔记\web笔记\一对一.png)

####  多表查询

- select * from 表一，表二  where  当前.id=外键表.id； 会出去两个表中的 数据的组合  加入条件消除笛卡尔积

#### 连接查询

![](D:\web笔记\笔记\web笔记\连接.png)

##### 内连接

- 绿色部分的数据
- 隐式内连接： select 字段列表 from 表1，表2 where 条件...；

![](D:\web笔记\笔记\web笔记\隐.png)

- 显示: select 字段列表 from 表1 [inner] join 表2 on  where 条件...；  

![](D:\web笔记\笔记\web笔记\显.png)

##### 外连接

- 自己 和绿色
- 左 select 字段列表 from 表1 left  join 表2 on 条件...；
- 右 select 字段列表 from 表1 right  join 表2 on 条件...；

![](D:\web笔记\笔记\web笔记\外连接.png)

##### 自连接

- select 字段列表 from 表1 别名1 join 表1 别名 表2 on 条件

- ==可以是内连接查询 也可以时外连接查询           必须起别名==

  ![](D:\web笔记\笔记\web笔记\自查询.png)

#### 联合查询

- select 字段列表 from 表a ... union all select 字段列表 from 表b ...；
- 若出现重复   将 all 省略
- ![](D:\web笔记\笔记\web笔记\联合.png)

#### 子查询

- sql 嵌套select语句 嵌套语句 又称子查询
- 根据查询位置分为：where之后  from之后 select之后 
- ![](D:\web笔记\笔记\web笔记\子查询.png)

##### 标量子查询

- 子查询返回结果为 单个值(数字、字符串、日期) 常见操作符 = <> > >= < <=

- ![](D:\web笔记\笔记\web笔记\日期1.png)

- ![](D:\web笔记\笔记\web笔记\数值.png)

- ```sql
  -- 子查询
  -- 查询 开发部 所有员工信息    empd 员工表  dept 部门表   条件： 员工对应的部门中的开发部
  -- a.查询开发部 部门 id
  select id from dept where name='开发部'；
  -- 查询 部门id 对应的员工的所有信息
  select * from  empd where dept_id=(select id from dept where name ='开发部');
  -- 查询 ‘李四’入职之后的员工信息
  select * from empd where  entrydate>(select entrydate from empd where name='李四')
  ```

##### 列子查询

- 子查询返回 一列 可以是多行     in   not in  any 任意满足一个  some  all 全部满足

- ![](D:\web笔记\笔记\web笔记\一列多行.png)

- ```sql
  -- 查询 开发部 和 研发部的 所有员工信息
  select * from empd where  dept_id in(select id from dept where name='开发部'or name = '研发部');
  -- 查询 比开发部所有人工资高的员工
  select  * from  empd where salary > all (select salary from empd where dept_id =(select id from dept where name='开发部'));
  -- 查询 比开发部任意一人工资高的员工
  select  * from  empd where salary > any (select salary from empd where dept_id =(select id from dept where name='开发部'));
  select  * from  empd where salary > some (select salary from empd where dept_id =(select id from dept where name='开发部'))
  ```

##### 行子查询

- 子查询返回一行  多列 = <>、in 、not in

- ![](D:\web笔记\笔记\web笔记\一行多列.png)

- ```sql
  -- 查询与张三 薪资和直属领导   相同的
  select  * from empd where (salary,managerid) = (select salary,managerid from empd where name='张三');
  ```

##### 表子查询

- 子查询返回多行多列   IN   from 之后
- ![](D:\web笔记\笔记\web笔记\表查询.png)
- ![](D:\web笔记\笔记\web笔记\表查询1.png)



