import React, { useState } from "react";

import { Grid } from "@mui/material";
import GameBox from "../GameBox/GameBox";
import Turn from "../Turn/Turn";
import Win from "../Win/Win";

const GameField = (props) => {
    const directions = [
        [-1, 1, props.size + 1, props.size],
        [-props.size, props.size, null, null],
        [-props.size + 1, props.size - 1, props.size, props.size + 1],
        [props.size + 1, -props.size - 1, props.size, props.size + 1],
    ];

    const [turn, setTurn] = useState(false);
    const [played, setPlayed] = useState({});
    const [turnCount, setTurnCount] = useState(0);
    const [won, setWon] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const resetGame = () => {
        setTurn(false);
        setPlayed({});
        setTurnCount(0);
        setWon(0);
        setIsReset(true);
    };

    const toggleTurn = () => {
        setTurn(!turn);
    };

    const registerTurn = (id, type) => {
        let newPlayed = { ...played };
        newPlayed[id] = type;
        setPlayed(newPlayed);
        setTurnCount(turnCount + 1);
    };

    const checkWin = (id, type) => {
        for (const direction of directions) {
            let failFirst = false;
            let failSecond = false;
            let adjacent = 0;
            let i = 1;
            while (
                adjacent < props.winCondition - 1 &&
                (!failFirst || !failSecond)
            ) {
                if (!failFirst) {
                    if (
                        (id + 1) % direction[2] &&
                        played[id + direction[0] * i] === type
                    ) {
                        adjacent += 1;
                    } else {
                        failFirst = true;
                    }
                }
                if (!failSecond) {
                    if (
                        (id + 1) % direction[3] &&
                        played[id + direction[1] * i] === type
                    ) {
                        adjacent += 1;
                    } else {
                        failSecond = true;
                    }
                }
                i += 1;
            }
            if (adjacent === props.winCondition - 1) {
                props.addWin(
                    type ? "Circle" : "Cross",
                    turnCount + props.winCondition
                );
                setWon(true);
                break;
            }
        }
    };

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignContent="center"
                wrap="wrap"
                marginBottom="10px"
            >
                {won ? (
                    <Win turn={!turn} resetGame={resetGame} />
                ) : (
                    <Turn turn={turn} />
                )}
            </Grid>
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                columns={props.size}
            >
                {Array.from({ length: props.size * props.size }, (_, key) => {
                    return (
                        <GameBox
                            key={key}
                            id={key}
                            turn={turn}
                            size={props.size}
                            toggleTurn={toggleTurn}
                            registerTurn={registerTurn}
                            checkWin={checkWin}
                            won={won}
                            isReset={isReset}
                            setIsReset={setIsReset}
                        />
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};

export default GameField;
