# SELECT name from students;

# 去重
# SELECT DISTINCT name from students;

# score和age相加
# SELECT *,score+age FROM students;

# score加age设为字段名total，如果为null则置换为0，关键字as
# SELECT *,IFNULL(age,0)+IFNULL(score,0) AS total FROM students;

# 按照intime时间升序
# SELECT * from students ORDER BY intime ASC;

# 按照intime时间降序
# SELECT * from students ORDER BY intime DESC;

# 按照intime降序，id降序排列
# SELECT * FROM students ORDER BY intime DESC,id DESC;

SELECT * FROM students WHERE age>=20 ORDER BY id DESC;