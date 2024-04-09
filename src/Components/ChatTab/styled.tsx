import { styled } from 'styled-components'

const StyledChatTab = styled.div`
    background-color: #c7c7c7;
    height: 32px;
    width: 200px;
    position: relative;
    padding: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2px;
    
    
    img {
        height: 30px;
        width: 30px;
        border-radius: 2px;
        &.on{
            border: 2px solid green;
        }
        &.busy{
            border: 2px solid orangered;
        }
        &.off{
            border: 2px solid gray;
        }
    }
    
    h3 {
        font-size: 18px;
        color: black;
        width: 100%;
    }
    
    span {
        font-size: 24px;
        display: flex;
        align-items: center;
        column-gap: 4px;
        cursor: pointer;

        &#user_data {
            flex: 1;
        }
    }

    #chat_tab_active {
        content: '';
        height: 2px;
        background-color: blue;
        position: absolute;
        width: 100%;
        bottom: -2px;
        left: 0;
    }

    &.deactivated {
        background-color: #4e4e4e;
        h3 {
            color: #e7e7e7;
        }
        #chat_tab_active {
            background-color: #e7e7e7;
        }
        span {
            color: #e7e7e7;
        }
    }
    `

export default StyledChatTab