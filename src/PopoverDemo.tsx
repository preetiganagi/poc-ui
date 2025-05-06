import { Popover } from "./components/popover";

export default function ExamplePopover() {
  return (
    <div>
      <h1 className="text-xl font-bold">Animation: Fade</h1>
      <Popover
        trigger={
          <button className="px-4 py-2 border rounded">Open Popover</button>
        }
        size="sm"
        bg="white"
        rounded="md"
        animation="fade"
      >
        <div className="text-sm">
          <p className="font-semibold">Popover Title</p>
          <p className="text-zinc-500 mt-1">This is a popover body.</p>
        </div>
      </Popover>

      <h1 className="text-xl font-bold">Animation: Fade</h1>
      <Popover
        trigger={
          <button className="border px-4 py-2 rounded">Open Popover</button>
        }
        animation="slideUp"
        bg="zinc"
        size="sm"
        rounded="md"
      >
        <div>
          <p className="font-semibold">Popover Title</p>
          <p className="text-sm text-zinc-500 mt-1">This is some info.</p>
        </div>
      </Popover>
      <h1 className="text-xl font-bold">Animation: Scale</h1>
      <Popover
        trigger={
          <button className="border px-4 py-2 rounded">Open Popover</button>
        }
        animation="scale"
        bg="white"
        size="sm"
        rounded="md"
      >
        <div>
          <p className="font-semibold">Popover Title</p>
          <p className="text-sm text-zinc-500 mt-1">This is some info.</p>
        </div>
      </Popover>
      <h1 className="text-xl font-bold">Animation: slideRight</h1>
      <Popover
        trigger={<button className="border px-4 py-2 rounded">Open</button>}
        animation="slideRight"
        bg="zinc"
        size="sm"
        rounded="md"
      >
        <div>
          <p className="font-semibold">Popover Title</p>
          <p className="text-sm text-zinc-500 mt-1">This content slides in.</p>
        </div>
      </Popover>
    </div>
  );
}
