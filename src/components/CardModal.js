import React, { useEffect } from "react"
import { Button, Typography, Box, LinearProgress, Modal, TextField, ButtonBase, Grid } from "@mui/material";

const CardModal = ({ open, onClose, data }) => {
    const [username, setUsername] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [cardid, setCardid] = React.useState('');
    useEffect(() => {
        if (data !== undefined) {

            setUsername(data.username)
            setName(data.name)
            setEmail(data.email)
            setPhone(data.phone)
            setCardid(data.cardid)
        }
    }, [data])
    const handleUpdate = () => {
        const data = { username, name, email, phone, cardid };
        console.log('to update data');
    }
    const handleDelete = () => {
        console.log('to delete data');
    }

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style.modal}>
                    <TextField id="username" label="Username" value={username} variant="standard" onChange={(e) => setUsername(e.target.value)} />
                    <TextField id="name" label="Name" value={name} variant="standard" onChange={(e) => setName(e.target.value)} />
                    <TextField id="email" label="Email" value={email} variant="standard" onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="phone" label="Phone" value={phone} variant="standard" onChange={(e) => setPhone(e.target.value)} />
                    <TextField id="cardid" label="Card ID" value={cardid} variant="standard" onChange={(e) => setCardid(e.target.value)} />
                    <Grid container spacing={2} textAlign={'center'}>
                        <Grid item xs={6}>
                            <Button onClick={() => handleUpdate()}>SAVE</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={() => handleDelete()}>DELETE</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

        </>
    )
}

export default CardModal

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