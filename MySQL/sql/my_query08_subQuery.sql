-- 与A在同一个部门编号中的数据，子查询，where后，把一个查询结果当做一个查询条件
-- SELECT * FROM employee emp WHERE deptmo = (SELECT deptmo FROM employee emp WHERE ename = 'A');

-- 30部门的薪水大于1700的数据，子查询，from后，将查询结果当做一个表
-- SELECT ename, salary FROM (SELECT ename, salary, deptmo FROM employee WHERE deptmo = 30) t WHERE t.salary > 1700;

-- 查询salary大于b的数据
-- SELECT ename, salary FROM employee WHERE salary > (SELECT salary FROM employee WHERE ename = 'B');

-- 查询salary大于20号部门所有人的信息
-- SELECT DISTINCT salary, ename FROM employee WHERE salary > (SELECT MAX(salary) FROM employee WHERE deptmo = 20);


-- 查询和B的工作和部门一样的信息
-- SELECT * FROM employee WHERE (job, deptmo) IN (SELECT job, deptmo FROM employee WHERE ename = 'B');
-- SELECT emp.ename, emp.job, emp.deptmo FROM employee emp, (SELECT job, deptmo FROM employee WHERE ename = 'B') t WHERE
-- emp.job = t.job AND emp.deptmo = t.deptmo;

-- 拥有2个下属的信息
-- SELECT * FROM employee WHERE empno IN (SELECT mgr FROM employee GROUP BY mgr HAVING COUNT(mgr) >= 2);

-- 编号1001的身份信息，多表联查
-- SELECT emp.empno, emp.ename, emp.salary, dep.dename, dep.`local`, gra.grade FROM employee emp, department dep,
-- grade gra WHERE dep.deptmo = (SELECT deptmo FROM employee WHERE empno = 1001)
-- AND emp.empno = 1001 AND (SELECT salary FROM employee WHERE empno = 1001) BETWEEN gra.lowSalary AND gra.highSalary;

-- 自连接，表起别名后多表联查，1001及其经理的个人信息
SELECT e1.empno, e1.ename, e2.empno, e2.ename FROM employee e1, employee e2 WHERE e1.empno = 1001 AND e1.mgr = e2.empno;
