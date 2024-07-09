import React, { useState, useEffect } from "react";
export function Semaforo() {
  const [color, setColor] = useState(null); 

  useEffect(() => {
  },[color]); 
  const handleClick = (selectedColor) => {
    setColor(selectedColor); 
  };
  const handleAlternar=() =>{
    const colores = ['rojo','amarillo','verde']
    let randomColor = Math.floor(Math.random()*colores.length)
    setColor(colores[randomColor])
  }
  return (
    <>
      <div className="cuerpo-semaforo">
        <div
          className={`rojo ${color === "rojo" ? "seleccionado" : ""}`}
          onClick={() => handleClick("rojo")}
        ></div>
        <div
          className={`amarillo ${color === "amarillo" ? "seleccionado" : ""}`}
          onClick={() => handleClick("amarillo")}
        ></div>
        <div
          className={`verde ${color === "verde" ? "seleccionado" : ""}`}
          onClick={() => handleClick("verde")}
        ></div>
      </div>
      <div className="mt-5 m-auto text-center col-1">
        <button className="btn btn-primary" onClick={handleAlternar}>Alternar Color</button>
      </div>
    </>
  );
}
