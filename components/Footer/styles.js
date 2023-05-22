import styled from 'styled-components'
import {color} from '../../theme/constants'

export const LegendaRodape = styled.small`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    margin-left: 10px
`
export const ContainerRodape = styled.div`
    border: 4px solid ${color.primary};
    width: 100%;
    height: 86px;
`
export const Bandeiras = styled.div`
    display: flex;
    gap: 5px;
    height: 35px;
    justify-content: space-around;
    margin: 10px 0;
`