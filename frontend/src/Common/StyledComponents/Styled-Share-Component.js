import styled from "styled-components";

export const StyledShareComponent = styled.div`
    position: absolute;
    top: 0px;

    .share, .share i {
        color: ${({ theme }) => theme.clientPrimaryColor};
    }

    .share-buttons {
        position: absolute;
        top: 2.3rem;
        right: 0
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background: #f8f8f8;
        width: 100%;
        z-index: 9;
        border: 1px solid #ddd;
        
    

        a {
            display: block;
            padding: 1rem;
            text-align: center;
            border-bottom: 1px solid ${({ theme }) => theme.grayddd};
            color: ${({ theme }) => theme.gray777};

            &:last-child {
                border: 0;
            }

            &:hover {
                color: ${({ theme }) => theme.clientPrimaryColor};
            }

            i {
                font-size: 2rem;
            }
        }
    }
`