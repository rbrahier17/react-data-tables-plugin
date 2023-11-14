/**
 * TablePagination.tsx
 */

// Import styles
import "./TablePagination.css";

// Import interfaces
import { ITablePaginationProps } from "../../interfaces/data-table-interfaces";

/**
 * Component for rendering pagination controls for navigating through table pages.
 *
 * @param currentPage - The current page number.
 * @param numberOfEntries - The number of entries displayed per page.
 * @param dataStateLength - The total number of entries after optional filtering.
 * @param onPageChanges - A callback function to handle page changes.
 * @returns The TablePagination component.
 */
export default function TablePagination({
  currentPage,
  numberOfEntries,
  dataStateLength,
  onPageChanges,
}: ITablePaginationProps) {
  // Calculate the total number of pages based on the number of entries and data length
  const totalPages: number = Math.ceil(dataStateLength / numberOfEntries);

  // Determine if it's possible to navigate to the previous and next pages
  const canNavigatePrevious: boolean = currentPage > 1;
  const canNavigateNext: boolean = currentPage < totalPages;

  type OddNumber = 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21;

  // Number of pagination buttons (including ellipsis) to show. ⚠ Must be an odd number respecting the range defined in the OddNumber interface ! ⚠
  const maxButtonsToShow: OddNumber = 7;
  const halfButtonsCount: number = Math.floor(maxButtonsToShow / 2);

  /**
   * Generates an array of numbers within the specified range.
   *
   * @param start - The start of the range.
   * @param end - The end of the range.
   * @returns An array of numbers from start to end (inclusive).
   *
   * @example
   * const start = 3;
   * const end = 7;
   * const range = generateRange(start, end);
   * // range will be [3, 4, 5, 6, 7]
   */
  function generateRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  /**
   * Generates pagination array.
   * The number -1 will serves to represent ellipsis (...).
   *
   * @returns An array of numbers representing pagination.
   *
   * @example
   * const totalPages = 10;
   * const currentPage = 3;
   * const pagination = getPagination();
   * // pagination will be [1, 2, 3, 4, 5, -1, 10]
   */
  function getPagination(): number[] {
    if (totalPages <= maxButtonsToShow) {
      return generateRange(1, totalPages);
    } else if (currentPage <= halfButtonsCount + 1) {
      return [...generateRange(1, maxButtonsToShow - 2), -1, totalPages];
    } else if (currentPage >= totalPages - halfButtonsCount) {
      return [1, -1, ...generateRange(totalPages - maxButtonsToShow + 3, totalPages)];
    } else {
      return [
        1,
        -1,
        ...generateRange(currentPage - halfButtonsCount + 2, currentPage + halfButtonsCount - 2),
        -1,
        totalPages,
      ];
    }
  }

  // Handle page change when a button is clicked
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChanges(page);
    }
  };

  return (
    <div id='TablePagination' data-testid='table-pagination'>
      {/* Previous button */}
      {totalPages > 1 && (
        <button
          className='TablePagination_button'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={!canNavigatePrevious}
        >
          Previous
        </button>
      )}

      {/* Pagination buttons */}
      {getPagination().map((page, index) => (
        <button
          key={index}
          className={`${currentPage === page ? "active" : ""}`}
          onClick={() => (page !== -1 ? handlePageChange(page) : null)}
        >
          {page === -1 ? "..." : page}
        </button>
      ))}

      {/* Next button */}
      {totalPages > 1 && (
        <button
          className='TablePagination_button'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!canNavigateNext}
        >
          Next
        </button>
      )}
    </div>
  );
}
