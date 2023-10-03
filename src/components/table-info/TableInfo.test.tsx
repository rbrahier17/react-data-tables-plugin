/**
 * TableInfo.test.tsx
 */

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "../../data-table/DataTable";
import { sampleColumns, sampleData } from "../../data-samples";

describe("TableInfo interactions tests suite", () => {
  test("TableInfo displays accurate information  when showing up to 10 entries on page 1 without filtering", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const infoText = screen.getByTestId("table-info").textContent;
    expect(infoText).toBe("Showing 1 to 10 of 40 entries");
  });

  test("TableInfo displays accurate information when showing up to 25 entries on page 1 without filtering", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const selectElement = screen.getByLabelText("Show");
    fireEvent.change(selectElement, { target: { value: "25" } });
    const infoText = screen.getByTestId("table-info").textContent;
    expect(infoText).toBe("Showing 1 to 25 of 40 entries");
  });

  test("TableInfo displays accurate information when showing up to 10 entries on page 2 without filtering", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const page2Button = screen.getByRole("button", { name: "2" });
    fireEvent.click(page2Button);
    const infoText = screen.getByTestId("table-info").textContent;
    expect(infoText).toBe("Showing 11 to 20 of 40 entries");
  });

  test("TableInfo displays accurate information when filtering applied using the keyword 'John'", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const filterInputElement = screen.getByTestId("table-filter-input");
    fireEvent.change(filterInputElement, { target: { value: "John" } });
    const infoText = screen.getByTestId("table-info").textContent;
    expect(infoText).toBe("Showing 1 to 4 of 4 entries (filtered from 40 total entries)");
  });

  test("TableInfo displays accurate information when filtering applied using the keyword 'Paris'", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const filterInputElement = screen.getByTestId("table-filter-input");
    fireEvent.change(filterInputElement, { target: { value: "Paris" } });
    const infoText = screen.getByTestId("table-info").textContent;
    expect(infoText).toBe("No entries (filtered from 40 total entries)");
  });
});
