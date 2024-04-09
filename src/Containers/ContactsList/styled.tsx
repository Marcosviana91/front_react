import { styled } from 'styled-components'

const StyledContactsList = styled.div`
        background-color: #ddd;
        border-right: 2px solid black;
        
        /* flex: 1; */
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 4px;

        position: relative;

        h2 {
            text-align: center;
        }

        #contacts_filter {
            margin: 8px;
            display: flex;
            justify-content: space-between;
            gap: 4px;

            input {
                flex: 1;
                padding: 0 4px;
            }
            button {
                font-size: 24px;
                border: none;
                cursor: pointer;
                display: flex;
            }
        }

        #contact_list{
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 4px;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        #about-me {
            background-color: #7a7a7a;
            z-index: 100;
            min-height: 64px;
            width: calc(100% - 40px); // Contraído
            width: calc(100%); // Expandido

            hr {
                margin: 8px 24px;
                border-color: #7a7a7a;
                border-width: 1px;
            }

            #loader-animation {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
`
export const StyledButton = styled.button`
    position: absolute;
    bottom: 14px;
    right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    font-size: 24px;
    z-index: 101;

    cursor: pointer;
`


export default StyledContactsList