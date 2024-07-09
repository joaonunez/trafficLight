import React, { useState, useEffect } from "react";
export function Semaforo() {
  const [color, setColor] = useState(null); 

  useEffect(() => {
    
  },[color]); 

  const handleClick = (selectedColor) => {
    setColor(selectedColor); 
  };

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
    </>
  );
}
