import styled from 'styled-components'
import {color} from '../../theme/constants'

export const FraseTema = styled.p`
    color: white;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    font-family: 'Poppins', sans-serif;
`

export const BgHeader = styled.div`
    background-color: ${color.primary};
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ImgLogo = styled.img`
    width: 128px;
    height: 38px;
`