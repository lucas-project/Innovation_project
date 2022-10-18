import React from "react";
import useState from 'react-usestateref';
import "./Admin.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../Composer/Composer.css";
import Form from 'react-bootstrap/Form';
import axios from "axios";


const Addcomposer = () => {
    const [composerInfo, setComposerInfo, ComposerInfoRef] = useState(["","","","Biography unknown.","../../img/placeholder.png",""]);
    const inputItems = (searchValue,type) => {
        let newComposerInfo;
        if (type === "name"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[0] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "nationality"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[1] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "website"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[2] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "biography"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[3] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "dob"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[5] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        console.log(searchValue,type,ComposerInfoRef);
    }
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    // const token = JSON.parse(sessionStorage.getItem('data'));
    // const token = user.data.id; 
    const onSubmitListener = () =>{
        const JSON = JSON.stringify(ComposerInfoRef);
        axios
        .post('http://localhost:3000/api/composers/admin',JSON)
        .then(res=>{
            console.log(res);
        })
        .catch(err =>{
            console.log("Error from posting data: "+err)
        })
    }

    return (
        <>
        <Navbar  key="false" bg="light" expand="false"  className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">The Admin Center</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Admin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                    title="Composer Management"
                    id={`offcanvasNavbarDropdown-expand-false`}
                  >
                    <NavDropdown.Item href="/admin/composer">
                      Show composer
                    </NavDropdown.Item>
                    <NavDropdown.Item href="admin/addcomposer">
                      Add composer
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Remove composer
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Repertoire Management"
                    id={`offcanvasNavbarDropdown-expand-false`}
                  >
                    <NavDropdown.Item href="#action3">
                      Show piece list
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Add piece
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Remove piece
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Recommendation Management"
                    id={`offcanvasNavbarDropdown-expand-false`}
                  >
                    <NavDropdown.Item href="#action3">
                      Show recommendation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Add recommendation
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Remove recommendation
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">Go to website home</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" onChange={(e)=>inputItems(e.target.value,"name")}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nationality</Form.Label>
                <Form.Control type="nationality" placeholder="Enter Nationality"  onChange={(e)=>inputItems(e.target.value,"nationality")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Website</Form.Label>
                <Form.Control type="website" placeholder="Enter Website"  onChange={(e)=>inputItems(e.target.value,"website")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Biography</Form.Label>
                <Form.Control type="biography" placeholder="Enter Biography"  onChange={(e)=>inputItems(e.target.value,"biography")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Year of birth</Form.Label>
                <Form.Control type="dob" placeholder="Enter Year of birth"  onChange={(e)=>inputItems(e.target.value,"dob")}/>
            </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" onClick={onSubmitListener}>
        Add
      </Button>
    </Form>
      
        </>

        //add composer （edit composer)

        //add recommendation (delete recommendation)

        //add repertoire （edit piece)

    )};
export default Addcomposer;
