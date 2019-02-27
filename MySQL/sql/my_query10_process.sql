-- --存储过程，delimiter防止分号执行
-- delimiter $$
-- CREATE PROCEDURE show_emp()
-- BEGIN
-- --声明变量
-- DECLARE avg VARCHAR(255) DEFAULT '';
-- DECLARE x,y INT DEFAULT 0;
-- DECLARE avgRes DOUBLE DEFAULT 0;
-- --变量赋值
-- SET x = 3;
-- --查询并赋值
-- SELECT AVG(salary) INTO avgRes FROM employee;
-- END$$
-- delimiter ;

-- CALL show_emp();


-- 根据传入的姓名，查询该人的相关信息，IN为入参

-- delimiter $$
-- 
-- CREATE PROCEDURE emp_name(IN name VARCHAR(255))
-- BEGIN
-- DECLARE p VARCHAR(255) DEFAULT '';
-- SET p = name;
-- SELECT * FROM employee WHERE ename = p;
-- END$$
-- 
-- delimiter ;
-- 
-- CALL emp_name('A');


-- 根据传入的值得到返回结果，IN为入参，OUT为返回结果

-- delimiter $$
-- 
-- CREATE PROCEDURE get_res(IN name VARCHAR(255), OUT xy INT)
-- BEGIN
-- 
-- SELECT salary INTO xy FROM employee WHERE ename = name;
-- 
-- END$$
-- 
-- delimiter ;
-- 
-- CALL get_res('B', @xx);
-- 
-- SELECT @xx FROM DUAL;


-- INOUT既是输入，也是输出

-- delimiter $$
-- CREATE PROCEDURE test (INOUT num INT, IN inc INT)
-- BEGIN
-- 
-- SET num = num + inc;
-- 
-- END$$
-- delimiter ;
-- 
-- SET @num1 = 20;
-- 
-- CALL test(@num1, 10);
-- 
-- SELECT @num1 FROM DUAL;


-- 自定义函数

-- 随机生成一个指定个数的字符串
-- delimiter $$
-- 
-- CREATE FUNCTION rand_str (n INT) RETURNS VARCHAR(255)
-- 
-- BEGIN
-- -- 声明一个str 52个字母
-- DECLARE str VARCHAR(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
-- 
-- -- 记录当前是第几个
-- DECLARE i INT DEFAULT 0;
-- 
-- -- 生成的结果
-- DECLARE res_str VARCHAR(255) DEFAULT '';
-- 
-- WHILE i < n DO
-- 
-- SET res_str = CONCAT(res_str,SUBSTR(str, FLOOR(1 + RAND() * 52), 1));
-- 
-- SET i = i + 1;
-- 
-- END WHILE;
-- 
-- RETURN res_str;
-- 
-- END$$
-- 
-- delimiter ;
-- 
-- SELECT rand_str (3) FROM DUAL;


delimiter $$

CREATE PROCEDURE insert_emp (IN startNum INT, IN maxNum INT)
BEGIN

DECLARE i INT DEFAULT 0;

-- 默认情况下是自动提交sql语句

SET autocommit = 0; -- 不让它自动提交sql

REPEAT
SET i = i + 1;

INSERT INTO students VALUES (startNum + i, rand_str(2));

UNTIL i = maxNum
END REPEAT;
commit; -- 整体提交所有的sql，提高效率

END$$

delimiter ;

CALL insert_emp(4, 1000);

SELECT COUNT(*) FROM students;