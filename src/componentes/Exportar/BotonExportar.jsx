import React from 'react';
import * as XLSX from "xlsx";
import "./botonExportar.css"

export const BotonExportar = ({ datos, nombre }) => {

    const exportar = () => {

        const libro = XLSX.utils.book_new();
        const hoja = XLSX.utils.json_to_sheet(datos);
        XLSX.utils.book_append_sheet(libro, hoja, nombre);
        XLSX.writeFile(libro, `${nombre}.xlsx`);
    }
  return (
    <button className='exportar' onClick={exportar}><i class='bx bxs-download'></i>Exportar</button>
  )
}
