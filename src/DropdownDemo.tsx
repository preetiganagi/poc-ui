import { MoreVertical } from "lucide-react";
import { Dropdown, DropdownItem } from "./components/dropdown";

export default function ExampleDropdown() {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Animation: Default</h1>
        <Dropdown
          trigger={
            <button
              type="button"
              //   className="inline-flex items-center justify-center rounded-md p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
            >
              {/* <MoreVertical className="w-5 h-5" /> */} click me
            </button>
          }
          size="sm"
          rounded="md"
          bg="dark"
        >
          <DropdownItem onSelect={() => alert("Edit clicked")}>
            Edit
          </DropdownItem>
          <DropdownItem onSelect={() => alert("Delete clicked")}>
            Delete
          </DropdownItem>
        </Dropdown>
      </div>
      <div>
        <h1 className="text-xl font-bold">Animation: slideUp</h1>
        <Dropdown
          animation="slide"
          size="sm"
          rounded="md"
          trigger={
            <button
              type="button"
              //   className="inline-flex items-center justify-center rounded-md p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
            >
              {/* <MoreVertical className="w-5 h-5" /> */} click me
            </button>
          }
          bg="primary"
        >
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
        </Dropdown>
      </div>
      <div>
        <h1 className="text-xl font-bold">Animation: pop</h1>
        <Dropdown
          animation="scale"
          size="sm"
          rounded="md"
          trigger={
            <button
              type="button"
              //   className="inline-flex items-center justify-center rounded-md p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
            >
              {/* <MoreVertical className="w-5 h-5" /> */} click me
            </button>
          }
          bg="gradient"
        >
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
        </Dropdown>
      </div>
      <div>
        <h1 className="text-xl font-bold">Animation: flip</h1>

        <Dropdown
          animation="flip"
          size="sm"
          rounded="md"
          trigger={
            <button
              type="button"
              //   className="inline-flex items-center justify-center rounded-md p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
            >
              {/* <MoreVertical className="w-5 h-5" /> */} click me
            </button>
          }
        >
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
}
