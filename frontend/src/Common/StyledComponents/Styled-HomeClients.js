import styled from "styled-components";
import bgImage from "../../Images/background-styling-image.png";

export const HomeClientsStyled = styled.div`
  background-color: ${({ theme }) => theme.white};
  margin: 64px 0;
  background-attachment: fixed;
  // background-image: url(${bgImage});
  background-position: center;
  padding: 120px 0;

  @media (max-width: 480px) {
    padding: 32px 0;
  }


.clients-image-slider{
    display: flex;
    // place-it 
    position: relative;
    overflow: hidden;

    height: 100%;  
    width: 100%;
    justify-content: flex-end;

      &::before,
      &::after {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        content: '';
        height: 100%;
        width: 15%;
        z-index: 2;
        position: absolute;
      }
    
      &::before {
        left: 0;
        top: 0;
      }
    
      &::after {
        right: 0;
        top: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
      }


    .image-slider-track{
      display: flex;
      animation: play 40s linear infinite;
  
      &::hover{
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -o-animation-play-state: paused;
        animation-play-state: paused;
      }
      
      .slide{
        // height: 150px;
        width: 200px;
        display: flex;
        place-items: center;
        padding: 15px;
        perspective: 100px;
        margin-right: 70px;

        &:hover .clientPopOver {
          bottom: 0;
          left: 0;
          right: 0;
          // height: 100%;
        }

        .clientPopOver {
          // top: 0px;
          // z-index: 999;
          // opacity: .8;
          // transition: .5s ease;

          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          background-color: #008CBA;
          overflow: hidden;
          width: 100%;
          // height:0;
          transition: .5s ease;
          opacity: .85;
          
          p {
            margin: 0px 0 5px;
            padding: 0;
            transition: .5s ease;
            justify-content: center;
          align-items: center;
          }
        }

        img{
          height: 100%;
          width:100%;
        }
    }
  }
}

@keyframes play{
    0%{
        transform: translateX(100%);
    }

    100%{
        transform: translateX(-120%);
    }
}

.slider-container {
  .slick-slider {
    overflow: hidden !important;
  }

  .slick-list {
    width: 100% !important;
  }

  .slick-track {
    overflow: hidden !important;
  }
}

.slick-initialized .slick-slide {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px !important;
    height: 100px;
    padding: 16px;
    border: 2px dashed ${({ theme }) => theme.grayccc};
    background: white;
    margin: 0 12px;
    cursor: pointer;

  div {
    img {
      margin: 0 auto;
      width: 100%;
      height: 100% !important;
      // box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
    }
  }
}

.ql-editor {
  padding: 10px !imporrant;
  text-align: center;
  max-width: 240px;

  p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  }
}

    
 
  

`;
// https://www.youtube.com/watch?v=3Z780EOzIQs




// https://github.com/Coding-with-Robby/infinite-logo-carousel/tree/main

// https://codepen.io/kevinpowell/pen/BavVLra
// https://www.youtube.com/watch?v=iLmBy-HKIAwhttps://www.youtube.com/watch?v=iLmBy-HKIAw