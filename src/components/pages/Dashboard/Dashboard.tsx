import React from "react";
import BarChart from "@/components/elements/BarChart";
import { TopCards } from "@/components/elements/TopCards";
import RecentOrders from "@/components/elements/RecentOrders";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div>
      <main className="min-h-screen bg-slate-100">
        <TopCards />
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </div>
  );
};
