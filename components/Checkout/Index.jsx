export default function Checkout(mudarTela, selecaoFilme, setSelecaoFilme){
    return(
        <>
        <h2 fontSize="24px" lineHeight="36px">Produtos Escolhidos</h2>
           
            
        <h2 fontSize="24px" lineHeight="36px">Total: {selecaoFilme.length}</h2>
        </>
    )
}