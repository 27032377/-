# 姓名由3个字母构成
# SELECT * FROM students WHERE name LIKE '___';

# 姓名由3个字母构成，且第二位为s
# SELECT * FROM students WHERE name LIKE '_s_';

# 姓名以l开头
# SELECT * FROM students WHERE `name` LIKE 'l%';

# 邮箱第二位为x
# SELECT * FROM students WHERE email LIKE '_x%';

# 成绩第二位为0
SELECT * FROM students WHERE score LIKE '_0';