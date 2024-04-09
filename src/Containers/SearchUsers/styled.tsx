import { styled } from 'styled-components'

const StyledSearchUsers = styled.div`
    background-color: rgba(0, 0, 0, .9);
    position: absolute;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 200;

    > div {
        background-color: #7a7a7a;
        width: 640px;
        height: 440px;
        border-radius: 16px;
        
        #search-bar {
            padding: 16px;
            background-color: #ddd;
            border-radius: 16px 16px 0 0;
            border-bottom: 2px solid black;
            font-size: 30px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            
            input {
                height: 32px;
                flex: 1;
                margin: 0 16px;
                padding: 8px;
                font-size: 24px;
            }

            button {
                width: 32px;
                height: 32px;
                font-size: 24px;
                line-height: 16px;
            }
        }

        #search-result {
            padding: 8px;
            width: 100%;
            /* background-color: red; */
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: space-between;
        }
    }
`

export default StyledSearchUsers