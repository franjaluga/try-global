import { useState } from "react";

export function Intro(){
    return(
        <>
            <h1>Base imponible de global complementario AT2022</h1>
            <ul>
                <li>
                    <input id="baseImponible"/>
                </li>
                <li>
                    <button id="boton1" onClick={ejecutar}>Calcular I.G.C</button>
                    <button id="boton2" onClick={borrar}>Borrar</button>
                </li>
        
            </ul>

            <h2 id="texto1"></h2>
            <h3 id="texto2"></h3>
            <h3 id="texto3"></h3> 
        </>
    )
}


const ejecutar = () => {
    const base = document.getElementById("baseImponible").value;
    const igc = evaluacion(base);
    const nFinal =  formatter.format(Math.round(igc));
    document.getElementById('texto1').innerHTML = nFinal;
}


const borrar = () => {
    document.getElementById('baseImponible').value = "";
}



export function evaluacion(data){
    
    if(data>=0 && data<=8775702.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 1";
        document.getElementById('texto3').innerHTML =`(${data} x 0.00) - 0 `;
        return (data*0.00)-0;
    }
    
    if(data>=8775702.01 && data<=19501560.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 2";
        document.getElementById('texto3').innerHTML =`IGC = (${data} x 0.04) - 351028.08 `;
        return (data*0.04)-351028.08;
    }

    if(data>=19501560.01 && data<=32502600.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 3";
        document.getElementById('texto3').innerHTML =`IGC =(${data} x 0.08) - 1131090.48 `;
        return (data*0.08)-1131090.48;
    }

    if(data>=32502600.01 && data<=45503640.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 4";
        document.getElementById('texto3').innerHTML =`IGC =(${data} x 0.135) - 2918733.48 `;
        return (data*0.135)-2918733.48;
    }

    if(data>=45503640.01 && data<=58504680.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 5";
        document.getElementById('texto3').innerHTML =`IGC =(${data} x 0.23) - 7241579.28`;
        return (data*0.23)-7241579.28;
    }

    if(data>=58504680.01 && data<=78006240.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 6";
        document.getElementById('texto3').innerHTML =`IGC =(${data} x 0.304) - 11570925.60`;
        return (data*0.304)-11570925.60;
    }

    if(data>=78006240.01 && data<=201516120.00){
        document.getElementById('texto2').innerHTML = "La base imponible se encuentra en el tramo 7";
        document.getElementById('texto3').innerHTML =`IGC =(${data} x 0.35) - 15159212.64`;
        return (data*0.35)-15159212.64;
    }

    if(data>=201516120.01){
        document.getElementById('texto2').innerHTML = "tramo-8";
        document.getElementById('texto3').innerHTML =`IGC =(${data} x 0.40) - 25235018.64`;
        return (data*0.40)-25235018.64;
    }
}

const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'CLP',
});
