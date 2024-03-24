import React from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface DialogProps {}

export const MyDialog: React.FC<DialogProps> = ({}) => {
  return (
    <DialogContent className="sm:max-w-[700px]">
      <DialogHeader>
        <DialogTitle>Add Product</DialogTitle>
        <DialogDescription>Add a new product to the store</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex">
          <Input id="name" className="!w-full" placeholder="Product Title" />
          <Input id="username" className="!w-full" placeholder="Product Price" />
        </div>
        <Input
          id="username"
          className="col-span-3 w-f"
          placeholder="Product Discount (optional)"
        />
        <Input
          id="description"
          className="col-span-3"
          placeholder="Product Description"
        />
      </div>
      <DialogFooter>
        <Button type="submit" className="text-white">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
