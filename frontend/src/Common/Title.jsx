import React from "react";

import { TitleSubTitleStyled } from "./StyledComponents/Styled-Title-Component";

const Title = ({ 
  title = "",
  subTitle = "", 
  cssClass,
  mainTitleClassess="",
  subTitleClassess=""
}) => {
  
  return (
    <TitleSubTitleStyled>
      {title ? (
        <h5 className={`${cssClass} ${mainTitleClassess}`}>
        {title}
      </h5>
      ) : ""}
      
      {subTitle ? (
          <span className={`${subTitleClassess}`}>{subTitle}</span>
        ) : (
          ""
        )}
    </TitleSubTitleStyled>
  );
};

export default Title;
