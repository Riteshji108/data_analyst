-- Executive KPIs
SELECT ROUND(SUM(revenue),2) AS total_revenue, COUNT(DISTINCT order_id) AS total_orders, ROUND(SUM(revenue)/COUNT(DISTINCT order_id),2) AS avg_order_value, SUM(units) AS total_units FROM sales;

-- Monthly trend
SELECT DATE_TRUNC('month', order_date)::date AS month, ROUND(SUM(revenue),2) AS revenue, COUNT(DISTINCT order_id) AS orders FROM sales GROUP BY 1 ORDER BY 1;

-- Category ranking
SELECT category, ROUND(SUM(revenue),2) AS revenue, COUNT(DISTINCT order_id) AS orders, ROUND(SUM(revenue)/COUNT(DISTINCT order_id),2) AS aov FROM sales GROUP BY category ORDER BY revenue DESC;

-- Regional ranking
SELECT region, ROUND(SUM(revenue),2) AS revenue, COUNT(DISTINCT order_id) AS orders FROM sales GROUP BY region ORDER BY revenue DESC;
