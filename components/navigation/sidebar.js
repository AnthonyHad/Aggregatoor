import { Newspaper } from "lucide-react";

const Sidebar = () => {
  return (
    <div className=" w-40 border-r flex flex-col items-center">
      <div className="sticky top-0 space-y-4 flex flex-col items-center">
        <div className="mt-8">Image is here</div>
        <h1 className="text-xl font-semibold">Aggregatoor</h1>
        <ul>
          <li className="flex items-center gap-1">
            <Newspaper size={16} />
            All News
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
