"use client";
import { datosAutos, obtenerInfAuto } from "@/hooks/Conexion";
import { get } from "@/hooks/SessionUtil";
import { useForm } from "react-hook-form";
import mensajes from "@/componentes/Mensajes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../globals.css"


export default function Crear_auto() {
  const [data, setData] = useState();
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  const externalAuto = get("idAuto");
  const token = get("token");
  const sendData = async (data) => {
    //console.log(data);
    console.log("ghds");
    var data = {
      descripcion: data.descripcion,
      subtotal: data.subtotal,
      iva: data.iva,
      total: data.total,
      descuento: data.descuento,
      placa: data.placa,
      chasis: data.chasis,
      foto: data.foto,
      external: externalAuto,
      marca: data.marca,
      funcion: data.funcion,
    };
    console.log(data);

    const auto = await datosAutos(data, token);
    if (!auto) {
      mensajes("Error al guardar", info.msg, "error");
    } else {
      mensajes("guardado Exitoso", " Bienvenido");
      //router.push("../auto_admin");
    }
  };
  const recibirData = async (data) => {
    const result = await obtenerInfAuto(externalAuto, token);
    setData(result.datos[0]);
  };

  useEffect(() => {
    recibirData();
  }, []);
  return (
    <>
      {
        data ? 
        <form onSubmit={handleSubmit(sendData)}>
          <div>
            <h1>Datos de la API:</h1>
            {/*
            {data && 
            <pre>{JSON.stringify(data, null, 2)}</pre>}
          */}
          </div>
          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <input type="text" id="descripcion" defaultValue={data.descripcion} {...register("descripcion")} />
          </div>
    
          <div>
            <label htmlFor="subtotal">Subtotal:</label>
            <input type="text" id="subtotal" value={data.subtotal} {...register("subtotal")} />
          </div>
    
          <div>
            <label htmlFor="iva">IVA:</label>
            <input type="text" id="iva" value={data.iva}{...register("iva")} />
          </div>
    
          <div>
            <label htmlFor="total">Total:</label>
            <input type="text" id="total" value={data.total}{...register("total")} />
          </div>
    
          <div>
            <label htmlFor="descuento">Descuento:</label>
            <input type="text" id="descuento" value={data.descuento}{...register("descuento")} />
          </div>
    
          <div>
            <label htmlFor="placa">Placa del auto:</label>
            <input type="text" id="placa" value={data.placa}{...register("placa")} />
          </div>
    
          <div>
            <label htmlFor="chasis">Chasis (debe ser único):</label>
            <input type="text" id="chasis" value={data.chasis}{...register("chasis")} />
          </div>
    
          <div>
            <label htmlFor="foto">Foto (con dirección de internet):</label>
            <input type="text" id="foto" value={data.foto}{...register("foto")} />
          </div>
    
          <div>
            <label htmlFor="marca">Marca:</label>
            <select id="marca" {...register("marca")}>
              <option value="9843b3be-833d-11ee-a1d4-581122836c5f">Toyota</option>
              <option value="9843b6db-833d-11ee-a1d4-581122836c5f">Nissan</option>
              <option value="9843b7d4-833d-11ee-a1d4-581122836c5f">
                Chevrolet
              </option>
              <option value="9843b81f-833d-11ee-a1d4-581122836c5f">
                Mitsubishi
              </option>
              <option value="9843b866-833d-11ee-a1d4-581122836c5f">Audi</option>
            </select>
          </div>
    
          <div>
            <label htmlFor="marca">Funcion:</label>
            <select id="funcion" {...register("funcion")}>
              <option value="modificarAuto">Modificar Auto</option>
            </select>
          </div>
    
          <button type="submit">Enviar</button>
        </form>
        : <></>
      }  
    </>
  );
}
