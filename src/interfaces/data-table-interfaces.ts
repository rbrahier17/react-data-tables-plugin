export interface IColumn {
  title: string;
  data: string;
}

export interface IRow {
  [key: string]: string;
}

export interface ISorting {
  column: string;
  order: "asc" | "desc";
}

export interface IDataTableProps {
  data?: IRow[];
  columns: IColumn[];
  mainColor?: string;
  accentColor?: string;
}

export interface ITableBodyProps {
  columns: IColumn[];
  displayedData: IRow[];
}

export interface ITableEntriesSelectorProps {
  numberOfEntries: number;
  onEntriesChange: (numberOfEntries: number) => void;
}

export interface ITableFilterProps {
  data: IRow[];
  onSearchInput: (dataState: IRow[]) => void;
}

export interface ITableHeaderProps {
  columns: IColumn[];
  sorting: ISorting;
  onSortingChange: (sorting: ISorting) => void;
}

export interface ITableInfoProps {
  dataLength: number;
  displayedDataStart: number;
  displayedDataEnd: number;
  dataStateLength: number;
}

export interface ITablePaginationProps {
  currentPage: number;
  numberOfEntries: number;
  dataStateLength: number;
  onPageChanges: (newPage: number) => void;
}
