import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DataTable } from "./DataTable";
import { sampleColumns, sampleData } from "../data-samples";

describe("DataTable default display tests suite", () => {
  test("All the components are displayed", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    const tableHeader = screen.getByTestId("table-header");
    const tableBody = screen.getByTestId("table-body");
    const tableEntriesSelector = screen.getByTestId("table-entries-selector");
    const tableFilter = screen.getByTestId("table-filter");
    const tableInfo = screen.getByTestId("table-info");
    const tablePagination = screen.getByTestId("table-pagination");

    expect(tableHeader).toBeInTheDocument();
    expect(tableBody).toBeInTheDocument();
    expect(tableEntriesSelector).toBeInTheDocument();
    expect(tableFilter).toBeInTheDocument();
    expect(tableInfo).toBeInTheDocument();
    expect(tablePagination).toBeInTheDocument();
  });
});
