import StyledHome, { StyledButton } from './styled'

function Home() {
    window.document.title = 'Faça login'

    return (
        <StyledHome>
            <StyledButton type="button"
            >
                <a href="/login">

                    Logar
                </a>
            </StyledButton>
        </StyledHome>
    )
}

export default Home