import { useState, useMemo } from "react";
import { sortRows, filterRows, paginateRows } from "./helpers";
import { Pagination } from "./Pagination";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export const Tables = ({ columns, rows }) => {
    const [activePage, setActivePage] = useState(1);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({ order: "asc", orderBy: "id" });
    const rowsPerPage = 10;

    const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters]);
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort]);
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

    const count = filteredRows.length;
    const totalPages = Math.ceil(count / rowsPerPage);

    const handleSearch = (value, accessor) => {
        setActivePage(1);

        if (value) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [accessor]: value,
            }));
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = { ...prevFilters };
                delete updatedFilters[accessor];

                return updatedFilters;
            });
        }
    };

    const handleSort = (accessor) => {
        setActivePage(1);
        setSort((prevSort) => ({
            order: prevSort.order === "asc" && prevSort.orderBy === accessor ? "desc" : "asc",
            orderBy: accessor,
        }));
    };

    const clearAll = () => {
        setSort({ order: "asc", orderBy: "id" });
        setActivePage(1);
        setFilters({});
    };

    return (
        <>
            <Table responsive="lg" striped bordered hover size="lg" variant="" >
                <thead>
                    <tr>
                        {columns.map((column) => {
                            return (
                                <>
                                    {
                                        column.isSearch ? 
                                            column.accessor == "Date" ? 
                                            <th>
                                                <input 
                                                    className="form-control" 
                                                    key={`${column.accessor}-search`} 
                                                    type="date" 
                                                    placeholder={`${column.label}`} 
                                                    value={filters[column.accessor]}
                                                    onFocus={(e) => (e.target.type = "date")}
                                                    onBlur={(e) => (e.target.type = "text")}
                                                    onChange={(event) => handleSearch(event.target.value, column.accessor)} />
                                            </th>
                                            :
                                            <th>
                                                <input 
                                                    className="form-control" 
                                                    key={`${column.accessor}-search`} 
                                                    type="search" 
                                                    placeholder={`${column.label}`} 
                                                    value={filters[column.accessor]} 
                                                    onChange={(event) => handleSearch(event.target.value, column.accessor)} />
                                            </th>
                                        :
                                        <th></th>
                                    }
                                </>
                                    
                            );
                        })}
                    </tr>
                    <tr>
                        {columns.map((column) => {
                            const sortIcon = () => {
                                if (column.accessor === sort.orderBy) {
                                    if (sort.order === "asc") {
                                        return "▲";
                                    }
                                    return "▼";
                                } else {
                                    return "▲▼";
                                }
                            };
                            return (
                                <th key={column.accessor} width={column.width ? column.width : ""}>
                                    <span>{column.label}</span>
                                    {
                                        column.isSort ?
                                        <>
                                            &nbsp;
                                            <span className="sort-by" onClick={() => handleSort(column.accessor)}>{sortIcon()}</span>
                                        </> : 
                                        <></>
                                    }
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {calculatedRows.map((row, i) => {
                        return (
                            <tr key={row.id}>
                                {columns.map((column) => {
                                    if (column.format) {
                                        return <td key={column.accessor}>{column.format(row[column.accessor])}</td>;
                                    }
                                    if(column.type) {
                                        return <td key={column.accessor}><div style={{display:"flex",alignItems:"center",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around"}}>{row[column.accessor]}</div></td>;
                                        {/*return <td key={column.accessor}><div style={{display:"grid",gridTemplateColumns: "25% 20% 30% 10% 10%",columnGap:"10px",alignItems:"center"}}>{row[column.accessor]}</div></td>*/}
                                    }
                                    return <td key={column.accessor}>
                                        {
                                            (column.accessor == "STT")
                                            ?
                                                ((activePage - 1) * rowsPerPage + i) + 1  
                                            :
                                                row[column.accessor]
                                        }</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {count > 0 ? <Pagination activePage={activePage} count={count} rowsPerPage={rowsPerPage} totalPages={totalPages} setActivePage={setActivePage} /> : <p>Không có dữ liệu</p>}

            {/*<div>
                <p>
                    <button onClick={clearAll}>Clear all</button>
                </p>
            </div>*/}
        </>
    );
};
