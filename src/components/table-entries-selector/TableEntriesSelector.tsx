/**
 * TableEntriesSelector.tsx
 */

// Import styles
import "./TableEntriesSelector.css";

// Import interfaces
import { ITableEntriesSelectorProps } from "../../interfaces/data-table-interfaces";
import React from "react";

/**
 * Memoized component for rendering a dropdown to select the number of entries to display per page in the table.
 *
 * @param numberOfEntries - The number of entries to be displayed per page.
 * @param onEntriesChange - A callback function to handle changes in the number of entries.
 * @returns The TableEntriesSelector component.
 */
const TableEntriesSelector = React.memo(({ numberOfEntries, onEntriesChange }: ITableEntriesSelectorProps) => {
  const options = [5, 10, 15, 20, 25, 50, 100];

  return (
    <div id='TableEntriesSelector' data-testid='table-entries-selector'>
      <label htmlFor='entries'>Show</label>
      <select
        id='entries'
        value={numberOfEntries}
        onChange={(event) => onEntriesChange(parseInt(event.target.value, 10))}
      >
        {options.map((option) => (
          <option key={"option-key-" + option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor='entries'>entries</label>
    </div>
  );
});

export default TableEntriesSelector;
