"use client";
import { obtener, URL } from "@/hooks/Conexion";
import { useEffect, useState } from "react";
import styles from "/src/app/globals.css";

const ListaAutos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await obtener("funcion=marcas");
        setData(result);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>Marcas de Carros:</h1>
      {data && (
        <div>
          {data.datos.map((auto) => (
            <div key={auto.id} className="contenedor-tarjeta">
              <div className="tarjeta-auto">
                <h2>{auto.marca}</h2>
                <p>Modelo: {auto.nombre}</p>
                <p>Estado: {auto.estado}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaAutos;

