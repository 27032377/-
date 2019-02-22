-- 字符串位置替换
-- SELECT INSERT ('abcdefg',1,2,'xx');

-- 字符串拼接
-- SELECT CONCAT('aaa','b','c');

-- 字符串截取
-- SELECT LEFT('abcd',2);
-- SELECT RIGHT('abcd',2);

-- 字符串填充
-- SELECT LPAD('abc',6,123456);
-- SELECT RPAD('abc',6,123456);

-- 去空格
-- SELECT LTRIM(' a b c ');
-- SELECT RTRIM(' a b c ');
-- SELECT TRIM(' a b c ');
-- SELECT TRIM(LEADING 'x' FROM 'xxxbarxxx');
-- SELECT TRIM(BOTH 'x' FROM 'xxxbarxxx');
-- SELECT TRIM(TRAILING 'x' FROM 'xxxbarxxx');

-- 重复
-- SELECT REPEAT('abc', 3)；

-- 字符串指定字符替换
-- SELECT REPLACE('abcd', 'bc', '**');

-- 字符串截取
-- SELECT SUBSTR('abcdef', 2, 3);
-- SELECT SUBSTRING('abcdef', 1, 3);

-- 绝对值
-- SELECT ABS(-2);

-- 向上取整
-- SELECT CEIL(1.1);

-- 向下取整
-- SELECT FLOOR(1.1);

-- 余数
-- SELECT MOD(17,3);

-- 随机数0-1
-- SELECT RAND();
-- SELECT CAST(RAND() AS DECIMAL(9,2)) ;

-- 返回日期、时间
-- SELECT CURDATE();
-- SELECT CURTIME();
-- SELECT NOW();

-- 时间戳
-- SELECT UNIX_TIMESTAMP();
-- SELECT FROM_UNIXTIME(1550829794);