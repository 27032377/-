# 根据gender分组查询，但是只展示每组的第一条数据,关键字group by
# SELECT * FROM students GROUP BY gender;

# 根据name和gender进行分组
# SELECT `name`,gender FROM students GROUP BY `name`,gender;

# 根据gender分组，并按须展示name、score的值，关键字group_concat
# SELECT gender,GROUP_CONCAT(name),GROUP_CONCAT(score) FROM students GROUP BY gender;