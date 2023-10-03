import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "../../data-table/DataTable";
import { sampleColumns, sampleData } from "../../data-samples";

describe("TableEntriesSelector interaction tests suite", () => {
  const optionsToTest = [5, 10, 15, 20, 25]; // We don't test higher options because the length of the dataset is 40

  optionsToTest.forEach((value) => {
    test(`Selecting ${value} entries displays ${value} entries in the table`, () => {
      render(<DataTable columns={sampleColumns} data={sampleData} />);

      const selectElement = screen.getByLabelText("Show");
      fireEvent.change(selectElement, { target: { value: value.toString() } });
      const displayedEntriesLength = screen.getAllByRole("row").length - 1; // - 1 for the header row
      expect(displayedEntriesLength).toBe(value);
    });
  });
});
