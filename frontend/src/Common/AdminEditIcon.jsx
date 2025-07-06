import React from "react";
import "./AdminEditIcon.css";

const EditIcon = ({
  editHandler,
  icon = "fa-pencil",
  iconCss = "text-warning cursor-pointer fs-3",
  cssClasses = "position-absolute ",
  editlabel,
}) => {
  return (
    <span className={`${cssClasses} editIcon`}>
      <i
        className={`fa ${icon} ${iconCss}`}
        aria-hidden="true"
        onClick={editHandler}
      ></i>
      {editlabel && <span>{editlabel}</span>}
    </span>
  );
};

export default EditIcon;
