import { useState } from "react";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
  } from 'reactstrap';
import { Outlet, Link } from "react-router-dom"
  
export const NavWithLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar color="danger" dark expand="md">
            <NavbarBrand tag={Link} to="/">Formy přehled</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/hookform">Hook Form</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/hookformsimple">Hook Form bez Bootstrapu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/formik">Formik</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/useRef">useRef</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/simplevalidator">Simple React Validator</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Container className="mt-5">
            <Outlet />
        </Container>
        </>
    );
};

export default NavWithLayout;