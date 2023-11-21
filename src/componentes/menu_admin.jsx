import Link from "next/link";
import Inicio_sesion from "@/app/inicio_sesion/page";
export default function Menu_admin() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">PATIO DE CARROS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
        
                        <li className="nav-item">
                            <Link href="/marcas" className="nav-link active" aria-current="page">Marcas Disponibles</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/crear_auto" className="nav-link active" aria-current="page">Crear</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/auto_admin" className="nav-link active" aria-current="page">Buscar Autos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}