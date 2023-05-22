import HeaderLoja from "./HeaderLoja/Index"
import Footer from "./Footer"
import Botao from "./BotaoLoja/BotaoLoja"
import TituloPagina from "./TituloPagina/Index"
import Checkout from "./Checkout/Index"
import { Main} from "./styles"
import { SCREENS } from '../App'

export default function IndexCheckout ({mudarTela, selecaoFilme, setSelecaoFilme}){
    return(
        <Main>
            <HeaderLoja />
            <TituloPagina
            tituloPagina = "Checkout"
            selecaoFilmeLength = {selecaoFilme.length}/>
            <Checkout 
            mudarTela={mudarTela} 
            selecaoFilme={selecaoFilme} 
            setSelecaoFilme={setSelecaoFilme}/>
            <Botao
                nomeBotao = "Confirmar Compra"
                funcaoMudaPagina = {() => mudarTela(SCREENS.INDEXPRODUTO)}
            />
            <Footer />
        </Main>
    )
}