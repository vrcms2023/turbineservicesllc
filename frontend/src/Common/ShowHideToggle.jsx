import React from "react";
import ShowHideIcon from "./AdminShowHideIcon";

const ShowHideToggle = ({
  showhideStatus,
  title,
  componentName,
  showHideHandler,
  id,
}) => {
  return (
    <div
      className={`randomServices p-2 py-1 d-flex aling-items-center justify-content-center ${
        showhideStatus ? " componentOn" : " componentOff border-bottom"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        {/* Products, visibility = {showHideCompList?.products?.visibility} */}
        <span className={`${showhideStatus ? "componentext" : "componentext"}`}>
          {title}
        </span>
        <ShowHideIcon
          editHandler={() => showHideHandler(id, componentName)}
          hideIcon={showhideStatus}
        />
      </div>
    </div>
  );
};
export default ShowHideToggle;
