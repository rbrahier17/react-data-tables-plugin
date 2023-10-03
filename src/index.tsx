import React from "react";
import ReactDOM from "react-dom/client";
import { DataTable } from "./data-table/DataTable";

const columns = [
  {
    title: "First Name",
    data: "firstName",
  },
  {
    title: "Last Name",
    data: "lastName",
  },
  {
    title: "Age",
    data: "age",
  },
];

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    age: "30",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: "25",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <div style={{ width: "96vw", margin: "0 auto" }}>
      <DataTable columns={columns} data={data} />
    </div>
  </React.StrictMode>
);

// Todo: scroll vertical dans les cellules pour le responsive + autre chose que j'ai oublié pour le responsive or not ?
// Todo: Tests: intégrer les fichiers tests dans les fichiers de composants directement.
