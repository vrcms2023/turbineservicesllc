import styled from 'styled-components'

export const HomeCauroselComponentStyles = styled.div`

    .carousel-caption {
      position: absolute;
      z-index: 999;
      position: absolute;
      z-index: 999;
      text-align: left !important;
      bottom: 10%;
      right: 10%;
      width: 50%;

      h1 {
        letter-spacing: 0.1rem;
        font-weight: 600 !important;
        font-size: 3rem;
        margin: 0px;
        text-shadow: 0px 4px 0 rgba(0,0,0, .3);
        color:${({ theme }) => theme.carouselSlideTitleColor};
      }

      p.description {
        color: ${({ theme }) => theme.white};
        color:${({ theme }) => theme.carouselSlideCaptionColor};
      }

      .subtitle {
        color: ${({ theme }) => theme.white};
        letter-spacing: .1rem;
        text-transform: uppercase;
        font-weight: normal !important;
        font-family: "Barlow",sans-serif;
      }

    }



    @media (max-width: 768px) {
    .banner {
        height: 200px !important;
    }

    .carousel-item img,
    .homeCarousel::after {
        height: 50vh;
    }
    }

    /* .homeCarousel::after {
  content: "";
  display: block;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(22, 93, 61, 0.95) 95%
  );
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
} */

.noImg {
  min-height: 300px;
}

.carousel-item {
  overflow: hidden;
  height: 60vh;
  position: relative;
  /* box-shadow: 0 15px 0px #3cd9d2; */
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, .95) 0%, rgba(0, 0, 0, .25) 80%);
  z-index: 1;
  pointer-events: none;
}





@media (max-width: 768px) {
  .banner {
    height: 200px !important;
  }
  .carousel-caption {
    width: 70%;
    top: 50%;
  }
  .carousel-caption h1 {
    font-size: 1.6rem;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .carousel-caption span.subtitle {
    display: none;
  }
  .carousel-caption p.description {
    font-size: 0.9rem !important;
    letter-spacing: 0.1rem;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .carousel-item img,
  .homeCarousel::after {
    height: 50vh;
  }

  .homeCarousel::after {
  content: "";
  display: block;
  /* background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(22, 93, 61, 0.95) 95%
  ); */
  position: absolute;
  /* height: 65vh; */
  width: 100%;
  top: 0;
}


.homeMultyPurposeCarousel {
  /* background-color: rgba(34, 34, 34, .1); */
  position: relative;

  .container {
    background-color: rgba(34, 34, 34, 0.1);
  }

  .carousel-indicators {
    display: none;
    button {
      width: 16px;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    top: 24px !important;
    align-items: start;
    opacity: 0.7 !important;

    @media (max-width: 480px) {
      top: -16px !important;
    }
  }

  .carousel-control-prev {
    left: 88% !important;

    @media (min-width: 421px) and (max-width: 991px) {
      left: 78% !important;
    }

    @media (max-width: 480px) {
      left: 65% !important;
    }
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    padding: 12px;
    background-color: #222;
    border-radius: 4px;
    display: inline-block;
    background-size: 60%;
  }

  .carouselImg,
  .carouselDescription {
    height: 500px;

    @media (max-width: 480px) {
      height: auto;
    }
  }
  .carouselImg img {
    height: 100%;
    object-fit: cover;
  }

  .carouselDescription {
    padding: 0 80px;

    @media (max-width: 820px) {
      padding: 32px;
    }

    h1 {
      font-size: 32px;
      color: #222;
    }
    span {
      color: #6d2f9b;
    }
  }
}
}

`