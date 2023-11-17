// index.tsx: Used for development purposes.

import React from "react";
import ReactDOM from "react-dom";
import { DataTable } from "./index.lib";
import { sampleColumns, sampleData } from "./data-samples";

const App: React.FC = () => {
  return (
    <div>
      <DataTable columns={sampleColumns} data={sampleData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
