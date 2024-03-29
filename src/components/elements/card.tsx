import React from "react";

interface AdminCardProps {
  amount: number;
  description: string;
  percentage: number;
}

export const AdminCard: React.FC<AdminCardProps> = ({
  amount,
  description,
  percentage,
}) => {
  return (
    <div className="grid  gap-4 p-4 w-full">
      <div className="lg:col-span-2 col-span-1 bg-cardBackground flex justify-between w-full border border-cardBorder p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-white">{`${amount}`}</p>
          <p className="text-white">{description}</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-4 rounded-lg">
          <span className="text-green-700 text-lg">{`+${percentage}`}</span>
        </p>
      </div>
    </div>
  );
};
