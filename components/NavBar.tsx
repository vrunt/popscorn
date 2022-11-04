import { FunctionalComponent } from "preact";

const NavBar: FunctionalComponent<null> = ({ user }) => {
    return (
        <nav
            class="navbar navbar-expand-lg navbar-dark"
            style={{ background: "var(--bs-green" }}
        >
            <div class="container-fluid">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a class="navbar-brand flex items-center" href="/">
                        <h4>popscorn</h4>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;