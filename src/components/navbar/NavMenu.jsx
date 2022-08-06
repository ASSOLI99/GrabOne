import { useState, useEffect } from "react";
import {
  Nav,
  Form,
  Navbar,
  Container,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavMenu.css";

const NavMenu = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  const subNavHandler = (e) => {
    e.stopPropagation();
    for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      e.currentTarget.parentNode.children[i].classList.remove("activeDropNav");
    }
    e.currentTarget.classList.add("activeDropNav");
  };
  return (
    <>
      {/* top navbar start */}
      <Navbar
        className={`${scroll ? "back-nav" : "top-nav"} bg-main-blue text-light`}
        sticky="top"
      >
        <Container fluid className="container-xl">
          <Navbar.Collapse className="d-flex justify-content-between ">
            <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold text-light">
              GrabOne
            </Navbar.Brand>
            <Nav
              className="my-2 my-lg-0 d-flex align-items-center text-light"
              navbarScroll
            >
              <i className="bi bi-geo-alt fs-3"></i>
              <NavDropdown
                className="topDropMenu white-drop-menu text-light"
                title="Auckland"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <span className="text-black">Jordan</span>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/"
                className="fs-4 text-light d-none d-md-block"
              >
                <i className="bi bi-heart"></i>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                className="fs-4 text-light d-none d-md-block"
              >
                <i className="bi bi-cart"></i>
              </Nav.Link>
              <Dropdown className="user-drop-down d-none d-md-block">
                <Dropdown.Toggle id="dropdown-button-dark-example1">
                  <i className="bi bi-person"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/">
                    My Account
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/">
                    Gifts
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/">
                    My Subscription
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/">
                    My Purchases
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/">
                    Login
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link
                as={Link}
                to="/"
                className="fs-4 text-light d-flex align-items-center d-none d-md-block"
              >
                <i className="bi bi-envelope"></i>{" "}
                <span className="fs-6 ms-1">Subscribe</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* top navbar end */}

      {/* middle navbar start */}
      <Navbar
        className={`
                ${
                  scroll ? "top-nav" : "back-nav "
                } middle-navBar d-none d-md-flex main-navBar bg-white`}
        sticky="top"
      >
        <Container fluid className="container-xl">
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown
                title="Browse Categories"
                id="navbarScrollingDropdown"
                className="middle-dropMenu position-relative"
              >
                <div className="subNavMenu position-absolute">
                  <h2>Activities, Events & Outdoors</h2>
                  <div>
                    <Link to={"/"}> Adventure & Outdoors</Link>
                    <p>Bungy Jumping, Camping, Horse Riding, Hunti</p>
                  </div>
                  <div>
                    <Link to={"/"}>Events, Shows & Tickets</Link>
                    <p>Bungy Jumping, Camping, Horse Riding, Hunti</p>
                  </div>
                  <div>
                    <Link to={"/"}> Adventure & Outdoors</Link>
                    <p>Bungy Jumping, Camping, Horse Riding, Hunti</p>
                  </div>
                  <div>
                    <Link to={"/"}> Adventure & Outdoors</Link>
                    <p>Bungy Jumping, Camping, Horse Riding, Hunti</p>
                  </div>
                  <div>
                    <Link to={"/"}> Adventure & Outdoors</Link>
                    <p>Bungy Jumping, Camping, Horse Riding, Hunti</p>
                  </div>
                </div>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between activeDropNav"
                  onClick={subNavHandler}
                >
                  <span>Activities, Events & Outdoors</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Automotive</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Baby, Kids & Toys</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Beauty, Massage & Spa</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Books & Magazines</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Clothing & Fashion - Men's</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Clothing & Fashion - Women's</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Electronics & Computers</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Fitness & Sports</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Grocery & Food</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Health, Nutrition & Dental</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Holidays, Hotels & Travel</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>House & Garden</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Pets</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Restaurants, Bars, Cafes</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Stationery, Art & Craft</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Training & Courses</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropNav-menu d-flex justify-content-between"
                  onClick={subNavHandler}
                >
                  <span>Weddings, Special Occasions & Parties</span>{" "}
                  <span>
                    <i className="bi bi-caret-right-fill"></i>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="dropNav-menu fw-bold">
                  Browse all Categories
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/" className="middle-link">
                What's New
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="middle-link">
                Trending
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="middle-link">
                For You
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="middle-link">
                Shop Products
              </Nav.Link>
            </Nav>
            <Form className="position-relative">
              <span className="position-absolute search-icon-input">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Search GrabOne"
                aria-label="Search"
                className="search-input"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* middle nave end */}

      {/* bottom nave start */}
      <Navbar bg="light" className="d-block d-md-none" fixed="bottom">
        <Container fluid className="d-flex ">
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-house-door"></i>
            </span>
            <span className="navLink">Home</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-search"></i>
            </span>
            <span className="navLink">Search</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-grid"></i>
            </span>
            <span className="navLink">Categories</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-cart"></i>
            </span>
            <span className="navLink">Cart</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/"
            className="d-flex flex-column justify-content-center"
          >
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-person"></i>
            </span>
            <span className="navLink">Account</span>
          </Nav.Link>
        </Container>
      </Navbar>
      {/* bottom nave end */}
    </>
  );
};
export default NavMenu;
