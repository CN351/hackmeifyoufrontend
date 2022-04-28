import * as React from 'react';
import { Link } from "react-router-dom";
import Users from './Users';
import { Button, Container, Input, Typography, Box, LinearProgress, Modal } from "@mui/material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import CardModal from '../components/CardModal'

const columns = [
    { id: 'username', label: 'Username', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'phone', label: 'Phone', minWidth: 150, align: 'right' },
    { id: 'cardid', label: 'CardID', minWidth: 150, align: 'right' }
];

function createData(username, name, email, phone, cardid) {

    return { username, name, email, phone, cardid };
}

const rows = [
    createData('United States', 'US', 'won@won.com', 11111, 9833520),
    createData('India', 'IN', 'won@won.com', 11111, 3287263),
    createData('China', 'CN', 'won@won.com', 11111, 9596961),
    createData('Italy', 'IT', 'won@won.com', 11111, 301340),
    createData('Canada', 'CA', 'won@won.com', 11111, 9984670),
    createData('Australia', 'AU', 'won@won.com', 11111, 7692024),
    createData('Germany', 'DE', 'won@won.com', 11111, 357578),
    createData('Ireland', 'IE', 'won@won.com', 11111, 70273),
    createData('Mexico', 'MX', 'won@won.com', 11111, 1972550),
    createData('Japan', 'JP', 'won@won.com', 11111, 377973),
    createData('France', 'FR', 'won@won.com', 11111, 640679),
    createData('United Kingdom', 'GB', 'won@won.com', 11111, 242495),
    createData('Russia', 'RU', 'won@won.com', 11111, 17098246),
    createData('Nigeria', 'NG', 'won@won.com', 11111, 923768),
    createData('Brazil', 'BR', 'won@won.com', 11111, 8515767),
];


const Admin = () => {
    console.log(rows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, setData] = React.useState();
    const [open, setOpen] = React.useState(false);

    const handleOpen = (e) => {
        console.log(e);
        setData(e)
        setOpen(true)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const Line = () => {
        return (
            <Box sx={{ width: '100%', padding: 3, paddingTop: 2 }}>
                <LinearProgress variant="determinate" value={100} />
            </Box>)
    }

    return (
        <>
            <Container>
                <Typography>Admin Dashboard</Typography>

                {/* /////////// */}
                <Typography>Home page image</Typography>
                {Line()}
                <Button variant="contained" component="label">
                    Upload File
                    <Input type="file" hidden />
                </Button>

                {/* /////////// */}
                <Typography>Users</Typography>
                {Line()}



                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => handleOpen(row)}  >
                                                {
                                                    columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })
                                                }
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <CardModal
                    data={data}
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </Container>

        </>






    )
}

export default Admin


const style = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
};
