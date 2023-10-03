// TablePagination.test.tsx

import "@testing-library/jest-dom";
import { within } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "../../data-table/DataTable";
import { sampleColumns, sampleData } from "../../data-samples";

describe("TablePagination tests suite", () => {
  test("TablePagination displays default buttons accurately (Page 1, showing 10 entries)", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Buttons "Previous" and "Next" should be displayed
    const previousButton = screen.getByRole("button", { name: "Previous" });
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // 4 page buttons should be displayed by default with this data sample
    const pageNumbers = ["1", "2", "3", "4"];
    pageNumbers.forEach((pageNumber) => {
      const pageButton = screen.getByRole("button", { name: pageNumber });
      expect(pageButton).toBeInTheDocument();
    });
  });

  test("TablePagination buttons display is accurate when modifying entries selection (Page 1, displaying 5 entries).", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Show 5 entries
    const selectElement = screen.getByLabelText("Show");
    fireEvent.change(selectElement, { target: { value: "5" } });

    // 7 page buttons should be displayed with this data sample with 1 being three dots close to the end of the buttons set
    const pageNumbers = ["1", "2", "3", "4", "5", "...", "8"];
    pageNumbers.forEach((pageNumber) => {
      const pageButton = screen.getByRole("button", { name: pageNumber });
      expect(pageButton).toBeInTheDocument();
    });
  });

  test("TablePagination buttons display is accurate when modifying entries selection and page number (Page 5, displaying 5 entries).", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Show 5 entries
    const selectElement = screen.getByLabelText("Show");
    fireEvent.change(selectElement, { target: { value: "5" } });

    // Go to page 5
    const page5Button = screen.getByRole("button", { name: "5" });
    fireEvent.click(page5Button);

    // 7 page buttons should be displayed with this data sample with 1 being three dots close to the beginning of the buttons set
    const pageNumbers = ["1", "...", "4", "5", "6", "7", "8"];
    pageNumbers.forEach((pageNumber) => {
      const pageButton = screen.getByRole("button", { name: pageNumber });
      expect(pageButton).toBeInTheDocument();
    });
  });

  test("TablePagination buttons display is accurate when modifying entries selection and page number with a larger data sample (Page 5, displaying 5 entries).", () => {
    const largerDataSample = [...sampleData, ...sampleData];

    render(<DataTable columns={sampleColumns} data={largerDataSample} />);

    // Show 5 entries
    const selectElement = screen.getByLabelText("Show");
    fireEvent.change(selectElement, { target: { value: "5" } });

    // Go to page 5
    const page5Button = screen.getByRole("button", { name: "5" });
    fireEvent.click(page5Button);

    // Select all buttons within TablePagination
    const tablePagination = screen.getByTestId("table-pagination");
    const buttons = within(tablePagination).getAllByRole("button");

    // 7 page buttons should be displayed with this large data sample with 2 being three dots close to the beginning and close to the end of the buttons set
    const pageNumbers = ["1", "...", "4", "5", "6", "...", "16"];
    pageNumbers.forEach((pageNumber, idx) => {
      expect(buttons[idx + 1]).toHaveTextContent(pageNumber); // add 1 to buttons index to skip the "previous" button
    });
  });

  test("By default the page 1 button is active", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const page1Button = screen.getByRole("button", { name: "1" });
    expect(page1Button).toHaveClass("active");
  });

  test("If on page 1, previous button is disabled", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    const previousPageButton = screen.getByRole("button", { name: "Previous" });
    expect(previousPageButton).toBeDisabled();
  });

  test("If last page, next button is disabled", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);
    // Go to page 4 (last page by default with this data sample)
    const page4Button = screen.getByRole("button", { name: "4" });
    fireEvent.click(page4Button);
    const nextPageButton = screen.getByRole("button", { name: "Next" });
    expect(nextPageButton).toBeDisabled();
  });

  test("Next button works well", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Click next
    const nextPageButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextPageButton);

    // Page 2 button should be active now
    const page2Button = screen.getByRole("button", { name: "2" });
    expect(page2Button).toHaveClass("active");

    // Johnny depp entry should be displayed on page 2
    const johnny = screen.getByText("Johnny");
    const depp = screen.getByText("Depp");
    expect(johnny).toBeInTheDocument();
    expect(depp).toBeInTheDocument();
  });

  test("Previous button works well", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Go to page 3
    const page3Button = screen.getByRole("button", { name: "3" });
    fireEvent.click(page3Button);

    // Click previous
    const previousPageButton = screen.getByText("Previous");
    fireEvent.click(previousPageButton);

    // Page 2 button should be active now
    const page2Button = screen.getByRole("button", { name: "2" });
    expect(page2Button).toHaveClass("active");

    // Johnny depp entry should be displayed on page 2
    const johnny = screen.getByText("Johnny");
    const depp = screen.getByText("Depp");
    expect(johnny).toBeInTheDocument();
    expect(depp).toBeInTheDocument();
  });

  test("On page 4 'Tom Hanks' entry should be displayed by default", () => {
    render(<DataTable columns={sampleColumns} data={sampleData} />);

    // Go to page 4
    const page4Button = screen.getByRole("button", { name: "4" });
    fireEvent.click(page4Button);

    // Page 4 button should be active now
    expect(page4Button).toHaveClass("active");

    // Tom Hanks entry should be displayed on page 4
    const tom = screen.getByText("Tom");
    const hanks = screen.getByText("Hanks");
    expect(tom).toBeInTheDocument();
    expect(hanks).toBeInTheDocument();
  });
});