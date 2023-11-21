"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { inicio_sesion} from "@/hooks/Autenticacion";
import { estaSesion } from "@/hooks/SessionUtil";
import mensajes from "@/componentes/Mensajes";
import { useRouter } from "next/navigation";


export default function Inicio_sesion() {
  //router
  const router = useRouter();
  //------
  //validacion
  const validationSchema = Yup.object().shape({
    identificador: Yup.string()
      .required("Ingrese un identificador"),
    clave: Yup.string().required("Ingrese su clave"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  let { errors } = formState;

  const sendData = (data) => {
    //console.log(data);
    console.log("ghds")
    var data = { funcion: "inicio", identificador: data.identificador, clave: data.clave };
    console.log(data.identificador);
    console.log(data.clave);
    

    inicio_sesion(data).then((info) => {
      console.log(info);

      if (!info) {
        mensajes("Error de Inicio", info.msg, "error");
      } else {
        mensajes("Inicio Exitoso", " Bienvenido");
        router.push("../pantalla_admin");
      }
    });
  };

  return (
    <div className="container text-center" style={{ backgroundColor: "#87CEEB", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <div className="card">
    <div className="card-body py-5 px-md-5">
      <h1 className="mb-4">Inicie Sesión</h1>

      <form onSubmit={handleSubmit(sendData)} className="text-start">
        <div className="mb-4">
          <label htmlFor="identificador" className="form-label">
            Identificador Electrónico
          </label>
          <input
            {...register("identificador")}
            type="identificador"
            name="identificador"
            id="identificador"
            className={`form-control ${
              errors.identificador ? "is-invalid" : ""
            }`}
          />
          <div className="alert alert-danger invalid-feedback">
            {errors.identificador?.message}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="clave" className="form-label">
            Clave
          </label>
          <input
            {...register("clave")}
            type="password"
            name="clave"
            id="clave"
            className={`form-control ${
              errors.clave ? "is-invalid" : ""
            }`}
          />
          <div className="alert alert-danger invalid-feedback">
            {errors.clave?.message}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</div>

  );
}