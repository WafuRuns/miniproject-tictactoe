import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import styles from "./GameBox.module.css";
import GameBoxIcon from "../GameBoxIcon/GameBoxIcon";

const GameBox = (props) => {
    const [type, setType] = useState(null);
    const [isReset, setIsReset] = [props.isReset, props.setIsReset];

    useEffect(() => {
        if (isReset) {
            setType(null);
            setIsReset(false);
        }
    }, [isReset, setIsReset]);

    const gameBoxClicked = () => {
        if (!props.won) {
            if (type === null) {
                setType(props.turn);
                props.toggleTurn();
                props.registerTurn(props.id, props.turn);
                props.checkWin(props.id, props.turn);
            }
        }
    };

    return (
        <Grid
            item
            align="center"
            xs={1}
            className={styles.Box}
            border={1}
            onClick={gameBoxClicked}
        >
            <GameBoxIcon type={type} size={600 / props.size} />
        </Grid>
    );
};

export default GameBox;
