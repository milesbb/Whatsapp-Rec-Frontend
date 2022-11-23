import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavbarComp = ({loggedIn}) => {
  const currentUser = useSelector((state) => {
    return state.loadedProfile.currentUser;
  });

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
      {currentUser === null ? <Link to="/" className=" nav-link text-white">
          Login/Sign Up
        </Link> : <Link to="/" className=" nav-link text-white">
          {currentUser.username}
        </Link>}
        
      </div>
    </Navbar>
  );
};

export default NavbarComp;
