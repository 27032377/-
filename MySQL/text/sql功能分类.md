# sql功能分类

## DDL:数据定义语言

用来定义数据库对象：创建库，表，列等。

- 创建数据库：create database 数据库名 character set utf8;

- 创建表：create table 表名(

    列名1 列的类型 [约束],

    列名2 列的类型 [约束],

    ......

    列名N 列的类型 [约束]
);
- 查看表的字段信息：desc 表名;

- 添加列：alter table 表名 add 列名 数据类型；

- 修改一个表的字段类型：alter table 表名 modify 字段名 数据类型;

- 删除一个列：alter table 表名 drop 字段名;

- 修改表名：rename table 原始表名 to 要修改成的表名;

- 查看表的创建细节：show create table 表名;

- 修改表的字符集：alter table 表名 character set 字符集名称;

- 修改表的列名：alter table 表名 change 原始列名 新列名 数据类型;

- 删除表：drop table 表名;

## DML:数据操作语言

用来操作数据库表中的记录(增、删、改、查)

- 插入操作：insert into 表名 (列名1，列名2...) values (列值1，列值2...);

- 批量插入: insert into 表名 (列名1，列名2...) values (1列值1，1列值2...),(2列值1，2列值2...);逗号隔开

- 更新操作：update 表名 set 列名1=列值1,列名2=列值2... where [条件];

- 修改密码：mysqladmin -u 用户名 -p password 新密码;

- 删除数据：delete from 表名 [where 列名1=列值1];

- 删除数据：truncate table 表名;

    *delete删除表中的数据，表结构还在；删除后的数据可以找回；可以删除整个表，也可以删除指定数据；*
    *truncate删除是把表直接drop掉，然后再创建一个同样的的新表；删除的数据不能找回、执行速度比delete快；不能删除指定数据。*

## DQL:数据查询语言

用来查询数据

- 结果集：数据库执行DQL语句不会对数据进行改变，而是让数据库发送结果集给客户端。通过查询语句查询出来的数据以表的形式展示，我们称这个表为虚拟结果集。存放在内存中；

- 查询所有列：select * from 表名;

- 查询指定列：select 列名1，列名2 from 表名;

- 条件查询：在查询时给出where子句，在where子句中可以使用一些运算符及关键字：
    1. =, !=, <>(不等于), <, <=, >, >=;
    2. between ... and ... ，值在什么范围;
    3. in(set) 固定的范围值;
    4. is null; is not null;
    5. and 与;
    6. or 或;
    7. not 非.

- 模糊查询：根据指定的关键字进行查询，使用LIKE关键字后面跟通配符：
    1. 通配符_：任意一个字符;
    2. 通配符%：任意0-n个字符;

- 字段控制查询：
    1. 去重记录：select distinct 字段名 from 表名;
    2. 查询字段进行计算，必须都要是数据型;
    3. 查询字段起别名，关键字as
    4. 升降序排列，关键字 order by，默认asc升序，desc降序。

- 分组查询：将查询结果按照1个或多个字段进行分组，字段值相同的为一组
    1. 当group by单独使用时，只显示出每组的第一条记录，所以单独使用时实际意义不大;
    2. 关键字：group by，group_concat(字段名);
    3. 在使用分组时，select后面直接跟的字段一般都会出现在group by后；
    4. group_concat(字段名)可以作为一个输出字段来使用;
    5. 根据分组结果，使用group_concat()来放置每一组的某字段的值的集合

## DCL:数据控制语言

用来定义访问权限和安全级别