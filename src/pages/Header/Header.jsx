import { Outlet } from "react-router-dom";

import { HeaderComponent } from '../../Components';
const Header = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

export default Header;
