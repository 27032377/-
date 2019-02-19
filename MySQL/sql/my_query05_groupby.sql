# 根据gender分组查询，但是只展示每组的第一条数据,关键字group by
# SELECT * FROM students GROUP BY gender;

# 根据name和gender进行分组
# SELECT `name`,gender FROM students GROUP BY `name`,gender;

# 根据gender分组，并按须展示name、score的值，关键字group_concat
# SELECT gender,GROUP_CONCAT(name),GROUP_CONCAT(score) FROM students GROUP BY gender;

# 查询每个gender的name及总数
# SELECT gender,GROUP_CONCAT(name),COUNT(*) FROM students GROUP BY gender;

# 查询分数大于50的gender、name、score
# SELECT gender,name,score FROM students where score > 50;

# 查询分数大于50的不同性别的name及总数
#SELECT gender,GROUP_CONCAT(name),COUNT(*) FROM students WHERE score > 50 GROUP BY gender;

# 查询gender分组下的score及score总和
# SELECT gender, GROUP_CONCAT(score), SUM(score) FROM students GROUP BY gender;

# 查询gender分组时score总和大于300的score及score总和
# SELECT gender, GROUP_CONCAT(score), SUM(score) FROM students GROUP BY gender HAVING SUM(score) > 300;
