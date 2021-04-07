import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
    return(
        /* jshint ignore:start */
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
        /* jshint ignore:end */
    );
}

export default SidebarRow;