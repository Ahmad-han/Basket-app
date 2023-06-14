import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Checkout } from "./Checkout";



export const Header = ({ database }) => {

    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout database={database}/>
        </div>
    )
}