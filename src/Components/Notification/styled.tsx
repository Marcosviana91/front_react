import {styled} from "styled-components";

const StyledNotification = styled.div`
    min-height: 100px;
    width: 100%;
    position: relative;

    background-color: #c7c7c7;
    border-radius: 4px;
    border: 2px solid #7a7a7a;
    padding: 8px;

    #timer-bar {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 4px;
        background-color: red;
    }

    button {
        position: absolute;
        top: 8px;
        right: 8px;

        width: 24px;
        height: 24px;
    }

    h3 {
        strong {
            font-size: 22px;
        }
    }

    hr {
        margin: 8px 0;
    }

    p {
        /* background-color: #c7c7c7; */
    }

`

export default StyledNotification