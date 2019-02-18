# select * from students;

# select name,age from students;

# SELECT * FROM students WHERE gender='male' AND age>10;

# SELECT * FROM students WHERE id>4 OR score>80;

# SELECT * FROM students WHERE id BETWEEN 3 AND 5;

# SELECT * FROM students WHERE id IN(2,3,4);

# SELECT * FROM students WHERE email IS NULL;

# SELECT * FROM students WHERE email IS NOT NULL;

SELECT name,age FROM students WHERE gender!='male';