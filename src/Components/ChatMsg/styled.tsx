import { styled } from 'styled-components'

const StyledChatMsg = styled.div`
    background-color: #bc8f8f94;
    padding: 4px 8px;
    max-width: 75%;
    border-radius: 8px;
    align-self: flex-end;
    
    p {
        color: #111111;
        font-size: 14px;
        background-color: #f5deb36e;
        border-radius: 4px;
        width: max-content;
        padding: 0 4px;
        margin-right: 8px;
        float: left;
    }
    
    h5 {
        color: black;
        font-size: 16px;
        text-align: justify;
    }

    &.others {
        align-self: flex-start;
        background-color: #13036e93;

        p {
            margin-left: 8px;
            float: right;
        }
    }
    `

export default StyledChatMsg