import { createGlobalStyle } from "styled-components";
import careerBgImg from "../../Images/careers-bg.jpg";
import commonBgImg from "../../Images/background-styling-image.png";
import homeProjectsBgImg from "../../Images/home-ongoing-bg.jpg";
import homeFutureBgImg from "../../Images/home-future-bg.jpg";
import homeCompletedBgImg from "../../Images/home-completed-bg.jpg";
import homeServicesBgImg from "../../Images/homeServicesBg.jpg";
import homeMultiServicesBgImg from "../../Images/homeMultiServicesBg.jpg";

export const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding: 0;
}

ul, li {
    margin: 0;
    padding:0;
    // list-style: none;
}

a {
  color: ${({ theme }) => theme.gray222};
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: rgba(109, 47, 155, .3) !important;
  &:hover {
    color: ${({ theme }) => theme.footerLinkHoverColor};
    text-decoration-color: rgba(109, 47, 155, 1) !important;
  }
}

h1, h2, h3, h4, h5, h6, th {
    // font-family: Poppins;
    font-family: "Barlow", sans-serif;
}

th {
  font-weight: normal
}
td {
  font-size: 15px;
}

body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    line-height: 1.6;
}

.btn {
  // border-radius: 0.375rem !important;
  
  // transition: all .35s;
  // padding: .6rem 1.2rem !important;
  // font-family: Amarante;
  font-family: "Barlow", sans-serif;
  font-weight: normal !important;
  border-radius: 4px !important;

  // &:hover svg { transform: rotate(-45deg);}
  &:hover {
    // letter-spacing: .1rem;
  }
  &:hover svg { 
    transform: translateX(10px);
  }

  // @media (max-width: 480px) {
  //   width: 100%;
  // }
}
.btn-primary {
  background-color:${({ theme }) => theme.btnPrimary}; 
  color:${({ theme }) => theme.btnPrimaryTextColor};
  // border: 1px solid ${({ theme }) => theme.btnPrimaryBorderColor} !important; 

}
.btn-primary:hover {
  background-color:${({ theme }) => theme.btnPrimaryHover}; 
  color:${({ theme }) => theme.btnPrimaryTextHoverColor};
  // border: 1px solid ${({ theme }) => theme.btnPrimaryBorderHoverColor} !important; 
}

.btn-secondary {
  background-color:${({ theme }) => theme.btnSecondry}; 
  color:${({ theme }) => theme.btnSecondryTextColor};
  border: 1px solid ${({ theme }) => theme.btnSecondryBorderColor} !important;
}

.btn-secondary:hover {
  background-color:${({ theme }) => theme.btnSecondryHover}; 
  color:${({ theme }) => theme.btnSecondryTextColor};
  border: 1px solid ${({ theme }) => theme.btnSecondryBorderHoverColor} !important;
  
}

.btn-outline {
  // background-color:${({ theme }) => theme.btnOutline}; 
  color:${({ theme }) => theme.btnOutlineTextColor};
  border: 1px solid ${({ theme }) => theme.btnOutlineBorderColor} !important; 
  font-weight: 600;
}

.btn-outline:hover { 
  background-color:${({ theme }) => theme.btnOutlineHover}; 
  color:${({ theme }) => theme.btnOutlineTextHoverColor};
  border: 1px solid ${({ theme }) => theme.btnOutlineBorderHoverColor} !important; 
}

.moreLink {
  color:${({ theme }) => theme.primaryColor};
}

.moreLink:hover {
  color:${({ theme }) => theme.secondaryColor} !important;
}

.btn.moreLink {
    float: left !important;
    font-size: .8rem;
    margin-top: 12px;
    letter-spacing: .1rem;

    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-style: dashed;
    text-decoration-color: rgba(109, 47, 155, .3) !important;
    transition: 
        color 0.3s ease,
        text-decoration-color 0.3s ease,
        margin-top 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.footerLinkHoverColor};
        text-decoration-color: rgba(109, 47, 155, 1) !important;
        margin-top: 1.2rem;
    }
}

.carousel-caption {
    h1 { color:${({ theme }) => theme.carouselSlideTitleColor};     }
    p { color:${({ theme }) => theme.carouselSlideCaptionColor}; }
}

.ABrief {
    background-color:${({ theme }) => theme.verylightgray}; 
    color:${({ theme }) => theme.ABriefTextColor};
}
.ABrief h3, .ABrief .title {border-color: ${({ theme }) =>
  theme.ABriefTitleBorderColor}; }

  .ABrief h3::before, .ABrief .title::before {border-color: ${({ theme }) =>
    theme.ABriefTitleBorderColor}; }

  // .ABriefAbout {
//     background: rgb(225,242,253);
//     background: linear-gradient(90deg, rgba(225,242,253,1) 0%, rgba(255,255,255,1) 100%);
//     background-color:${({ theme }) => theme.ABriefAboutBg}; 
//     color:${({ theme }) => theme.ABriefAboutTextColor};
// }

// .ABriefAbout h3, .ABriefAbout .title { border-color: ${({ theme }) => theme.ABriefAboutTitleBorderColor}; }

// .ABriefAbout h3::before, .ABriefAbout .title::before { border-color: ${({ theme }) => theme.ABriefAboutTitleBorderColor}; }

.homeServices {
    color:${({ theme }) => theme.secondaryColor}; 
    h2 {
        color:${({ theme }) => theme.secondaryColor}; 
        border-color: ${({ theme }) => theme.primaryColor}; 
    }

    h3 {
        color:${({ theme }) => theme.secondaryColor}; 
    }

    a.btn {
        background-color:${({ theme }) => theme.primaryColor};
    }

    a.btn:hover {
        background-color:${({ theme }) => theme.secondaryColor};
    }
}

.moreLink:hover {
  color:${({ theme }) => theme.btnLinkTextHoverColor};
}

.homeCareers {
    background-color:${({ theme }) => theme.teritoryColor};
    background-image:url(${careerBgImg});
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div, p {
        text-align: center !important;
    }

    .briefIntro {
        padding-left: 0 !important;
        padding-bottom: 0 !important;
        
    }

    @media (max-width: 991px) {
    
        .briefIntro {
            padding-left: 1rem !important;
            padding-bottom: 1rem !important;
        }
    }
}

// Testimonial Component Styles



// End of Testimonial Component Styles //

.testimonialList img{
    width: 120px;
    height: 120px;
    box-shadow: 0 5px 5px ${({ theme }) => theme.teritoryColor};
}
.testimonialList:last-child {
    border: none !important
}

.lineClamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.lc1 {-webkit-line-clamp: 1; line-clamp: 1;}
.lc2 {-webkit-line-clamp: 2; line-clamp: 2;}
.lc3 {-webkit-line-clamp: 3; line-clamp: 3;}
.lc4 {-webkit-line-clamp: 4; line-clamp: 4;}
.lc5 {-webkit-line-clamp: 5; line-clamp: 5;}
.lc6 {-webkit-line-clamp: 6; line-clamp: 6;}
.lc7 {-webkit-line-clamp: 7; line-clamp: 7;}
.lc8 {-webkit-line-clamp: 8; line-clamp: 8;}
.lc9 {-webkit-line-clamp: 9; line-clamp: 9;}

.cursorPointer {
  cursor: pointer
}

.pageTitle {
  color: ${({ theme }) => theme.pageTitleColor};
}


.newsModel {
        position: fixed;
        z-index: 999999;
        top: 0px;
        bottom: 0px;
        left: 0px;
        // width: 500px;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .newsModel img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: 0%;
      }
      
      .newsModalWrapper {
        width: 60%;
        height: 80%;
        margin: auto;
        border-radius: 10px;
        overflow: auto;
      }
      
      // .newsModalWrapper .newsDetails {
      //   max-height: 95%;
      //   overflow-y: auto;
      // }

      .newsModalWrapper .newsDetails .quill {
        ol li, ul li {
          padding: 8px;
          border-bottom: 1px solid #eee;
          width: 60%;
          margin: auto;
        }
      }
      
      @media (max-width: 768px) {
        .newsModalWrapper {
          width: 100%;
        }
      
        .newsModalWrapper .newsDetails {
          max-height: 300px;
        }
    }
    .error {
      color: ${({ theme }) => theme.error};
      text-align: center;
      margin: 0.5rem 0
    }


    .page-link {
      color: ${({ theme }) => theme.secondaryColor} !important;
    }

    .active>.page-link, .page-link.active {
      background-color: ${({ theme }) => theme.secondaryColor} !important; 
      color: ${({ theme }) => theme.white} !important;
      border-color: ${({ theme }) => theme.primaryColor} !important;
    }

    .deleteSection {
      position: absolute;
      top: 55px;
      right: 0px;
      z-index: 999;
      cursor: pointer;
      margin-top: 5px;
      width: auto !important;
      border: 2px dashed rgb(255, 193, 7);
      background-color: ${({ theme }) => theme.white};
      padding: 5px 12px;
    }

    .editIcon {
      right: 0px;
      padding: 0 !important;
    }

    .mt-6 {
      margin-top: 6rem;
    }

    .mt-7 {
      margin-top: 7rem;
    }

    .mt-8 {
      margin-top: 8rem;
    }

    .mt-9 {
      margin-top: 9rem;
    }

    .mt-10 {
      margin-top: 10rem;
    }

    .mt-11 {
      margin-top: 11rem;
    }

    .mt-12 {
      margin-top: 12rem;
    }

    // label {
    //   font-weight: 500 !important;
    //   font-size: 14px !important;
    // }

    input,
    textarea, select {
      background-color: ${({ theme }) => theme.inputBg};
      border: 1px solid ${({ theme }) => theme.inputBorder} !important;
      padding: 10px !important;
      border-radius: 0px !important;
      color: ${({ theme }) => theme.gray444} !important;
      font-size: 14px !important;
    }
    input[type="checkbox"], input[type="radio"] {
      padding: 0;
      margin: 0;
      border-radius:3px !important;
      background-color: ${({ theme }) => theme.white};
    }

    input:checked[type=checkbox] {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    .scrollTop {
      background-color: ${({ theme }) => theme.clientColor};
    }

    .commonBg, .homeDynamciServicesIntro, .homeServicesContainer, .homeServicesBrief, .projectsList {
      background-image:url(${commonBgImg});
      background-attachment: fixed;
      background-size: 100%;
      background-position: center;
    }

    // .homeServicesContainer{
    //   background-image:url(${homeMultiServicesBgImg});
    // }

    .homeDynamciServices {
      background-image:url(${homeServicesBgImg});
      background-attachment: fixed;
      // background-color: ${({ theme }) => theme.clientColor};
    }

    .homeProjectsContainer {
      padding: 0;
      
      .cardItem:nth-child(1):after, .cardItem:nth-child(2):after, .cardItem:nth-child(3):after {
        content: "";
        width: auto;
        position: relative;
        top: -60px;
        height: 60px;
        display: block;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      .cardItem:nth-child(1):after {
        background: ${({ theme }) => theme.green};
      }

      .cardItem:nth-child(2):after {
        background: ${({ theme }) => theme.orange};
      }

      .cardItem:nth-child(3):after {
        background: ${({ theme }) => theme.violet};
      }

      .cardItem {
        .card {
          background-repeat: no-repeat;
          background-size: cover;
        }
      }

      .cardItem:nth-child(1) {
        .card {
          background-image:url(${homeProjectsBgImg});
          }
      }

      .cardItem:nth-child(2) {
        .card {
          background-image:url(${homeFutureBgImg});
        }
      }

      .cardItem:nth-child(3) {
        .card {
          background-image:url(${homeCompletedBgImg});
        }
      }

      .card-body {
        background-color: ${({ theme }) => theme.white};
        border-radius: 4px;
        padding: 48px 32px !important;
        z-index: 9;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);

        p {
          color: ${({ theme }) => theme.gray444};
        }
        h5 {
          letter-spacing: 0;
          text-transform: capitalize;
          font-weight: normal !important;
          color: ${({ theme }) => theme.gray444};
        }
        h5::first-letter {
          font-weight: 500;
          color: ${({ theme }) => theme.clientSecondaryColor};
        }
      }
    }

    .modal {
      z-index: 99999 !important;
      .modal-header {
        padding: .7rem 1rem !important;
      }
      .modal-header .modal-title {
        color: ${({ theme }) => theme.gray444} !important;
        font-weight: 600 !important;
        font-size: 1.4rem !important;
      }

      .modal-body {
        padding: 1.5rem 2rem !important;
      }
    }

    .quill {
      background: none !important;

      .ql-editor {
        padding: 1rem 0 0px;
        color: ${({ theme }) => theme.gray444} !important;
      }
    }

    
`;
