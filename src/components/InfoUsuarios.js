import React from "react"

function InfoUsuarios (props){


    return (
        <div style={{display: "flex", alignItems: "center" ,direction: "row"}}>

            <img src={props.infoUsuario.foto} alt="" style={{width: "40px", height: "40px"}}/>
            <p> {`Nome usuario: ${props.infoUsuario.nomeUsuario}`}  </p> 
        {/* É boa prática colocar uma string entre chaves, pra usar como js e marca-lá como string usando `` e $ pras variaveis. */}
       
       </div>
   ) 
}

export default InfoUsuarios