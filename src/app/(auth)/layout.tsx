import React from "react";
import { Card, CardContent } from "@/components/ui/Card";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-[450px] bg-authContainer !text-white border-none">
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
};

export default layout;
