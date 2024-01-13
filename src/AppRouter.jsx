import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { routes } from './utils/routes.js'
import Home from './components/pages/Home'
import MovieCardDetails from './components/movie/MovieCardDetails.jsx'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavLink to={routes.publicas.INDEX}>
                <h1 className="pb-3 text-center text-4xl font-bold text-white">
                    Movies
                </h1>
            </NavLink>
            <Routes>
                <Route path={routes.publicas.INDEX} element={<Home />} />
                <Route path={routes.publicas.PERFIL} element={<p>Perfil</p>} />
                <Route path={routes.publicas.LOGIN} element={<p>Login</p>} />
                <Route path={routes.publicas.MOVIEDETAILS} element={<MovieCardDetails />} />
            </Routes>
        </BrowserRouter>
    )
}
