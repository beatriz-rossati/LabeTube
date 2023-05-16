import {StyledNav} from "./NavStyle"

export function Nav () {
    return (
        <StyledNav className="menu-vertical">
        <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
        </ul>
        </StyledNav>
    )
}