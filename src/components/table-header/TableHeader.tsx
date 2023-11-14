/**
 * TableHeader.tsx
 */

// Import styles
import "./TableHeader.css";

// Import interfaces
import { ITableHeaderProps } from "../../interfaces/data-table-interfaces";
import React from "react";

/**
 * Memoized component for rendering the table header, including column headers with sorting functionality.
 *
 * @param columns - The configuration of table columns.
 * @param sorting - The current sorting criteria (column data and order "asc" or "desc").
 * @param onSortingChange - A callback function to handle changes in sorting criteria.
 * @returns The TableHeader component.
 */
const TableHeader = React.memo(({ columns, sorting, onSortingChange }: ITableHeaderProps) => {
  /**
   * Callback function to handle column header click events for sorting.
   * It toggles the sorting order and calls the onSortingChange callback.
   *
   * @param column - The column data identifier.
   */
  const handleColumnClick = (column: string) => {
    // Toggle the sorting order for the clicked column
    onSortingChange({
      column,
      order: sorting.column === column ? (sorting.order === "asc" ? "desc" : "asc") : "asc",
    });
  };

  return (
    <thead id='TableHeader' data-testid='table-header'>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>
            <div>
              <button
                type='button'
                className={`sort-button ${sorting.column === column.data ? sorting.order : ""}`}
                onClick={() => handleColumnClick(column.data)}
              >
                {column.title}
                {/* Display sorting arrows based on sorting criteria */}
                <div className='arrow-container'>
                  <span
                    className={`arrow-up ${sorting.column === column.data && sorting.order === "asc" ? "active" : ""}`}
                  ></span>
                  <span
                    className={`arrow-down ${
                      sorting.column === column.data && sorting.order === "desc" ? "active" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
});

export default TableHeader;
