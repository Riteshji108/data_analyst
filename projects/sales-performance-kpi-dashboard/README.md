# Sales Performance & KPI Dashboard

## Business objective
Analyze sales performance across time, regions, and product categories to identify revenue trends, order performance, and areas requiring attention.

## Stack
SQL • Excel • Power BI • DAX • Power Query

## KPIs
- Total Revenue
- Total Orders
- Average Order Value (AOV)
- Revenue by Region
- Revenue by Category
- Monthly Revenue Trend
- Order Volume

## Workflow
1. Load transactional data.
2. Clean and transform fields with Power Query.
3. Query and aggregate data with SQL.
4. Create a star-style analytical model.
5. Build DAX measures for KPI calculations.
6. Design an interactive Power BI dashboard with slicers for date, region and category.

## Dashboard pages
### Executive Overview
KPI cards, monthly revenue trend, regional revenue, category contribution.

### Regional Analysis
Region ranking, order volume, AOV and monthly trend.

### Product Analysis
Category revenue, order mix and performance comparison.

## Reproducibility
The repository includes synthetic transactional data and SQL queries. The numbers are intentionally generated for portfolio demonstration and are not presented as real business results.

## Files
- `data/sales_data.csv` — synthetic dataset
- `sql/analysis.sql` — analytical SQL queries
- `python/generate_data.py` — reproducible dataset generator
