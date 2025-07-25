import styled from 'styled-components'

export const TitleSubTitleStyled = styled.div`
    h5 {
        font-size: 2rem !important;
        font-weight: 500;
        color: ${({ theme }) => theme.gray444};

        @media(max-width: 991px) {
            line-height: 1.2rem;
            margin-top: 1rem;
        }

        span {
            font-size: 1.2rem !important;
            font-weight: 400;
            color:${({ theme }) => theme.gray666};
        }
    }
` 