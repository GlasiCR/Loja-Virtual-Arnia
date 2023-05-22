import Logo from '../../assets/images/Logo.png'
import {BgHeader, FraseTema, ImgLogo} from './styles'
import BotaoLoja from '../BotaoLoja/BotaoLoja'
//import FraseTema from './styles'
export default function HeaderLoja(){
    return(
        <BgHeader>
            <ImgLogo src={Logo}/>
            <FraseTema>Loja Virtual</FraseTema>
        </BgHeader>
    )
}