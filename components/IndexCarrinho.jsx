import HeaderLoja from "./HeaderLoja/Index"
import Carrinho from"./Carrinho/Index"
import Footer from "./Footer"
import Botao from "./BotaoLoja/BotaoLoja"
import TituloPagina from "./TituloPagina/Index"
import { Main, Botoes } from "./styles"
import { SCREENS } from '../App'

export default function IndexCarrinho ({mudarTela, selecaoFilme, setSelecaoFilme}){
    return(
        <Main>
            <HeaderLoja />
            <TituloPagina
            tituloPagina = "Carrinho"
            selecaoFilmeLength = {selecaoFilme.length}/>
            <Carrinho 
                mudarTela={mudarTela} 
                selecaoFilme={selecaoFilme} 
                setSelecaoFilme={setSelecaoFilme}/>
            <Botoes>
                <Botao
                    nomeBotao = "Voltar"
                    funcaoMudaPagina = {() => mudarTela(SCREENS.INDEXPRODUTO)}
                />
                <Botao
                    nomeBotao = "Finalizar Compra"
                    funcaoMudaPagina = {() => mudarTela(SCREENS.INDEXCHECKOUT)}
                />
            </Botoes>
            <Footer />
        </Main>
    )
}