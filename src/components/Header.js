import Nav from "./Nav";
import logo from "./../assets/Logo.svg";

export function Header() {
    return (
        <header className="flex sm:justify-start justify-between items-center gap-4 py-6 px-4 w-full">
            <div className="flex-1">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex-1">
                <Nav />
            </div>
        </header>
    );
}