/**
 * dataSorting.ts
 */

// Import interfaces
import { IRow, ISorting } from "../interfaces/data-table-interfaces";

/**
 * Sorts an array of data rows based on the specified sorting criteria.
 *
 * @param data - The array of data rows to be sorted.
 * @param sorting - The sorting criteria (column and order).
 * @returns The sorted array of data rows.
 */
export function sortData(data: IRow[], sorting: ISorting): IRow[] {
  const { column, order } = sorting;
  
  return [...data].sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    if (valueA < valueB) {
      return order === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
}
