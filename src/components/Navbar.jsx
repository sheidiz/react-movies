import { Avatar, Dropdown, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { routes } from './routes.js';
import { NavLink } from 'react-router-dom';

{/*"<NavLink to={routes.publicas.INDEX} className="rounded-md px-3 py-2 text-sm font-medium">Home</NavLink>
<NavLink to={routes.publicas.PERFIL} className="rounded-md px-3 py-2 text-sm font-medium">Perfil</NavLink>
<NavLink to={routes.publicas.LOGIN} className="rounded-md px-3 py-2 text-sm font-medium">Login</NavLink>"*/}
function NavbarMenu() {
    return (
        <>
            <Navbar fluid >
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink className="text-lg px-3 py-2 font-medium" href={routes.publicas.INDEX}>
                        <NavLink to={routes.publicas.INDEX}>Home</NavLink>
                    </NavbarLink>
                    <NavbarLink className="text-lg px-3 py-2 font-medium" href={routes.publicas.PERFIL}>
                        <NavLink to={routes.publicas.PERFIL} >Perfil</NavLink>
                    </NavbarLink>
                </NavbarCollapse>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span>email@email.com</span>
                    </DropdownHeader>
                    <DropdownItem>Sign Out</DropdownItem>
                </Dropdown>
            </Navbar>
        </>
    )
}

export default NavbarMenu