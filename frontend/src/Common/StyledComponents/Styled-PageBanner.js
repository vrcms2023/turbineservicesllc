import styled from "styled-components";

export const PageBannerStyled = styled.div`
  .pageBanner {
    img {
      object-fit: cover;
      // object-position: center;
      height: 240px;
    }
    .titleCaption {
      position: absolute;
      top: 0;
      bottom: 0px;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 10px 100px 20px;

      .title {
        color: ${({ theme }) => theme.pageBannerTitleColor};
        font-family: ${({ theme }) => theme.headingFontFamily}; 
        font-weight: 500 !important;
        // letter-spacing: 0.25rem;
        font-size: 3rem !important;
        text-shadow: 0px 4px 0 rgba(0,0,0, .3)
        margin: 0px;
      }
      .subTitle {
        color: ${({ theme }) => theme.pageBannerSubTitleColor};
        font-weight: normal !important;
        font-size: 1.1rem !important;
        font-family: ${({ theme }) => theme.headingFontFamily}; 
        letter-spacing: .1rem;
        text-transform: uppercase !important;
      }
      .description {
        color: ${({ theme }) => theme.pageBannerTextColor};
        width:50%
      }

      .title,
      .description {
        // width: 50%;
      }
    }

    @media (max-width: 576px) {
      img {
        height: 230px;
      }

      .titleCaption {
        padding: 10px 50px 40px;

        // .title {
        //   overflow: hidden;
        //   display: -webkit-box !important;
        //   -webkit-box-orient: vertical;
        //   -webkit-line-clamp: 2;
        // }

        // .subTitle {
        //   display: none;
        // }

        .title {
          font-size: 2.5rem !important;
        }

        .description {
          width: 100%;
          font-size: 1rem !important;
          overflow: hidden;
          display: -webkit-box !important;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
`;
