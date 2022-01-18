import React, { useState } from "react";

import Header from "./layout/Header/Header";
import Container from "@mui/material/Container";
import GameField from "./components/Game/GameField/GameField";
import Modal from "./layout/Modal/Modal";

const App = () => {
    const [modalState, setModalState] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [size, setSize] = useState(3);
    const [winCondition, setWinCondition] = useState(3);
    const [history, setHistory] = useState([]);

    const addWin = (winner, score) => {
        const newHistory = [...history, { winner: winner, score: score }];
        setHistory(newHistory);
    };

    const openHistoryModal = () => {
        setModalState("history");
        setModalVisible(true);
    };

    const openSettingsModal = () => {
        setModalState("settings");
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <React.Fragment>
            <Header
                openHistory={openHistoryModal}
                openSettings={openSettingsModal}
            />
            <Modal
                modalState={modalState}
                modalVisible={modalVisible}
                history={history}
                closeModal={closeModal}
                setSize={setSize}
                setWinCondition={setWinCondition}
            />
            <Container style={{ width: "90vh" }}>
                <GameField
                    size={size}
                    winCondition={winCondition}
                    addWin={addWin}
                />
            </Container>
        </React.Fragment>
    );
};

export default App;
