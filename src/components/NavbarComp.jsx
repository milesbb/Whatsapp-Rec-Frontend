import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar style={{ background: "#118C7E" }} className="px-4" expand="lg">
      <Navbar.Brand>
        <Image
          src="https://res.cloudinary.com/dlskdxln3/image/upload/v1669119014/whatsapp/whatsapplogo_ejjzgc.svg"
          alt="whatsapp logo"
        />
      </Navbar.Brand>
      <Link to="/" className="nav-link text-white mx-3">
        Chats
      </Link>
      <Link to="/" className="nav-link text-white mx-3">
        Search Users
      </Link>
      <div className="ml-auto">
        <Link to="/" className=" nav-link text-white">
          Login/Sign Up
        </Link>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
