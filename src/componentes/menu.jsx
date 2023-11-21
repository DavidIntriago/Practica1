import Link from "next/link";
import Inicio_sesion from "@/app/inicio_sesion/page";
export default function Menu() {
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
                            <Link href="/" className="nav-link active" aria-current="page">Principal</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/inicio_sesion" className="nav-link active" aria-current="page">Acceder</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/marcas" className="nav-link active" aria-current="page">Marcas Disponibles</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}