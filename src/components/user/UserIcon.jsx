import { Avatar, Dropdown } from "flowbite-react";

function UserIcon({ profile, logOut }) {

    const LogOut = () => {
        logOut();
    }
    return (

        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img={profile.picture} rounded />
                }
            >
                <Dropdown.Header>
                    <span className="block text-sm">{profile.name}</span>
                    <span className="block truncate text-sm font-medium">{profile.email}</span>
                </Dropdown.Header>
                <Dropdown.Item onClick={LogOut}>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default UserIcon