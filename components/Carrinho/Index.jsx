import {Container} from './styles'
import {Botao} from '../BotaoLoja/styles'
import { useState } from 'react'
export default function Carrinho({selecaoFilme, setSelecaoFilme}){
    const [valorTotalCompra, setValorTotal] = useState("")
    
    function addCarrinho(filme, id){
        const quantidadeCarrinho = selecaoFilme.map((filme) => {
            if(filme.id === id && filme.precoTotal >= 1){
            return{...filme, quantidade: filme.quantidade + 1, precoTotal: (filme.preco * filme.quantidade)+filme.preco}
            }
            return filme
        })
    setSelecaoFilme(quantidadeCarrinho)
    valorTotal(quantidadeCarrinho)
    }   
    
    function excluiCarrinho(filme, id){
        const quantidadeCarrinho = selecaoFilme.map((filme) => {
            if(filme.quantidade == 1){
                return filme
            }
            if (filme.id === id) {
                return{...filme, quantidade: filme.quantidade - 1, precoTotal: (filme.preco * filme.quantidade)-filme.preco}
            }
            return filme
        })
    setSelecaoFilme(quantidadeCarrinho)
    valorTotal(quantidadeCarrinho)
    }
    //Carrega informação do preço total do item
    function teste(quantidade, preco){
        const conta = quantidade * preco
        return conta.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',minimumFractionDigits: 2,})
    }

    function valorTotal() {
        const valorTotaldoTotal = selecaoFilme.reduce((totalCompra, filme) =>{
            return totalCompra + filme.precoTotal
        }, 0)
    setValorTotal(valorTotaldoTotal)
    }

    return(
        <>
            <div>
                {selecaoFilme.map((filme, id) => (
                <Container key={filme.id}>
                    <img src={filme.imagem}></img>
                    <div>
                        <h4>{filme.nome.toUpperCase()}</h4>
                        <h4>Valor: R$ {teste(filme.quantidade, filme.preco)}</h4>
                        <h4> Quantidade: {filme.quantidade}</h4>
                        <div>
                            <Botao width="49px" height="44px" fontSize="28px" lineHeight="0px"
                            onClick={() => addCarrinho(filme, filme.id)}>+</Botao>
                            <Botao width="49px" height="44px" fontSize="28px" lineHeight="0px"
                            onClick={() => excluiCarrinho(filme, filme.id)}>-</Botao>
                        </div>
                    </div>
                </Container>
                ))}
            </div>
            <h4>Total: R$ {valorTotalCompra}</h4>
        </>
    )
}

