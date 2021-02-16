import React from 'react'
import './Clock.css'

function Clock(){
    const [atualTempo,setAtualTempo] =React.useState(25)
    function iniciarContagem(){
    }
    function pararContagem(){

    }
    function resetarContagem(){

    }
    function paradaCurta(){

    }
    function ParadaLonga(){

    }

    return(
        <div className="container-clock">
            <div className="botoes">
                <button className="bt">Pomodoro</button>
                <button className="bt">Parada curta</button>
                <button className="bt">Parada Longa</button>
            </div>
            <div className="clock-area">
                <div className="clock">
                    <p>{atualTempo}:00</p>
                </div>
                <div className="bottoes-controle">
                    <button onClick={e => iniciarContagem()} className="bt-iniciar">Começar </button>
                    <button className="bt-parar" >Parar</button>
                    <button className="bt-reset" >Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Clock;