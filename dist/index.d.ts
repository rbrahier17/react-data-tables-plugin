import * as react_jsx_runtime from 'react/jsx-runtime';

interface IColumn {
    title: string;
    data: string;
}
interface IRow {
    [key: string]: string;
}
interface IDataTableProps {
    data?: IRow[];
    columns: IColumn[];
    className?: string;
    mainColor?: string;
    accentColor?: string;
}

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
declare const DataTable: ({ data, columns, className, mainColor, accentColor }: IDataTableProps) => react_jsx_runtime.JSX.Element;

export { DataTable };
