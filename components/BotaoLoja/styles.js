import styled from 'styled-components'
import { color } from'../../theme/constants'

export const Botao = styled.button`
    width: ${(props) => (props.width ? props.width : "211px")};
    height: ${(props) => (props.height ? props.height: "43px")};
    background: ${color.primary};
    border: none ;
    border-radius: 9px;
    color: white;
    font-weight: 800;
    font-size: ${(props) => (props.fontSize ? props.fontSize: "20px")};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight: "30px")};
    margin: 20px 3px;
    cursor: pointer;
`
export const ContainerBotao = styled.div`
    display: flex;
    justify-content: end
`