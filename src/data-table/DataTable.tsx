/**
 * DataTable.tsx
 */

// Import styles
import "./DataTable.css";

// Import interfaces
import { IRow, ISorting, IDataTableProps } from "../interfaces/data-table-interfaces";

// Import hooks and utils
import { useState, useMemo } from "react";
import { setCustomColorProperty } from "../utils/setCustomColorProperty";
import { sortData } from "../utils/dataSorting";

// Import components
import TableHeader from "../components/table-header/TableHeader";
import TableBody from "../components/table-body/TableBody";
import TableEntriesSelector from "../components/table-entries-selector/TableEntriesSelector";
import TableFilter from "../components/table-filter/TableFilter";
import TableInfo from "../components/table-info/TableInfo";
import TablePagination from "../components/table-pagination/TablePagination";

// Default table colors
const DEFAULT_MAIN_COLOR = "#081f37";
const DEFAULT_ACCENT_COLOR = "#5fc9f3";

/**
 * DataTable root component.
 *
 * This component serves as the central controller for the DataTable, managing its core functionality.
 * It controls and manipulates various states such as data, sorting, pagination, and custom colors.
 *
 * @param props - Data Table Props
 * @param props.data - The table data to display.
 * @param props.columns - The configuration of table columns.
 * @param props.mainColor - The main color for custom styling (optional).
 * @param props.accentColor - The accent color for custom styling (optional).
 * @returns - The DataTable component.
 */
export const DataTable = ({ data = [], columns, mainColor, accentColor }: IDataTableProps) => {
  // This state contains the table data and can be manipulated (sorted, filtered, etc.).
  // This state allow the original data integrity to be preserved.
  const [dataState, setDataState] = useState(data);
  // This state is used to perform sorting (ascending or descending) of table entries.
  const [sorting, setSorting] = useState<ISorting>({
    column: columns[0].data,
    order: "asc",
  });
  // This state manages the display of a certain number of entries in the table, with 10 as the default.
  const [numberOfEntries, setNumberOfEntries] = useState(10);
  // This state is used to manage table pagination, with the first page displayed by default.
  const [page, setPage] = useState(1);

  // Set custom color properties for the component, using values from props if provided, or default colors if not.
  setCustomColorProperty("--main-color", mainColor, DEFAULT_MAIN_COLOR);
  setCustomColorProperty("--accent-color", accentColor, DEFAULT_ACCENT_COLOR);

  // This handler updates the number of displayed entries and resets the page to 1 when the number of entries changes.
  const handleNumberOfEntriesChange = (newNumberOfEntries: number) => {
    setNumberOfEntries(newNumberOfEntries);
    setPage(1);
  };

  // This handler updates the sorting criteria and resets the page to 1 when the sorting changes.
  const handleSortingChange = (newSorting: ISorting) => {
    setSorting(newSorting);
    setPage(1);
  };

  // This handler updates the data state based on the search input and resets the page to 1 when the data state changes.
  const handleSearchInput = (newDataState: IRow[]) => {
    setDataState(newDataState);
    setPage(1);
  };

  // We use the useMemo hook to cache sorted and displayed data related variables to improve performance.
  // These variables are recalculated only when dependent variables change.
  const sortedData = useMemo(() => sortData(dataState, sorting), [dataState, sorting]);
  const displayedDataStart = useMemo(() => (page - 1) * numberOfEntries, [page, numberOfEntries]);
  const displayedDataEnd = useMemo(
    () => (page * numberOfEntries > dataState.length ? dataState.length : page * numberOfEntries),
    [page, numberOfEntries, dataState.length]
  );
  const displayedData = useMemo(
    () => sortedData.slice(displayedDataStart, displayedDataEnd),
    [sortedData, displayedDataStart, displayedDataEnd]
  );

  return (
    <div className='DataTable_global_wrapper'>
      <div className='DataTable_small_screen_unsupported'>
        Oops, this table is not small-screen friendly. Please switch to a larger device for the best experience.
      </div>
      <div className='DataTable_top'>
        <TableEntriesSelector numberOfEntries={numberOfEntries} onEntriesChange={handleNumberOfEntriesChange} />
        <TableFilter data={data} onSearchInput={handleSearchInput} />
      </div>
      <div className='DataTable_content_wrapper'>
        <table className='DataTable'>
          <TableHeader columns={columns} sorting={sorting} onSortingChange={handleSortingChange} />
          <TableBody columns={columns} displayedData={displayedData} />
        </table>
      </div>
      <div className='DataTable_bottom'>
        <TableInfo
          dataLength={data.length}
          dataStateLength={dataState.length}
          displayedDataStart={displayedDataStart}
          displayedDataEnd={displayedDataEnd}
        />
        <TablePagination
          currentPage={page}
          numberOfEntries={numberOfEntries}
          dataStateLength={dataState.length}
          onPageChanges={setPage}
        />
      </div>
    </div>
  );
};
