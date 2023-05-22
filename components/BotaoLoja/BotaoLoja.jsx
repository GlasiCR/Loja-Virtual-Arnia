import { Botao, ContainerBotao } from './styles'

export default function BotaoLoja({nomeBotao, funcaoMudaPagina}){
    return(
        <ContainerBotao>
            <Botao
            type="button"
            onClick={funcaoMudaPagina}>
                {nomeBotao}
            </Botao>
        </ContainerBotao>
    )
}