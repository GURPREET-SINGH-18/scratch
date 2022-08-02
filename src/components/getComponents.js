import React from "react";
import Move from "./motion/MoveInX";
import TurnAntiClockwise from "./motion/RotateAntiClockwise";
import TurnClockwise from "./motion/RotateClockwise";
import SayMessage from "./looks/Message";
import SayMessageWithTimer from "./looks/MessageWithTimer";
import Size from "./looks/Size";
import Show from "./looks/ShowSprite";
import Hide from "./looks/HideSprite";
import Wait from "./control/Wait";
import Repeat from "./control/Repeat";
import HideMessage from "./looks/HideMessage";
import MoveY from "./motion/MoveInY";
import BroadcastMessage from "./events/Broadcast";

// fetch components based on different keys
export const getComponent = (key, id) => {
    switch (key) {
        case "MOVE_Y":
            return <MoveY comp_id={id} />;
        case "MOVE":
            return <Move comp_id={id} />;

        case "TURN_CLOCKWISE":
            return <TurnClockwise comp_id={id} />;

        case "TURN_ANTI_CLOCKWISE":
            return <TurnAntiClockwise comp_id={id} />;

        case "SAY_MESSAGE":
            return <SayMessage comp_id={id} />;

        case "SAY_MESSAGE_WITH_TIMER":
            return <SayMessageWithTimer comp_id={id} />;

        case "SIZE":
            return <Size comp_id={id} />;

        case "SHOW":
            return <Show comp_id={id} />;

        case "HIDE":
            return <Hide comp_id={id} />;

        case "BROADCAST":
            return <BroadcastMessage comp_id={id} />;

        case "WAIT":
            return <Wait comp_id={id} />;

        case "REPEAT":
            return <Repeat comp_id={id} />;

        case "HIDE_MESSAGE":
            return <HideMessage comp_id={id} />;

        default:
            return React.null;
    }
};
