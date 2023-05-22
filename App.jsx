import IndexProduto from "./components/IndexProduto"
import IndexCarrinho from "./components/IndexCarrinho"
import IndexCheckout from "./components/IndexCheckout"
import { useState } from "react"

export const SCREENS = {
   INDEXPRODUTO: 0,
   INDEXCARRINHO: 1,
   INDEXCHECKOUT: 2,
}

export default function App() {
  const [pagina, setTrocaPagina] = useState(SCREENS.INDEXPRODUTO)
  const [selecaoFilme, setSelecaoFilme] = useState ([])
  return (
    <>     
      {pagina === SCREENS.INDEXPRODUTO && <IndexProduto mudarTela={setTrocaPagina} selecaoFilme={selecaoFilme} setSelecaoFilme={setSelecaoFilme}/>}
      {pagina === SCREENS.INDEXCARRINHO && <IndexCarrinho mudarTela={setTrocaPagina} selecaoFilme={selecaoFilme} setSelecaoFilme={setSelecaoFilme}/>}
      {pagina === SCREENS.INDEXCHECKOUT && <IndexCheckout mudarTela={setTrocaPagina} selecaoFilme={selecaoFilme} setSelecaoFilme={setSelecaoFilme}/>}
    </>
  )
}


