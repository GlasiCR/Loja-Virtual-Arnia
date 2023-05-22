import Master from '../../assets/images/Master.png'
import Visa from '../../assets/images/Visa.png'
import Boleto from '../../assets/images/Boleto.png'
import Hipercard from '../../assets/images/Hipercard.png'

import { LegendaRodape, ContainerRodape, Bandeiras } from './styles'
export default function Footer(){
    // const bandeiras = [
    // ]


    return(
        <ContainerRodape>
            <LegendaRodape >Meios de Pagamento</LegendaRodape >
            <Bandeiras>
                <img src={Visa}/>
                <img src={Master}/>
                <img src={Boleto}/>
                <img src={Hipercard}/>
            </Bandeiras>
        </ContainerRodape>
    )
}