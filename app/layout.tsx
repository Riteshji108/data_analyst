import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritesh Pandey | Data Analyst & Python Developer",
  description: "Portfolio of Ritesh Pandey — Data Analyst and Python Developer focused on analytics, BI, SQL, and data engineering.",
  openGraph: {
    title: "Ritesh Pandey | Data Analyst & Python Developer",
    description: "Data analytics, Python, SQL, BI dashboards, and portfolio projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
