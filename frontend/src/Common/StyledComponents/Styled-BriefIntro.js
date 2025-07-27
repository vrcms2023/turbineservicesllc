import styled from "styled-components";

export const BriefIntroStyled = styled.div`
    background-color: ${({ theme }) => theme.transparent};
    padding: 48px 0;

    @media(max-width: 768px) {
      padding-bottom: 0;
    }



  .briefIntro { 
    // margin: 40px 0 0px;

    @media(max-width: 768px) {
      margin: 0px;
    }

    p {
      color: ${({ theme }) => theme.textColor};
    }
  }


  .briefIntro h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.briefIntroTitleColor};
  }

  .ql-editor {
    p, p span, .introDecTitleCss {
      text-align: center;
    }
  }
`;
