import React from "react";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const GameBoxIcon = (props) => {
    switch (props.type) {
        case true:
            return <CircleOutlinedIcon sx={{ fontSize: props.size }} />;
        case false:
            return <CloseOutlinedIcon sx={{ fontSize: props.size }} />;
        default:
            return null;
    }
};

export default GameBoxIcon;
