import React from "react";
import Icon from "../icon/icon";
import "./btn.scss";

function IconTexBtn(props){
    return (
        <button className={props.class} aria-label={props.label}>
            <Icon class={props.iconClass} href={props.href} />
            {props.content}
        </button>
    )
}

export default IconTexBtn;