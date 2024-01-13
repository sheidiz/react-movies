import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './utils/routes.js'
import Home from './components/pages/Home'
import NavbarMenu from './components/navbar/Navbar'
import PeliculaDetalles from './components/detalle-pelicula/PeliculaDetalles.jsx'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavbarMenu />
            <Routes>
                <Route path={routes.publicas.INDEX} element={<Home />} />
                <Route path={routes.publicas.PERFIL} element={<>Perfil</>} />
                <Route path={routes.publicas.LOGIN} element={<>Login</>} />
                <Route path={routes.publicas.MOVIEDETAILS} element={<PeliculaDetalles />} />
            </Routes>
        </BrowserRouter>
    )
}
