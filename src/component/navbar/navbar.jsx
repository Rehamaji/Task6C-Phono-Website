import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import flags from '../../assets/all.json'
import Logo from '../../assets/images/logo.png';
import DropdownNav from "../dropdown/dropdown";
import Flag from "./flag/flag"; // Use two levels of '../' to go up to the 'src' directory


const AllNavbar = () => {
    const [show, setShow] = useState(false);
    const [activeFlag, setActiveFlag] = useState({name:flags[0].cca2,flagImage: flags[0].flags.png });
    const [pages, setPages] = useState(false);

    const showDropdown = (e) => {
        setShow(true);
    };

    const hideDropdown = (e) => {
        setShow(false);
    };
    const showPageList = (e) => {
        setPages(true);
    };

    const hidePageList = (e) => {
        setPages(false);
    };
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 z-100">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Banner Background"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto padding-nav color-white mt-1">
                            <Nav.Link href="#home" className="colorWhite fw-500 colorGray">
                                <Link to="/">Home</Link>
                            </Nav.Link>

                            <DropdownNav/>
{/*
                            {isSmallScreen ? <SidebarNav /> : <DropdownNav />}
*/}

                            <Nav.Link as={Link} to="/categories" className="colorBlack fw-500">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/users" className="colorBlack fw-500">Android</Nav.Link>
                            <Nav.Link as={Link} to="/feature" className="colorBlack fw-500">Memory & Storage</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="colorBlack fw-500">About</Nav.Link>

                            <NavDropdown title="Pages"
                                         id="basicDropdown"
                                         className="colorWhite fw-500"
                                         >
                                <NavDropdown.Item
                                    as={Link}
                                    to="/contests"
                                    className="colorBlack colorBlueOnHover move-text"
                                    onMouseEnter={showPageList} // Show the dropdown on hover
                                >About US
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item
                                    as={Link} to="./singleContests"
                                    className="colorBlack colorBlueOnHover move-text"
                                    onMouseEnter={showPageList} // Show the dropdown on hover
                                >
                                    Contact US

                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item
                                    as={Link} to="./singleContests"
                                    className="colorBlack colorBlueOnHover move-text"
                                    onMouseEnter={showPageList} // Show the dropdown on hover
                                >
                                    Blog
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item
                                    as={Link} to="./singleContests"
                                    className="colorBlack colorBlueOnHover move-text"
                                    onMouseEnter={showPageList} // Show the dropdown on hover
                                >
                                    Faq's
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="icons d-flex order-xl-3 order-sm-2 ">
                        <NavDropdown title={<Flag name={activeFlag.name} className="d-inline-block" flagImage={activeFlag.flagImage}></Flag>}
                                     id="flagDropDown"
                                     className="black fw-500 ">
                            <div className="dropdown-list scrolOn300Px">
                            {flags.map((flag) => {
                                return (
                                    <NavDropdown.Item
                                        className="colorBlack colorBlueOnHover move-text "
                                        onClick={() => setActiveFlag({name:flag.cca2, flagImage: flag.flags.png})}
                                        onMouseEnter={showPageList} // Show the dropdown on hover
                                    >
                                        <Flag name={flag.cca2} flagImage={flag.flags.png}></Flag>
                                    </NavDropdown.Item>
                                )
                            })}
                            </div>
                        </NavDropdown>
                        <div className="px-1"><FontAwesomeIcon icon={faUser}/></div>
                        <div className="px-1"><FontAwesomeIcon icon={faCartShopping}/></div>
                        <div className="px-1"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
export default AllNavbar;