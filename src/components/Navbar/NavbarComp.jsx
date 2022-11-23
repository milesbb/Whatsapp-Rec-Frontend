import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/profileActions";

const NavbarComp = ({ loggedIn }) => {
  const currentUser = useSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  const navigate = useNavigate()

  const dispatch = useDispatch();

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
        {currentUser === null ? (
          <Link to="/" className=" nav-link text-white">
            Login/Sign Up
          </Link>
        ) : (
          <NavDropdown className="text-white" title={currentUser.username} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => {
              dispatch(logoutUser(currentUser))
              navigate("/")
            }}>Logout</NavDropdown.Item>
          </NavDropdown>
        )}
      </div>
    </Navbar>
  );
};

export default NavbarComp;
