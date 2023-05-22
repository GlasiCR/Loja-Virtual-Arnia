import { ContainerContador, DivContaador } from './Styles'
import { SCREENS } from '../../App'

export default function TituloPagina({tituloPagina, mudarTela, selecaoFilmeLength}){
    return(
        <ContainerContador>
            <h1>{tituloPagina}</h1>
            {mudarTela !== SCREENS.INDEXCHECKOUT && (
            <DivContaador>       
                {selecaoFilmeLength}
            </DivContaador>)}
        </ContainerContador>
    )
}