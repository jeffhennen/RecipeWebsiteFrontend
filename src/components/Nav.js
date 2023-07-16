import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className='row' as={NavLink} to="/">
            <img
              src="https://www.recipeunlimited.com/content/dam/cara/en/recipe-image-library/images/recipe-share.jpg"
              width="75"
              height="45"
              className="d-inline-block col-4"
              alt=""
            />
            <h2 className='col-4'>Hennen Recipes</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link" >
                Home
              </NavLink>
              <NavLink to="/Recipes" className="nav-link">
                Recipes
              </NavLink>
              <NavLink to="/newRecipe" className="nav-link">
                Add Recipe
              </NavLink>
              <NavLink to="/Ingredients" className="nav-link">
                Ingredients
              </NavLink>
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



