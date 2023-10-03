import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "../../data-table/DataTable";
import { sampleColumns, sampleData } from "../../data-samples";

describe("TableHeader tests suite", () => {
  test("All column headers are displayed", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    sampleColumns.forEach((column) => {
      const columnHeader = screen.getByText(column.title);
      expect(columnHeader).toBeInTheDocument();
    });
  });

  test("Sorting by First Name in descending order", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const firstNameSortButton = screen.getByRole("button", { name: "First Name" });
    fireEvent.click(firstNameSortButton);

    // Get table rows
    const rows = screen.getAllByRole("row");

    // The first table row is the header TR so tbody rows begin at index 1
    // Test of the first 3 table body rows
    expect(rows[1]).toHaveTextContent("Tom");
    expect(rows[2]).toHaveTextContent("Stephen");
    expect(rows[3]).toHaveTextContent("Sophia");
  });

  test("Sorting by City in ascending order", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const citySortButton = screen.getByRole("button", { name: "City" });
    fireEvent.click(citySortButton);

    // Get table rows
    const rows = screen.getAllByRole("row");

    // The first table row is the header TR so tbody rows begin at index 1
    // Test of the first 3 table body rows
    expect(rows[1]).toHaveTextContent("Atlanta");
    expect(rows[2]).toHaveTextContent("Bangor");
    expect(rows[3]).toHaveTextContent("Beverly Hills");
  });
});
