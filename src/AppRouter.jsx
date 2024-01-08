import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import { routes } from './navbar/routes'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={routes.publicas.INDEX} element={<>Pelis</>} />
                <Route path={routes.publicas.PERFIL} element={<>Perfil</>} />
                <Route path={routes.publicas.LOGIN} element={<>Login</>} />
            </Routes>
        </BrowserRouter>
    )
}
