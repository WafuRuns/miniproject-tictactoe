import React from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";

const Header = (props) => (
    <AppBar position="sticky" color="primary">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                TicTacToe
            </Typography>
            <IconButton color="inherit" onClick={props.openHistory}>
                <HistoryIcon />
            </IconButton>
            <IconButton color="inherit" onClick={props.openSettings}>
                <SettingsIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default Header;
