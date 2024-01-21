import React from "react";
import CreateVendorForm from "@/components/forms/CreateVendorForm";
import DetailsHead from "@/components/DetailsHead";

const AddVendor = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={"Create Vendor"} type={"create"} />
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <CreateVendorForm />
      </div>
    </div>
  );
};

export default AddVendor;
