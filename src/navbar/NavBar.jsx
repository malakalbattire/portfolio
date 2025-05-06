import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className=" d-flex  flex-row p-4 bg-primary justify-content-center align-items-center">
        <div className="start-side d-flex flex-row w-50">MALAK ALBATTIRE</div>
        <div className="end-side container d-flex justify-content-evenly flex-row w-50 ">
          <ul className="d-flex flex-row justify-content-evenly w-100 list-unstyled">
            <li>
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="home">
                About
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="home">
                My skills
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="home">
                {" "}
                Projects
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="home">
                {" "}
                Contact
              </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
