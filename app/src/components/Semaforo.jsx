import React from "react";
import { useState, useEffect } from "react";
export function Semaforo(){
    
    return(
        <>
            <div className="cuerpo-semaforo">
                <div className="rojo"></div>
                <div className="amarillo"></div>
                <div className="verde"></div>
            </div>
        </>
    );
}