import { Stepper } from "./components/stepper";

export default function StepperDemo() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Stepper
        steps={[
          { label: "Login" },
          { label: "Shipping", description: "Address & contact" },
          { label: "Payment" },
          { label: "Review" },
        ]}
        activeStep={2}
      />
    </div>
  );
}
