import { Button } from "@mui/material";
import React from "react";

const Win = (props) => (
    <React.Fragment>
        <h1>{props.turn ? "Circle" : "Cross"} won</h1>
        <Button variant="text" color="primary" onClick={props.resetGame}>
            Reset game
        </Button>
    </React.Fragment>
);

export default Win;
