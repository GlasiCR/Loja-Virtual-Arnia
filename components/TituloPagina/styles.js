import styled from 'styled-components'
import { color } from '../../theme/constants'

export const ContainerContador = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
`
export const DivContaador = styled.div`   
    width: 49px;
    height: 44px;
    background: ${color.primary};
    border: 1px solid ${color.primary};
    border-radius: 9px;
    color: white;
    font-weight: 400;
    font-size: 28px;
    line-height: 48px;
    text-align: center;    
`