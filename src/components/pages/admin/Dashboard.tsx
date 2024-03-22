import React from "react";
import BarChart from "@/components/elements/admin/dashboard/BarChart";
import RecentOrders from "@/components/elements/admin/dashboard/RecentOrders";
import { TopCards } from "@/components/elements/admin/dashboard/TopCards";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <section className="min-h-screen bg-slate-100">
      <TopCards />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <BarChart />
        <RecentOrders />
      </div>
    </section>
  );
};
