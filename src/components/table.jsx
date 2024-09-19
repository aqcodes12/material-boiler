import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";

export default function StickyHeadTable({
  columns,
  rows,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}) {
  return (
    <Box sx={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, border: "none" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={"center"}
                  style={{ minWidth: column.minWidth }}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={"center"}
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={(event) =>
            onRowsPerPageChange(parseInt(event.target.value, 10))
          }
        />
      </Box>
    </Box>
  );
}
