import React from "react";
import { ChevronRight } from "lucide-react";
import { Breadcrumbs } from "./components/breadcrumbs";

const steps = ["Account", "Shipping", "Payment", "Review"];

const BreadcrumbsDemo = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-6">
      <h1 className="text-3xl font-bold">Breadcrumbs</h1>

      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">Variant : Text</h1>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes" },
          ]}
          variant="text"
          size="lg"
          separatorIcon={ChevronRight}
        />
      </div>

      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold"> variant: Step </h1>
        <Breadcrumbs
          variant="step"
          steps={steps}
          currentStep={2}
          size="lg"
          separatorIcon={ChevronRight}
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">
          variant: Custom, Shape:default
        </h1>
        <Breadcrumbs
          variant="custom"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes" },
          ]}
          currentStep={1}
          size="lg"
          bgColor="green"
          shape="default"
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold"> variant: Custom, Shape:pill</h1>
        <Breadcrumbs
          variant="custom"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes" },
          ]}
          currentStep={1}
          size="lg"
          bgColor="green"
          shape="pill"
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">
          {" "}
          variant: Custom, Shape:round{" "}
        </h1>
        <Breadcrumbs
          variant="custom"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes" },
          ]}
          currentStep={1}
          size="lg"
          bgColor="green"
          shape="round"
        />
      </div>
    </div>
  );
};

export default BreadcrumbsDemo;
