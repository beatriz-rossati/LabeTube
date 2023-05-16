import React from "react";
import "./App.css";
import { Main } from "./components/Main/Main"
import { Header } from "./components/Header/Header";



export default function App() {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    const card1 = {
        video: "https://picsum.photos/400/400?a=1",
        titulo: "Flor"
    }

    const card2 = {
        video: "https://picsum.photos/400/400?a=1",
        titulo: "Passaro"
    }
    const card3 = {
        video: "https://picsum.photos/400/400?a=1",
        titulo: "Carro"
    }
    const card4 = {
        video: "https://picsum.photos/400/400?a=1",
        titulo: "Bebe"
    }

    const infoUsuario1 = {
        foto: `https://picsum.photos/400/400?a=8`,
        nomeUsuario: "Junior"
    }

    const infoUsuario2 = {
        foto: `https://picsum.photos/400/400?a=8`,
        nomeUsuario: "Lavinia"
    }

    const infoUsuario3 = {
        foto: `https://picsum.photos/400/400?a=8`,
        nomeUsuario: "Carolina"
    }

    const infoUsuario4 = {
        foto: `https://picsum.photos/400/400?a=8`,
        nomeUsuario: "Dênis"
    }

    return (
        <div>
            <div className="tela-inteira">
                <Header />
                <Main />
                <footer>
                    <h4>Oi! Eu moro no footer!</h4>
                </footer>
            </div>
        </div>
    );
}