import HeaderLoja from "./HeaderLoja/Index"
import CatalogoFilme from "./CatalogoFilme/Index"
import Footer from "./Footer"
import Botao from "./BotaoLoja/BotaoLoja"
import TituloPagina from "./TituloPagina/Index"
import { Main } from "./styles"
import { SCREENS } from '../App'

export default function IndexProduto ({mudarTela, selecaoFilme, setSelecaoFilme}){
    return(
        <Main>
            <HeaderLoja />
            <TituloPagina
            tituloPagina = "Produtos"
            selecaoFilmeLength = {selecaoFilme.length}/>
            <CatalogoFilme 
                mudarTela={mudarTela} 
                selecaoFilme={selecaoFilme} 
                setSelecaoFilme={setSelecaoFilme}/>
            <Botao
                nomeBotao = "Ir para Carrinho"
                funcaoMudaPagina = {() => mudarTela(SCREENS.INDEXCARRINHO)}
            />
            <Footer />
        </Main>
    )
}