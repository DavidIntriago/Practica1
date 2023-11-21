import ListaAutos, { ListaNoticias } from "@/componentes/autos/listaAutos"
export default async function Home() {
  return (
    <div className="container">
      <ListaAutos></ListaAutos>
    </div>
  )
}