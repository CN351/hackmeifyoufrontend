import * as React from 'react';
import { useState, useEffect } from "react";
import { Button, Container, Input, Typography, Box, LinearProgress } from "@mui/material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import CardModal from '../components/CardModal'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const columns = [
    { id: 'username', label: 'Username', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'phone', label: 'Phone', minWidth: 150, align: 'right' },
    { id: 'cardid', label: 'CardID', minWidth: 150, align: 'right' }
];



const Admin = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, setData] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState();
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    const IMAGE_URL = '/image/save';

    const Uploadfiles = async () => {
        try {
            await axiosPrivate.post(IMAGE_URL,
                JSON.stringify({ image: image }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            alert("upload success")
            setImage()
        } catch (error) {
            console.log(error);
            alert("upload error")
        }
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users/data', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
                setLoading(false)
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [open])

    console.log(users);

    function encodeImageFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        console.log(file.type);
        reader.onloadend = async function () {
            //send
            setImage(reader.result)
            console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file);
    }

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
                    Insert File
                    <Input type="file" hidden onChange={(e) => encodeImageFileAsURL(e.target)} />
                </Button>
                {image ? <Button variant="contained" component="label" onClick={() => Uploadfiles()}>
                    Upload File
                </Button> : <></>}


                {/* /////////// */}
                <Typography>Users</Typography>
                {Line()}


                {loading ? (<>loading...</>) :
                    (<>
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
                                        {users
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
                                count={users.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </>)
                }
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
