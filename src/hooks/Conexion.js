import { NextResponse } from "next/server";
import { headers } from "../../next.config";

let URL = "https://computacion.unl.edu.ec/pdml/practica1/index.php?";
export function url_api() {
  return URL;
}

export async function obtener(recurso) {
  const response = await fetch(URL + recurso);
  return await response.json();
}

export async function enviarLogin(data) {
  try {
    console.log(data);
    const response = await fetch(URL + "funcion=inicio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    return null;
  }
}


export async function obtenerAutos(external, token){
  try {
    const response= await fetch(URL+"funcion=listar_auto_user&external="+external, {
      method: "GET",
      headers: {
        "TOKEN-KEY":token,
      },
      
    })
    const res= await response.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function obtenerInfAuto(externalAuto, token){
  try {
    const response= await fetch(URL+"funcion=obtener_auto&external="+externalAuto, {
      method: "GET",
      headers: {
        "TOKEN-KEY":token,
      },
      
    })
    const res= await response.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function cambiarEstado(external, token, estado){
  try {
    const response= await fetch(URL+"funcion=cambiar_estado&external="+external+"&estado="+estado, {
      method: "GET",
      headers: {
        "TOKEN-KEY":token,
      },
      
    })
    const res= await response.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function datosAutos(data, token){
  try {
    const response= await fetch(URL, {
      method: "POST",
      headers: {
        "TOKEN-KEY":token,
        "Content-Type": "application/json",

      },

      body: JSON.stringify(data),
    })
    const res= await response.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}




