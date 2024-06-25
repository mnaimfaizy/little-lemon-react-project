import Nav from "./Nav";
import logo from "./../assets/Logo.svg";

export function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
        <Nav />
        </header>
    );
}