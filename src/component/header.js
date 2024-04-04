import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><img width={100} src="https://budventure.technology/public/frontend/images/hire_developer/JS/reactjs/Hire_reactjs_Main.png" /></Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link className='navlink' href="#features">About</Nav.Link>
                        <Nav.Link className='navlink' href="#pricing">Skills</Nav.Link>
                        <Nav.Link className='navlink' href="#fffff">Education</Nav.Link>
                        <Nav.Link className='navlink' href='#ddddd'>Experience</Nav.Link>
                        <Nav.Link className='navlink' href="#sssss">Project</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;