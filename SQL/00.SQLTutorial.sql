--DML

--SELECT
--read from table
SELECT EmploeeID, YEAR(OrderDate) AS OrderYear --list name
FROM Sales.Orders --Table name
WHERE CustomerId = 71 --Condition
GROUP BY EmploeeID, YEAR(OrderDate) --Group by
ORDER BY EmploeeID, OrderYear --Order by can set ASD or DESD, custom

--INSERT
--insert new row to table
INSERT INTO Sales.OrderDetails
(orderid, productid, unitprice, qty, discount)
VALUES 
(10255, 39, 18, 2, 0.05)
(10256, 39, 18, 5, 0.10)

--DDL

--CREATE
CREATE TABLE Mytable
(Mycolumn1 int NOT NULL PRIMARY KEY,
 Mycolumn2 VARCHAR(50) NOT NULL,
 Mycolumn3 VARCHAR(10) NOT NULL)