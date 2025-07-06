import styled from "styled-components"

export const HomeDynamicServiceStylesComponent = styled.div`

.homeDynamciServicesIntro {
  padding: 30px 0 0px;
  background-color:${({ theme }) => theme.lightWhiteF8}; 
  color: ${({ theme }) => theme.textColor};

  .briefIntro {
    .btn {
      border: 0 !important;
      text-decoration: underline;

      &:hover {
        background-color: transparent !important;
      }
    }
  }

  .homeDynamciServices {
    padding: 24px 0;

    .briefIntro {
        height: 320px;
        max-height: 100%;
        padding: 32px;
        /* border-bottom: 20px solid rgba(1, 32, 96, .2); */
        background-color: #f8f8f8;
        cursor: pointer;

        h5 {
            font-weight: 500;
        }
    }

    .row {
        .col-md-4 .briefIntro {
        background-repeat: no-repeat;
        background-position: right 15px bottom;
        border-radius: 8px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

        &:hover {
            background-color: #0d75ba;

            * {
            color: #fff;
            }
        }

        @media (max-width: 768px) {
            background-position: right 32px bottom;
        }
        }

        /* .col-md-4:nth-child(1) .briefIntro {
        background-image: url('../../../Images/studies.png');
        }

        .col-md-4:nth-child(2) .briefIntro {
        background-image: url('../../../Images/engineering.png');
        }

        .col-md-4:nth-child(3) .briefIntro {
        background-image: url('../../../Images/calculator.png');
        }
        .col-md-4:nth-child(3) .briefIntro {
        background-image: url('../../../Images/calculator.png');
        }
        .col-md-4:nth-child(4) .briefIntro {
        background-image: url('../../../Images/management.png');
        }

        .col-md-4:nth-child(5) .briefIntro {
        background-image: url('../../../Images/engineer.png');
        }

        .col-md-4:nth-child(6) .briefIntro{
        background-image: url('../../../Images/engineering-services.png');
        } */
    }
    }
}


`;