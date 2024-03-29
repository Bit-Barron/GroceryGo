import { useState } from "react";
import { AdminCard } from "@/components/elements/Card";
import { CategoriesProps, ProductsProps } from "@/types/interface";
import { AdminChart } from "@/components/elements/Chart";
import { AdminOrders } from "@/components/elements/Order";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [category, setCategory] = useState<CategoriesProps[]>([]);

  return (
    <>
      <div className="flex gap-10 p-4">
        <AdminCard
          amount={products.length}
          description="Products"
          percentage={products.length}
        />
        <AdminCard
          amount={category.length}
          description="Categories"
          percentage={category.length}
        />

        <AdminCard
          amount={category.length}
          description="Categories"
          percentage={category.length}
        />
      </div>
      <div className="flex gap-5 p-4">
        <AdminChart />
        <AdminOrders />
      </div>
    </>
  );
};
