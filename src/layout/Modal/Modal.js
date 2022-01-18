import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ModalContent from "./ModalContent/ModalContent";

const Modal = (props) => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);

    useEffect(() => {
        if (props.modalVisible) {
            switch (props.modalState) {
                case "history":
                    setModalTitle("History");
                    break;
                case "settings":
                    setModalTitle("Settings");
                    break;
                default:
                    setModalTitle(null);
            }
            handleOpen();
        }
    }, [props.modalVisible, props.modalState]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.closeModal();
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <DialogTitle id="modal-title">{modalTitle}</DialogTitle>
                <DialogContent>
                    <ModalContent
                        modalState={props.modalState}
                        setSize={props.setSize}
                        setWinCondition={props.setWinCondition}
                        history={props.history}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Modal;
