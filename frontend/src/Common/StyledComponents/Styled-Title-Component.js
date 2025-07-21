import styled from 'styled-components'

export const TitleSubTitleStyled = styled.div`
    h5 {
        font-size: 2rem !important;
        font-weight: 500;
        color: ${({ theme }) => theme.gray444};

        span {
            font-size: 1.4rem !important;
            font-weight: 400;
            color:${({ theme }) => theme.gray555};
        }
    }
`