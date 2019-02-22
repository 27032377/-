# 创建主键
# CREATE TABLE person(ID BIGINT PRIMARY KEY,NAME VARCHAR(50));
# CREATE TABLE person(ID BIGINT,NAME VARCHAR(50),AGE INT,PRIMARY KEY(ID));

# 联合主键
# CREATE TABLE person(ID BIGINT,SNUM BIGINT, NAME VARCHAR(20), PRIMARY KEY(ID, SNUM));

# 主键约束，先创建表，再去修改表，添加主键
# CREATE TABLE person(sid INT, name VARCHAR(10));
# ALTER TABLE person ADD CONSTRAINT PRIMARY KEY(sid);

# 唯一约束，值唯一，可以为null
# CREATE TABLE person(id INT PRIMARY KEY, name VARCHAR(10) UNIQUE);

# 自动增长列
# CREATE TABLE person(id INT PRIMARY KEY auto_increment,name VARCHAR(10) UNIQUE)

# 域完整性，not null，gender默认为男
# CREATE TABLE person(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(10) UNIQUE NOT NULL, gender CHAR(1) DEFAULT '男');

# 创建关联表
# CREATE TABLE students(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20) NOT NULL, age INT);
# CREATE TABLE score(sid INT,score INT,CONSTRAINT sc_st FOREIGN KEY(sid) REFERENCES students(id));

# 创建关联表
# CREATE TABLE score(sid INT NOT NULL, score INT);
# ALTER TABLE score ADD CONSTRAINT sc_stu FOREIGN KEY (sid) REFERENCES students(id);

# 创建关系表
# CREATE TABLE teachers(tid INT PRIMARY KEY, name VARCHAR(20));
# CREATE TABLE students(sid INT PRIMARY KEY, name VARCHAR(20));
# CREATE TABLE tea_stu_rel(tid INT,sid INT);
# ALTER TABLE tea_stu_rel ADD CONSTRAINT FOREIGN KEY (tid) REFERENCES teachers(tid);
# ALTER TABLE tea_stu_rel ADD CONSTRAINT FOREIGN KEY (sid) REFERENCES students(sid);

-- CREATE TABLE employee(empno INT PRIMARY KEY, ename VARCHAR(20) NOT NULL, job VARCHAR(20) NOT NULL,
-- mgr INT, hiredate DATE, salary INT NOT NULL, comm INT, deptmo INT NOT NULL);
-- INSERT INTO employee (empno, ename, job, mgr, hiredate, salary, comm, deptmo) VALUES
-- (1003, 'C', '经理', 9008, '2016-02-03', 2458, 500, 30);
-- DELETE FROM employee WHERE empno = 1003;
-- UPDATE employee SET hiredate = '2017-02-03' WHERE empno = 1003;
-- CREATE TABLE department (deptmo INT PRIMARY KEY, dename VARCHAR(20) NOT NULL,
-- local VARCHAR(20) NOT NULL);
-- CREATE TABLE grade (grade INT PRIMARY KEY AUTO_INCREMENT, lowSalary INT UNIQUE NOT NULL, highSalary INT UNIQUE NOT NULL);