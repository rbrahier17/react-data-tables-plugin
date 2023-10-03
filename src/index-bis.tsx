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
