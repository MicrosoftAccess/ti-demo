
import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { IoCloseOutline } from 'react-icons/io5';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export default function ReviweModal({ isOpen }: any) {
    const [open, setOpen] = React.useState(isOpen);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, width: 200 }}>
                <div className="w-full flex justify-end">
                    <button className="bg-transparent border-none" onClick={handleClose}><IoCloseOutline style={{ cursor: 'pointer' }} /></button>

                </div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>

    )
}
