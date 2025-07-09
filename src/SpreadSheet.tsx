
import { Tabs } from "../src/components/Tabs";
import { Toolbar } from "../src/components/ToolBar";

import { DataTable } from "../src/components/DataTable";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <Toolbar />
      </div>
      <div className="flex-1 overflow-auto">
        <DataTable />
      </div>
      <div className="sticky bottom-0 z-10 bg-white shadow-inner">
        <Tabs />
      </div>
    </div>
  );
}
