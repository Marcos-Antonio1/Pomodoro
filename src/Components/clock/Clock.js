import React, { useEffect } from 'react'
import './Clock.css'
import song from './finish.mp3';
function Clock(){
    //times default
    const[tempoPomodoro,setTempoPomodoro]=React.useState()
    const [pausaCurta,setPauseCurta]=React.useState(5)
    const [pausaLonga,setPauseLonga]=React.useState(10)
    // variáveis de controle
    const[contagemAtiva,setContagemAtiva]=React.useState()

    const finish= new Audio(song);
    function start(){
        if (contagemAtiva === false)
            setContagemAtiva(true)
        else
            setContagemAtiva(false)
    }
    function cronometro(){
        setInterval(()=>{
            setTempoPomodoro(tempoPomodoro-1)
            console.log(tempoPomodoro)
        },1000)
    }
    useEffect(()=>{
        cronometro()
    },[contagemAtiva])
    return(
        <div className="container-clock">
            <div className="botoes">
                <button className="bt">Pomodoro</button>
                <button className="bt">Parada curta</button>
                <button className="bt">Parada Longa</button>
            </div>
            <div className="clock-area">
                <div className="clock">
                    <p> {tempoPomodoro}:00</p>
                </div>
                <div className="bottoes-controle">
                    <button  className="bt-iniciar" onClick={()=>start()}>Começar </button>
                    <button className="bt-parar" >Parar</button>
                    <button className="bt-reset" >Reset</button>
                </div>
            </div>
        </div>
    )
    
    
}

export default Clock;