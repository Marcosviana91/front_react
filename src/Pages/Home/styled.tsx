import { styled } from 'styled-components'

const StyledHome = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
`

export const StyledButton = styled.button`
    position: absolute;
    bottom: 50vh;
    right: 50vw;
    padding: 8px;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #077;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    
    a {
        color: inherit;
        text-decoration: inherit;
    }
`

export default StyledHome