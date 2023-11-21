"use client";
import { datosAutos } from "@/hooks/Conexion";
import { get } from "@/hooks/SessionUtil";
import { useForm } from "react-hook-form";
import mensajes from "@/componentes/Mensajes";
import { useRouter } from "next/navigation";
import styles from "../globals.css";

export default function Crear_auto() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  const usuario = get("id");
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
      user: usuario,
      marca: data.marca,
      funcion: data.funcion,
    };
    console.log(data);

    const auto = await datosAutos(data, token);
    if (!auto) {
      mensajes("Error al guardar", info.msg, "error");
    } else {
      mensajes("guardado Exitoso", " Bienvenido");
      router.push("../auto_admin");
    }
  };

  return (
    <form onSubmit={handleSubmit(sendData)} className="formulario">
      <div className="campo">
        <label htmlFor="descripcion">Descripción:</label>
        <input type="text" id="descripcion" {...register("descripcion")} />
      </div>

      <div className="campo">
        <label htmlFor="subtotal">Subtotal:</label>
        <input type="text" id="subtotal" {...register("subtotal")} />
      </div>

      <div className="campo">
        <label htmlFor="iva">IVA:</label>
        <input type="text" id="iva" {...register("iva")} />
      </div>

      <div className="campo">
        <label htmlFor="total">Total:</label>
        <input type="text" id="total" {...register("total")} />
      </div>

      <div className="campo">
        <label htmlFor="descuento">Descuento:</label>
        <input type="text" id="descuento" {...register("descuento")} />
      </div>

      <div className="campo">
        <label htmlFor="placa">Placa del auto:</label>
        <input type="text" id="placa" {...register("placa")} />
      </div>

      <div className="campo">
        <label htmlFor="chasis">Chasis (debe ser único):</label>
        <input type="text" id="chasis" {...register("chasis")} />
      </div>

      <div className="campo">
        <label htmlFor="foto">Foto (con dirección de internet):</label>
        <input type="text" id="foto" {...register("foto")} />
      </div>

      <div className="campo">
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

      <div className="campo">
        <label htmlFor="funcion">Funcion:</label>
        <select id="funcion" {...register("funcion")}>
          <option value="guardarAuto">Guardar Auto</option>
        </select>
      </div>

      <button type="submit" className="boton-enviar">
        Enviar
      </button>
    </form>
  );
}
