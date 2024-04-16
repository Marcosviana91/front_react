import { styled } from 'styled-components'

const StyledChat = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    position: relative;
    
    
    #chat_box {
        flex: 4;
        #chat-tabs-bar {
            display: flex;
            background-color: #7a7a7a;
            border-bottom: 1px solid white;
            
            #toggle-show-contacts {
                width: 32px;
                font-size: 24px;
                line-height: 24px;
            }
        }
    }
`

export default StyledChat