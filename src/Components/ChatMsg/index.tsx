import StyledChatMsg from "./styled"

interface ChatMsgProps {
    timestamp: string
    message: string
    sender: | 'me' | 'others'
}

function timeStampToHumamRedable(timestamp: string): string {
    let temp = timestamp

    const ano = Number(timestamp.substring(0, 4))
    const mes = Number(timestamp.substring(4, 6))
    const dia = Number(timestamp.substring(6, 8))
    const hora = Number(timestamp.substring(8, 10))
    const minuto = Number(timestamp.substring(10, 12))
    const segundo = Number(timestamp.substring(12, 14))
    // const dataDaMenssagem = new Date(ano)

    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth() + 1
    const diaAtual = dataAtual.getDate()
    const horaAtual = dataAtual.getHours()
    const minutoAtual = dataAtual.getMinutes()
    const segundoAtual = dataAtual.getSeconds()

    temp = `${dia}/${mes}/${ano}`

    if (dia === diaAtual - 1 && mes === mesAtual && ano === anoAtual) {
        temp = `Ontem às ${hora}:${minuto}:${segundo}`
    }

    if (dia === diaAtual && mes === mesAtual && ano === anoAtual) {
        temp = `Hoje às ${hora}:${minuto}:${segundo}`

        if (horaAtual - hora  <= 5)  {
            temp = `Há ${horaAtual - hora} hora(s)`
            
            if (horaAtual - hora  === 1) {
                temp = `Há ${minutoAtual - minuto+60} minuto(s)`
                
                if (minutoAtual - minuto > 0) {
                    temp = `Há 1 hora e ${minutoAtual - minuto} minuto(s)`
                }

            }
            if (horaAtual - hora  === 0) {
                temp = `Há ${minutoAtual - minuto} minuto(s)`
                
                if (minutoAtual - minuto === 0) {
                    temp = `Há ${segundoAtual - segundo} segundo(s)`
                }
            }
        }
    }

    return temp
}

function ChatMsg(props: ChatMsgProps) {
    return (
        <StyledChatMsg className={props.sender}>
            <p id="contact_name">{timeStampToHumamRedable(props.timestamp)}</p>
            <h5>{props.message}</h5>
        </StyledChatMsg>
    )
}

export default ChatMsg