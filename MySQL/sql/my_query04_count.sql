# 总共多少行
# SELECT COUNT(*) as total FROM students;

# email有多少行，不包含null，包含空字符串
# SELECT COUNT(IFNULL(score,0)) AS xx FROM students;

# 查询年龄最大
# SELECT MAX(age) FROM students;

# 查询年龄最小
# SELECT MIN(age) FROM students;

# age加score超过90的人的总数
# SELECT COUNT(*) FROM students WHERE IFNULL(age,0) + IFNULL(score,0) > 90;

# 计算score总和
# SELECT SUM(score) FROM students;

# 计算score和age的总和
# SELECT SUM(score),SUM(age) FROM students;

# 计算age的平均值
# SELECT AVG(age) FROM students;