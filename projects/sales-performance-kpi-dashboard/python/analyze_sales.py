import os
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data/sales_data.csv", parse_dates=["order_date"])
df["month"] = df["order_date"].dt.to_period("M").astype(str)
monthly = df.groupby("month", as_index=False).agg(revenue=("revenue","sum"), orders=("order_id","nunique"), units=("units","sum"))
monthly["aov"] = monthly["revenue"] / monthly["orders"]
category = df.groupby("category", as_index=False).agg(revenue=("revenue","sum"), orders=("order_id","nunique"))
region = df.groupby("region", as_index=False).agg(revenue=("revenue","sum"), orders=("order_id","nunique"))
print("Revenue:", round(df["revenue"].sum(),2))
print("Orders:", df["order_id"].nunique())
print("AOV:", round(df["revenue"].sum()/df["order_id"].nunique(),2))
os.makedirs("outputs", exist_ok=True)
monthly.to_csv("outputs/monthly_kpis.csv", index=False)
category.to_csv("outputs/category_performance.csv", index=False)
region.to_csv("outputs/region_performance.csv", index=False)
plt.figure(figsize=(10,4)); plt.plot(monthly["month"], monthly["revenue"], marker="o"); plt.xticks(rotation=45, ha="right"); plt.title("Monthly Revenue"); plt.ylabel("Revenue"); plt.tight_layout(); plt.savefig("outputs/monthly_revenue.png", dpi=160)
