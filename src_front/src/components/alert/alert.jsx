import React from "react";
import Icon from "../icon/icon.jsx";
import IconBtn from "../icon-btn/icon-btn.jsx";
import {icons} from "../../modules/icons";
import "./alert.scss";

function Alert(props) {
    return (
      <dialog className={props.class}>
          <div className="row aic g1">
              <Icon class="icon-sm accent" href={props.href} />
              <p className="simple-text">{props.content}</p>
          </div>
          <IconBtn class="tertiary-icon-btn-xs" iconClass="icon-xs" href={icons.close}/>
      </dialog>
    );
}

export default Alert;