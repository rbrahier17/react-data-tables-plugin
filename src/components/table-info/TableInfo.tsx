/**
 * TableInfo.tsx
 */

// Import interfaces
import { ITableInfoProps } from "../../interfaces/data-table-interfaces";

/**
 * Component for displaying information about the number of entries being displayed in the table.
 *
 * @param dataLength - The total number of entries in the original data.
 * @param dataStateLength - The number of entries after optional filtering.
 * @param displayedDataStart - The index of the first displayed entry.
 * @param displayedDataEnd - The index of the last displayed entry.
 * @returns The TableInfo component.
 */
export default function TableInfo({
  dataLength,
  dataStateLength,
  displayedDataStart,
  displayedDataEnd,
}: ITableInfoProps) {
  // Determine whether to use "entry" or "entries" based on the number of entries
  const entryLabel = dataStateLength === 1 ? "entry" : "entries";

  /**
   * Generate text describing the range of displayed entries.
   */
  const getEntriesRangeText = () => {
    if (dataStateLength === 0) return "No entries";

    const start = displayedDataStart === 0 ? 1 : displayedDataStart + 1;
    const end = displayedDataEnd;

    return `Showing ${start} to ${end} of ${dataStateLength} ${entryLabel}`;
  };

  /**
   * Generate text indicating the number of filtered entries, if applicable.
   */
  const getFilteredEntriesText = () => {
    return dataLength === dataStateLength ? "" : ` (filtered from ${dataLength} total entries)`;
  };

  return (
    <p data-testid='table-info'>
      {getEntriesRangeText()}
      {getFilteredEntriesText()}
    </p>
  );
}
