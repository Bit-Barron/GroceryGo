import React from "react";
import BarChart from "@/components/elements/barchart";
import { TopCards } from "@/components/elements/topcards";
import RecentOrders from "@/components/elements/recentorders";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div>
      <main className="min-h-screen">
        <TopCards />
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </div>
  );
};
