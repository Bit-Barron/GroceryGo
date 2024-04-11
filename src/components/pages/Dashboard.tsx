import { useEffect } from "react";
import { AdminCard } from "@/components/ui/dashboard/DashboardCard";
import { AdminChart } from "@/components/ui/dashboard/DashboardChart";
import { AdminOrders } from "@/components/ui/dashboard/DashboardOrder";
import { useSnapshot } from "valtio";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { AdminQrCodeStore } from "@/store/admin/AdminQrCode";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const categoryStore = useSnapshot(AdminCategoryStore);
  const productStore = useSnapshot(AdminProductsStore);
  const qrCodeStore = useSnapshot(AdminQrCodeStore);

  useEffect(() => {
    const fetchData = async () => {
      categoryStore.getCategoriesById();
      productStore.getProductById();
      qrCodeStore.getQrCodeById();
    };
    fetchData();
  }, [categoryStore, productStore, qrCodeStore]);

  return (
    <>
      <div className="md:flex gap-10 p-4">
        <AdminCard
          amount={productStore.product.length}
          description="Products"
          percentage={productStore.product.length}
        />
        <AdminCard
          amount={categoryStore.category.length}
          description="Categories"
          percentage={categoryStore.category.length}
        />

        <AdminCard
          amount={qrCodeStore.qrCode.length}
          description="Qr Codes"
          percentage={qrCodeStore.qrCode.length}
        />
      </div>
      <div className="md:flex gap-5 p-4">
        <AdminChart />
        <AdminOrders />
      </div>
    </>
  );
};
