# 笛卡尔积现象
# SELECT * FROM students,teachers;

# 99写法
SELECT st.name AS xx, te.name AS oo FROM students st, teachers te, tea_stu_rel rel WHERE st.sid = rel.sid AND te.tid = rel.tid;

# 内联写法
# SELECT * FROM students st INNER JOIN teachers te INNER JOIN tea_stu_rel rel ON st.sid = rel.sid AND te.tid = rel.tid WHERE te.name LIKE '_p';

# 左连接，左边表里面的数据全部查出来，右边表差满足条件的
# SELECT * FROM students stu LEFT OUTER JOIN tea_stu_rel rel ON stu.sid = rel.sid;

# 右连接，右边表里面的数据全部查出来，左边表满足条件查出来
# SELECT * FROM students stu RIGHT OUTER JOIN tea_stu_rel rel ON stu.sid = rel.sid;

-- <= >=查询员工信息 99连接
-- SELECT emp.empno, emp.ename, emp.salary, dep.local, dep.dename, gra.grade FROM department dep, employee emp, grade gra WHERE dep.deptmo = emp.deptmo AND
-- emp.salary <= gra.highSalary AND emp.salary >= gra.lowSalary ORDER BY emp.empno ASC;

-- between and 查询员工信息 99连接
-- SELECT emp.empno, emp.ename, emp.salary, dep.local, dep.dename, gra.grade FROM department dep, employee emp, grade gra WHERE
-- dep.deptmo = emp.deptmo AND emp.salary BETWEEN gra.lowSalary AND gra.highSalary ORDER BY emp.empno ASC;

-- 内连接
-- SELECT emp.empno, emp.ename, emp.salary, dep.local, dep.dename, gra.grade FROM department dep INNER JOIN  employee emp INNER JOIN
-- grade gra ON dep.deptmo = emp.deptmo AND emp.salary BETWEEN gra.lowSalary AND gra.highSalary ORDER BY emp.empno ASC;

-- 自然连接，关键字：natural join
-- SELECT * FROM employee NATURAL JOIN department;
-- SELECT emp.empno, emp.ename, emp.salary, dep.local, dep.dename, gra.grade FROM department dep NATURAL JOIN  employee emp INNER JOIN
-- grade gra ON emp.salary BETWEEN gra.lowSalary AND gra.highSalary ORDER BY emp.empno ASC;
