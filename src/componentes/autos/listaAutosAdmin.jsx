"use client";
import { obtenerAutos, URL } from "@/hooks/Conexion";
import { useEffect, useState } from "react";
import { get, save } from "@/hooks/SessionUtil";
import { useRouter } from "next/navigation";
import styles from "/src/app/globals.css";

const ListaAutosAdmin = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const usuario = get("id");
  const token = get("token");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await obtenerAutos(usuario, token);
        setData(result);
      } catch (error) {
        // Manejar errores aquí
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>Autos Guardados</h1>

      {data && (
        <div>
          {data.datos.map((auto) => {
            return (
              <div>
                <h4
                  onClick={() => {
                    save("idAuto", auto.external);
                    router.push("detalle_auto");
                  }}
                >
                  Placa: {auto.placa}
                </h4>
                <div key={auto.id} className="contenedor-tarjeta">
                  <div className="tarjeta-auto">
                    <h2>{auto.marca}</h2>
                    <p>Descripcion: {auto.descripcion}</p>
                    <p>Precio: {auto.total}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListaAutosAdmin;
