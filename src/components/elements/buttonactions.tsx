import React from "react";
import { Button } from "@/components/ui/button";

interface buttonactionsProps {}

export const ButtonActions: React.FC<buttonactionsProps> = ({}) => {
  return (
    <div className="flex justify-end space-x-5 text-white">
      <Button type="button" className="!bg-blue-500">
        Cancel
      </Button>
      <Button type="submit" className="!bg-blue-500">
        Save
      </Button>
    </div>
  );
};
