import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DataTable } from "../../data-table/DataTable";
import { sampleColumns, sampleData } from "../../data-samples";
import { sortData } from "../../utils/dataSorting";

describe("TableBody tests suite", () => {
  test("10 entries are displayed by default", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const displayedEntriesLength = screen.getAllByRole("row").length - 1; // - 1 for the header row
    expect(displayedEntriesLength).toBe(10);
  });

  test("The displayed data is sorted by the ascending order of the first column", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const sortedData = sortData(sampleData, { column: sampleColumns[0].data, order: "asc" });
    const cellsInFirstColumn = screen.getAllByTestId(`data-cell-for-column-${sampleColumns[0].data}`);
    for (let i = 0; i < 10; i++) {
      const cellContent = screen.getByText(sortedData[i][sampleColumns[0].data]);
      expect(cellsInFirstColumn[i]).toContainElement(cellContent);
    }
  });

  test("In no data is provided a specific element is displayed", () => {
    render(<DataTable columns={sampleColumns} />);
    const noDataElement = screen.getByTestId("table-body-no-data");
    expect(noDataElement).toBeInTheDocument();
  });
});
