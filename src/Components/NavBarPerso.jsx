import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Genes from '../Services/generations'
import {useState, useEffect} from 'react'


function NavBarPerso() {
  const [generations, setGenerations] = useState([]);

  const fetchGeneration = async () => {
      try {
          const response = await Genes.getGeneration()
          setGenerations(response.data.results)
         } catch (e){
          console.log(e)
         }
  }

  useEffect(() => {
      fetchGeneration()
  }, [])
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky={"top"}>
      <Container>
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           {generations.map((g) =>{
              return <Nav.Link href={"/pokemon/generation/"+g.name}>{g.name} </Nav.Link>})}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPerso;