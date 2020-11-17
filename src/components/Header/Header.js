import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    const toggle = () => {
        setToggleOpen(prevState => {
            return !prevState;
        })
    }
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand>Verizon Hiring</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={toggleOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Link 2</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;