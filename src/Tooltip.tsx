import { Info } from "lucide-react";
import { Tooltip } from "./components/tooltip";

export default function TooltipDemo() {
  return (
    <div className="p-6 text-center">
      <h1>
        <span className="text-3xl font-bold">Animation : fade</span>
      </h1>
      <Tooltip
        content="Helpful info here!"
        bg="slate"
        rounded="md"
        animation="fade"
      >
        <button className="p-2 rounded border inline-flex items-center gap-1">
          <Info size={16} />
          Hover me
        </button>
      </Tooltip>
      <h1>
        <span className="text-3xl font-bold">Animation : scale</span>
      </h1>
      <Tooltip
        content="Helpful info here!"
        bg="dark"
        rounded="md"
        animation="scale"
      >
        <button className="p-2 rounded border inline-flex items-center gap-1">
          <Info size={16} />
          Hover me
        </button>
      </Tooltip>
      <h1>
        <span className="text-3xl font-bold">Animation : Slidedown </span>
      </h1>
      <Tooltip
        content="Helpful info here!"
        bg="light"
        rounded="full"
        animation="slideDown"
      >
        <button className="p-2 rounded border inline-flex items-center gap-1">
          <Info size={16} />
          Hover me
        </button>
      </Tooltip>
      <h1>
        <span className="text-3xl font-bold">Animation : slideLeft </span>
      </h1>
      <Tooltip
        content="Helpful info here!"
        bg="light"
        rounded="full"
        animation="slideLeft"
      >
        <button className="p-2 rounded border inline-flex items-center gap-1">
          <Info size={16} />
          Hover me
        </button>
      </Tooltip>
    </div>
  );
}
