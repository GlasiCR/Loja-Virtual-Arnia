import {Catalogo, MenuCatalogo, Input, InformacaoCatalogo} from './styles'

import Battlefield from '../../assets/images/Battlefield.png'
import DarkSouls from '../../assets/images/DarkSouls.png'
import Horizon from '../../assets/images/Horizon.png'
import Ragnarok from '../../assets/images/Ragnarok.png'
import ResidentEvil3 from '../../assets/images/ResidentEvil3.png'
import ColdWar from '../../assets/images/ColdWar.png'

const filmesDisponiveis = [
    {
        id: 1,
        nome: "Battlefield",
        preco: 10,
        imagem: Battlefield,
        quantidade: 1,
        precoTotal: 10
    },
    {
        id: 2,
        nome: "Dark Souls",
        preco: 10,
        imagem: DarkSouls,
        quantidade: 1,
        precoTotal: 10
    },
    {
        id: 3,
        nome: "Horizon",
        preco: 10,
        imagem: Horizon,
        quantidade: 1,
        precoTotal: 10
    },
    {
        id: 4,
        nome: "Ragnarok",
        preco: 10,
        imagem: Ragnarok,
        quantidade: 1,
        precoTotal: 10
    },
    {
        id: 5,
        nome: "ColdWar",
        preco: 10,
        imagem: ColdWar,
        quantidade: 1,
        precoTotal: 10
    },
    {
        id: 6,
        nome: "Resident Evil",
        preco: 10,
        imagem: ResidentEvil3,
        quantidade: 1,
        precoTotal: 10
    }
]
const CatalogoFilme = ( {mudarTela, selecaoFilme, setSelecaoFilme} ) => {
    
    const addFilme = (filme) => { 
        setSelecaoFilme([...selecaoFilme, filme])
    } 
    const excluirFilme = (filme) => {
        setSelecaoFilme(selecaoFilme.filter(item => (item.id) !== filme.id))
    }
    console.log(mudarTela)
    return(
        <>
            <Catalogo>
                {filmesDisponiveis.map((filme) => (                
                    <InformacaoCatalogo>
                        <img src={filme.imagem} />
                        <MenuCatalogo>
                            <Input
                            key = {filme}
                            type="checkbox"
                            onChange={(event) => event.target.checked ? addFilme(filme) : excluirFilme(filme)}
                            />
                            <h4>Valor: {filme.preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</h4>
                        </MenuCatalogo>
                    </InformacaoCatalogo>               
                ))}
            </Catalogo>            
        </>
    )
}
export default CatalogoFilme