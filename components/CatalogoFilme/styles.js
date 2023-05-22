import styled from 'styled-components'
import { color } from '../../theme/constants'

export const Catalogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    margin: 0 60px
`
export const MenuCatalogo = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 0
`
export const Input = styled.input`
    border-color: ${color.primary};
    
`
export const InformacaoCatalogo = styled.div`
    width: 33,33%;
`