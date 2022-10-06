import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CustomNavbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const nanvigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      nanvigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" style={navLinkStyles}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/update-profile" style={navLinkStyles}>
                About
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/products" style={navLinkStyles}>
                Products
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              {currentUser && (
                <NavLink onClick={handleLogout} style={navLinkStyles}>
                  Logout
                </NavLink>
              )}
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <div style={{ margin: "40px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default CustomNavbar;

// // import { useAuth } from "./auth";

// export const Navbar = () => {
//   //   const auth = useAuth();

//   return (
//     <>
//       <nav style={{ marginRight: "10px" }}>
// <NavLink to="/" style={navLinkStyles}>
//   Home
// </NavLink>
//         <NavLink to="/profile" style={navLinkStyles}>
//           profile
//         </NavLink>
//         <NavLink to="/products" style={navLinkStyles}>
//           Products
//         </NavLink>
//         <NavLink to="/about" style={navLinkStyles}>
//           About
//         </NavLink>

//       </nav>

//       <>
//         <Outlet />
//       </>
//     </>
//   );
// };
