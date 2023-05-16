import {StyledHeader} from "./HeaderStyle"

export function Header () {
    return (
        <StyledHeader>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </StyledHeader>
    )
}