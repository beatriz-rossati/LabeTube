import {StyledMain} from "./MainStyle"
import CardVideo from "../CardVideo/CardVidei"
import { Nav } from "../Nav/Nav"

export function Main () {
    
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    const cards = [
        {
            video: "https://picsum.photos/400/400?a=12",
            titulo: "Flor",
            usuario: "Romeu"
        },
        {
            video: "https://picsum.photos/400/400?a=13",
            titulo: "Paris",
            usuario: "Claudia"
        },
        {
            video: "https://picsum.photos/400/400?a=19",
            titulo: "Remédio",
            usuario: "Junior"
        },
        {
            video: "https://picsum.photos/400/400?a=27",
            titulo: "Flauta",
            usuario: "Claudia"
        }
    ]

    const usuarios = [
        {
            foto: `https://picsum.photos/400/400?a=83`,
            nomeUsuario: "Junior"
        },
        {
            foto: `https://picsum.photos/400/400?a=8`,
            nomeUsuario: "Romeu"
        },
        {
            foto: `https://picsum.photos/400/400?a=86`,
            nomeUsuario: "Claudia"
        },
        {
            foto: `https://picsum.photos/400/400?a=8`,
            nomeUsuario: "Alisson"
        },
        
    ]


    return (
        <StyledMain>
            <Nav />

            <section className="painel-de-videos">

                <>
                    {cards.map(card => (
                         <CardVideo 
                         cardVideo ={card} 
                         reproduzir = {reproduzVideo}
                         infoUsuario= {usuarios.find (usuario => (
                            usuario.nomeUsuario == card.usuario
                         ))}/> 
                    ))}
                </>

            </section>

        </StyledMain>
    )
}