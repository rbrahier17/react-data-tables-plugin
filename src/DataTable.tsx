import "./DataTable.css";
import { useState, useMemo } from "react";
import { IColumn, IRow, ISorting } from "./types/data-table";

import TableHeader from "./components/table-header/TableHeader";
import TableBody from "./components/table-body/TableBody";
import TableEntriesSelector from "./components/table-entries-selector/TableEntriesSelector";
import TableFilter from "./components/table-filter/TableFilter";
import TableInfo from "./components/table-info/TableInfo";
import TablePagination from "./components/table-pagination/TablePagination";

import { sortData } from "./utils/dataSorting";

interface DataTableProps {
  data?: IRow[];
  columns: IColumn[];
}

export default function DataTable({ data = [], columns }: DataTableProps) {
  const [dataState, setDataState] = useState(data); // 'dataState' preserves original data integrity while enabling interactive manipulation
  const [sorting, setSorting] = useState<ISorting>({
    column: columns[0].data,
    order: "asc",
  });
  const [numberOfEntries, setNumberOfEntries] = useState(10);
  const [page, setPage] = useState(1);

  const handleNumberOfEntriesChange = (newNumberOfEntries: number) => {
    setNumberOfEntries(newNumberOfEntries);
    setPage(1); // Reset the page to 1 when numberOfEntries changes
  };

  const handleSortingChange = (newSorting: ISorting) => {
    setSorting(newSorting);
    setPage(1); // Reset the page to 1 when sorting changes
  };

  const handleSearchInput = (newDataState: IRow[]) => {
    setDataState(newDataState);
    setPage(1); // Reset the page to 1 when dataState changes
  };

  // We use the useMemo hook to cache sorted and displayed data to improve performance.
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
    <div className='DataTable_wrapper'>
      <div className='DataTable_top'>
        <TableEntriesSelector numberOfEntries={numberOfEntries} onEntriesChange={handleNumberOfEntriesChange} />
        <TableFilter data={data} onSearchInput={handleSearchInput} />
      </div>
      <table className='DataTable'>
        <TableHeader columns={columns} sorting={sorting} onSortingChange={handleSortingChange} />
        <TableBody columns={columns} displayedData={displayedData} />
      </table>
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
}
