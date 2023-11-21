
import { autos, enviar, enviarLogin } from "./Conexion";
import { save  } from "./SessionUtil";

export async function inicio_sesion(data) {
  const sesion = await enviarLogin(data);
  if (sesion.code == 200 && sesion.jwt) {
    save("token", sesion.jwt);
    save("id", sesion.external);
    save("user", sesion.usuario);
  }
  return sesion;
}

