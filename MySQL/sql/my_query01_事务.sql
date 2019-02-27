-- 开始事务
-- START TRANSACTION;

-- DML
-- UPDATE aa_account SET money = money - 500;
-- UPDATE bb_account SET money = money + 500;

-- 回滚
-- ROLLBACK;

-- 提交事务 隔离性
-- COMMIT;

-- 查看隔离级别
-- SELECT @@global.tx_isolation,@@tx_isolation;

-- 脏读
-- SET GLOBAL TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
-- UPDATE aa_account SET money = money - 500;
-- UPDATE bb_account SET money = money + 500;
-- SELECT * FROM aa_account, bb_account;
-- ROLLBACK;
-- SELECT * FROM aa_account, bb_account;

SELECT * FROM aa_account, bb_account;