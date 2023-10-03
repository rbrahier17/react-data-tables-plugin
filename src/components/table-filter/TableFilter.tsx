/**
 * TableFilter.tsx
 */

// Import styles
import "./TableFilter.css";

// Import interfaces
import { ITableFilterProps } from "../../interfaces/data-table-interfaces";

/**
 * Component for rendering a search input field to filter data in the table.
 *
 * @param data - The table data to be filtered.
 * @param onSearchInput - A callback function to handle changes in the search input.
 * @returns The TableFilter component.
 */
export default function TableFilter({ data, onSearchInput }: ITableFilterProps) {
  /**
   * Callback function to handle changes in the search input.
   * It filters the data based on the input value and calls the onSearchInput callback.
   *
   * @param inputValue - The current value of the search input.
   */
  function onInputChange(inputValue: string) {
    // Filter the data based on the input value
    const filteredRows = data.filter((row) => {
      const rowValues = Object.values(row).join(" ").toLowerCase();
      return rowValues.includes(inputValue.toLowerCase());
    });

    // Call the onSearchInput callback with the filtered data
    onSearchInput([...filteredRows]);
  }

  return (
    <div id='TableFilter' data-testid='table-filter'>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        id='search'
        name='search'
        // Call onInputChange when the input value changes
        onChange={(event) => onInputChange(event.target.value)}
        data-testid='table-filter-input'
      />
    </div>
  );
}
