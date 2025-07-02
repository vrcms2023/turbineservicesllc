import styled from "styled-components";

export const AboutPageStyled = styled.div`
  .title {
    color: ${({ theme }) => theme.textColor};
    font-weight: 600 !important;
  }

  .subTitle { }

  .aboutPage {
      padding-bottom: 80px;

      .row {
        border-bottom: 1px solid ${({ theme }) => theme.grayddd};
        // box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        // box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
        // &:last-child {
        //   border-bottom: 0 !important;
        // }
      }
      
      .quill {
        background: none;
      }
      .ql-editor {
        padding-left: 0;
        padding-right: 0;
      }

      p {
        line-height: 1.6;
        margin-bottom: 12px
      }
      
    }
    
    .leftColumn {
      background-color: ${({ theme }) => theme.transparent};
    }
    .rightColumn {
      background-color: ${({ theme }) => theme.transparent};

      img {
        position: relative;
        transition: opacity 0.5s ease, transform 0.5s ease, border-radius 0.5s ease;
        // border-radius: 8px;
        max-width: auto;
        width: 100%;
        max-height: 280px;
        
      
        &:hover {
          &::before {
            content: 'Leon Phrama';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 30px 10px rgba(255, 255, 255, 0.5); /* Adjust the shadow color and size as needed */
            border-radius: inherit;
          }
      
          // transform: scale(1.1) rotate(-0deg);
          // border-radius: 5%; /* Change the border-radius to 50% for a circle */
        }
      }
    }

    ul, ol {
      padding: 0;
      margin: 0px 0 24px;
      list-style: none;

      li {
        // background-color: ${({ theme }) => theme.verylightgray};
        border-bottom: 1px solid ${({ theme }) => theme.lightgray};
        padding: 10px;

        @media(max-width: 768px) {
          padding: 10px 0;
        }
        
      }

      li:first-child {
        // border-top-left-radius: 5px;
        // border-top-right-radius: 5px;
      }

      li:last-child {
        // border: 0;
        // border-bottom-left-radius: 5px;
        // border-bottom-right-radius: 5px;
      }
    }

    hr:last-child {
      display: none;
    }

    .normalCSS, .flipCSS {
      // padding: 24px 10px;
      margin-top: 80px;
    }
      
    .flipCSS {
      flex-direction: row-reverse;
      background: #fbfbfb;
      // margin-bottom: 48px;

      @media (max-width: 768px) {
        padding: 0;
        margin: 0px;
      }
    }
`;
