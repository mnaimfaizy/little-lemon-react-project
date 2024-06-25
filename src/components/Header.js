import Nav from "./Nav";
import logo from "./../assets/Logo.svg";

export function Header() {
    return (
        <header className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-4">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-span-12 sm:col-span-8">
                <Nav />
            </div>
        </header>
    );
}