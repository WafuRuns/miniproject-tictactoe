import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const ModalContent = (props) => {
    const [sizeValue, setSizeValue] = useState(3);
    const [winConditionValue, setWinConditionValue] = useState(3);

    const changeSizeHandler = (event) => {
        setSizeValue(event.target.value);
        props.setSize(event.target.value);
    };

    const changeWinConditionHandler = (event) => {
        setWinConditionValue(event.target.value);
        props.setWinCondition(event.target.value);
    };

    switch (props.modalState) {
        case "history":
            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Winner</TableCell>
                                <TableCell>Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(props.history).map((key) => {
                                return (
                                    <TableRow key={key}>
                                        <TableCell>
                                            {props.history[key].winner}
                                        </TableCell>
                                        <TableCell>
                                            {props.history[key].score}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        case "settings":
            return (
                <React.Fragment>
                    <Slider
                        size="small"
                        value={sizeValue}
                        onChange={changeSizeHandler}
                        min={0}
                        max={100}
                        valueLabelDisplay="auto"
                        style={{ marginTop: "30px" }}
                    />
                    <Slider
                        size="small"
                        value={winConditionValue}
                        onChange={changeWinConditionHandler}
                        min={0}
                        max={sizeValue}
                        valueLabelDisplay="auto"
                    />
                </React.Fragment>
            );
        default:
            return null;
    }
};

export default ModalContent;
