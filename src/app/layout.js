"use client"
import { Inter } from "next/font/google";
//import './globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Menu from "@/componentes/menu";
import Footer from "@/componentes/footer";
import { estaSesion } from "@/hooks/SessionUtil";
import Menu_admin from "@/componentes/menu_admin";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Noticias</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body className={inter.className}>
        <div className="container-fluid">
          <header>
            {
              !estaSesion() ? <Menu/> : <Menu_admin/> 
            }
            

          </header>
          <section className="container">
          {children}
          </section>
          <Footer/>
        </div>
        </body>
    </html>
  );
}