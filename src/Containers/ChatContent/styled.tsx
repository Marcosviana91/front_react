import { styled } from 'styled-components'

const StyledChatContent = styled.div`
    height: calc(100% - 36px - 1px);
    background-color: #7a7a7a;
    display: flex;
    flex-direction: column;
    justify-content: end;
    
    #msgs_box {
        padding: 8px;
        display: flex;
        flex-direction: column-reverse;
        overflow-y: scroll;
        gap: 4px;
        
        &::-webkit-scrollbar {
            display: none;
        }

        #msg_box {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }
    
    #chat_controls {
            height: 40px;
            padding: 8px 32px;
            display: flex;
            gap: 8px;
            border-top: 1px solid black;

            input {
                font-size: 16px;
                width: 100%;
                padding: 0 4px;
            }
            button {
                font-size: 24px;
                border: none;
                cursor: pointer;
                display: flex;
                background-color: #7a7a7a;
            }
        }
`
export default StyledChatContent