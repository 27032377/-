const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'my_test02'
})

connection.connect();

/**
 * nodejs连接数据库查询数据
 * 
 * let queryStr = 'SELECT * FROM employee;'
 * connection.query(queryStr, (error, results, fields) 
 * => {
 * if (error) throw error;
 * console.log(JSON.stringify(results[1]))
 * })
*/

/** 插入数据
* let addsql = 'INSERT INTO employee (empno, ename, job, mgr, hiredate, salary, comm, deptmo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
* let addSqlParams = [1006, 'F', '经理', 9007, '2017-09-11', 2388, 600, 10];

* connection.query(addsql, addSqlParams, (err, result) => {
*    if (err) throw err;
*     console.log(result);
* })
*/

/** 更新数据
* let modSql = 'UPDATE employee SET comm = ? WHERE empno = 1002';
* let modParams = [null];
* connection.query(modSql, modParams, (err, result) => {
*     if (err) throw err;
*     console.log(result);
* })
*/

// let delSql = 'DELETE FROM employee WHERE empno = 1006';
// connection.query(delSql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
// })
// connection.end();

