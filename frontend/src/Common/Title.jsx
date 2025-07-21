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
      <h5 className={`${cssClass} ${mainTitleClassess}`}>
        {title}
        {subTitle ? (
          <span className={`${subTitleClassess}`}> {subTitle}</span>
        ) : (
          ""
        )}
      </h5>
    </TitleSubTitleStyled>
  );
};

export default Title;
