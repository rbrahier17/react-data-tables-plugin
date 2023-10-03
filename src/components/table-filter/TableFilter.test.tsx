/**
 * TableFilter.test.tsx
 */

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "../../data-table/DataTable";
import { sampleColumns, sampleData } from "../../data-samples";

describe("TableFilter interaction tests", () => {
  const filterTests = [
    { inputValue: "Alice", expectedDisplayedEntries: 1 },
    { inputValue: "Chicago", expectedDisplayedEntries: 2 },
    { inputValue: "101", expectedDisplayedEntries: 12 },
    { inputValue: "Los Angeles", expectedDisplayedEntries: 6 },
    { inputValue: "los angeles", expectedDisplayedEntries: 6 },
    { inputValue: "1993", expectedDisplayedEntries: 2 },
    { inputValue: "Paris", expectedDisplayedEntries: 0 },
    { inputValue: "j", expectedDisplayedEntries: 10 },
    { inputValue: "05/02", expectedDisplayedEntries: 1 },
  ];

  // Function to simulate text input in the TableFilter component and verify the number of displayed entries.
  function testFilterInteraction({ inputValue, expectedDisplayedEntries }) {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Show up to 50 entries
    const selectElement = screen.getByLabelText("Show");
    fireEvent.change(selectElement, { target: { value: 50 } });

    const inputElement = screen.getByTestId("table-filter-input");
    fireEvent.change(inputElement, { target: { value: inputValue } });

    let displayedEntriesLength = screen.getAllByRole("row").length - 1; // - 1 for the header row

    // Check if the "No data available" row is present in the rendered content
    const noDataAvailableRow = screen.queryByText("No data available");
    // If the "No data available" row is found, subtract 1 from the displayed entries count
    if (noDataAvailableRow) displayedEntriesLength -= 1;

    expect(displayedEntriesLength).toBe(expectedDisplayedEntries);
  }

  filterTests.forEach((testConfig, index) => {
    test(`Test ${index + 1}: Filtering with '${testConfig.inputValue}' displays ${
      testConfig.expectedDisplayedEntries
    } ${testConfig.expectedDisplayedEntries > 1 ? "entries" : "entry"}`, () => {
      testFilterInteraction(testConfig);
    });
  });
});
