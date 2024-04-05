import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img width={100} src="https://budventure.technology/public/frontend/images/hire_developer/JS/reactjs/Hire_reactjs_Main.png" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navlink' >About</Nav.Link>
                            <Nav.Link className='navlink'>Skills</Nav.Link>
                            <Nav.Link className='navlink'>Education</Nav.Link>
                            <Nav.Link className='navlink'>Experience</Nav.Link>
                            <Nav.Link className='navlink'>Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;