import React from "react";
import InfoUsuarios from '../InfoUsuarios'
import {StyledCardVideo} from "./Style"

function CardVideo (props){



    return(
        <StyledCardVideo onClick={props.reproduzir}>
            <img src= {props.cardVideo.video} alt="" /> 
            <h4>{props.cardVideo.titulo}</h4>

            <InfoUsuarios infoUsuario = {props.infoUsuario} />
            

        </StyledCardVideo>
    );
 }



export default CardVideo;