import {styled} from 'styled-components'

const StyledContactCard = styled.div`
    background-color: #c7c7c7;
    height: 64px;
    width: 100%;
    max-width: 300px;
    padding: 2px;
    display: flex;
    gap: 4px;
    cursor: pointer;

    img {
        height: 60px;
        width: 60px;
        border-radius: 4px;

        &.on{
            border: 2px solid green;
            box-shadow: 0 0 8px 2px green;
        }
        &.busy{
            border: 2px solid orangered;
            box-shadow: 0 0 4px 1px orangered;
        }
        &.off{
            border: 2px solid gray;
        }
    }
    
    > div {
        width: 100%;

        h3 {
            color: black;
            width: 100%;
            margin: 4px 0;
        }

        #contact_status_message {
            color: #3b3b3b;
        }
    }

    #action-buttons {
        width: max-content;
        display: flex;
        align-items: center;
        
        button {
            padding: 1px;
            font-size: 24px;
            line-height: 16px;
        }
    }
`

export default StyledContactCard