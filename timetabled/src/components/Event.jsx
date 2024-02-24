import React from "react";
import "../index.css";

const Event = (props) => {
    return (
        <td className={props.color+"Event"}>
            <h5>{props.event}</h5>
        </td>
    )
}

export default Event;