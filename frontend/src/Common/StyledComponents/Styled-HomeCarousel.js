import styled from 'styled-components'

export const HomeCauroselComponentStyles = styled.div`

  .carousel-item::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, .15) 0%, rgba(0, 0, 0, .75) 80%);
    z-index: 1;
    pointer-events: none;
  }

  .carousel-item {
    overflow: hidden;
    height: 60vh;
    position: relative;

    @media (max-width: 480px) {
      height: 50vh;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .carousel-caption {
      position: absolute;
      z-index: 999;
      position: absolute;
      z-index: 999;
      text-align: left !important;
      bottom: 10%;
      right: 10%;
      width: 50%;

      @media(max-width: 1280px) {
        width: 60%;
        bottom: 10%;
      }

      @media(max-width: 1024px) {
        width: 70%;
        bottom: 15%;
      }

      @media(max-width: 480px) {
        padding: 0px !important;
        bottom: 5%;
      }

      h1 {
        letter-spacing: 0.1rem;
        font-weight: 600 !important;
        font-size: 3rem !important;
        margin: 0px;
        text-shadow: 0px 4px 0 rgba(0,0,0, .3);
        color:${({ theme }) => theme.carouselSlideTitleColor};
        word-wrap: break-word;
        hyphens: auto;
        line-height: 1.4;

        @media(max-width: 480px) {
          font-size: 2rem !important;
          font-weight: normal  !important;
        }
        }
      }

      p.description {
        color: ${({ theme }) => theme.white};
        color:${({ theme }) => theme.carouselSlideCaptionColor};

        @media(max-width: 768px) {
          font-size: 0.9rem !important;
          letter-spacing: 0.1rem;
          font-weight: normal;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }

      .subtitle {
        color: ${({ theme }) => theme.white};
        letter-spacing: .1rem;
        text-transform: uppercase;
        font-weight: normal !important;
        font-family: "Barlow",sans-serif;
        font-size: 1.2rem;

        @media(min-width: 768px) {
          font-size: .9rem;
        }

        @media(max-width: 768px) {
          display: none;
        }
      }

      .ql-editor {
        padding: 0;
        p, p span {
          color: #fff;
          font-size: 1.2rem !important;
          line-height: 1.4;
          font-weight: normal !important;
        }
      }
    }
  
// .noImg {
//   min-height: 300px;
// }


@media (max-width: 768px) {

  
// .banner {
//     height: 200px !important;
//   }

//   .homeCarousel::after {
//     content: "";
//     display: block;
//     position: absolute;
//     height: 60vh; 
//     width: 100%;
//     top: 0;
//   }

// HOME MULTI PURPOSE CAROUSEL

// .homeMultyPurposeCarousel {
//   background-color: rgba(34, 34, 34, .1);
//   position: relative;

//   .container {
//     background-color: rgba(34, 34, 34, 0.1);
//   }

//   .carousel-indicators {
//     display: none;
//     button {
//       width: 16px;
//     }
//   }

//   .carousel-control-prev,
//   .carousel-control-next {
//     top: 24px !important;
//     align-items: start;
//     opacity: 0.7 !important;

//     @media (max-width: 480px) {
//       top: -16px !important;
//     }
//   }

//   .carousel-control-prev {
//     left: 88% !important;

//     @media (min-width: 421px) and (max-width: 991px) {
//       left: 78% !important;
//     }

//     @media (max-width: 480px) {
//       left: 65% !important;
//     }
//   }

//   .carousel-control-prev-icon,
//   .carousel-control-next-icon {
//     padding: 12px;
//     background-color: #222;
//     border-radius: 4px;
//     display: inline-block;
//     background-size: 60%;
//   }

//   .carouselImg,
//   .carouselDescription {
//     height: 500px;

//     @media (max-width: 480px) {
//       height: auto;
//     }
//   }
//   .carouselImg img {
//     height: 100%;
//     object-fit: cover;
//   }

//   .carouselDescription {
//     padding: 0 80px;

//     @media (max-width: 820px) {
//       padding: 32px;
//     }

//     h1 {
//       font-size: 32px;
//       color: #222;
//     }
//     span {
//       color: #6d2f9b;
//     }
//   }
// }
}

`