import React from "react";
import ReactDOM from "react-dom/client";
import { DataTable}  from "./data-table/DataTable";

// Import fake data
import { sampleColumns, sampleData } from "./data-samples";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <div style={{ width: "96vw", margin: "0 auto" }}>
      <DataTable columns={sampleColumns} data={sampleData} />
    </div>
  </React.StrictMode>
);

// Todo: scroll vertical dans les cellules pour le responsive + autre chose que j'ai oublié pour le responsive or not ?
// Todo: Tests: intégrer les fichiers tests dans les fichiers de composants directement. 
