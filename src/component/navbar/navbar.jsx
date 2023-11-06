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
import {Dropdown} from "react-bootstrap";
import axios from "axios";
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
            <Navbar expand="lg" className="bg-body-tertiary pos-fixed w-100 z-10">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Banner Background"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto padding-nav bg-blue color-white mt-1">
                            <Nav.Link href="#home" className="colorWhite fw-500">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Collection"
                                         id="collectionDropdown"
                                         className="colorWhite fw-500"
                                         show={show}
                                         onMouseEnter={showDropdown}
                                         onMouseLeave={hideDropdown}>
                                {/*toedite*/}
                                <NavDropdown.Item
                                    as={Link}
                                    to="/contests"
                                    className="colorBlack colorBlueOnHover move-text"
                                    onMouseEnter={showDropdown} // Show the dropdown on hover
                                >CONTESTS</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item
                                    as={Link} to="./singleContests"
                                    className="colorBlack colorBlueOnHover move-text"
                                    onMouseEnter={showDropdown} // Show the dropdown on hover
                                >
                                    SINGLE CONTEST
                                </NavDropdown.Item>
                                {/*end toedite*/}
                            </NavDropdown>
                            <Nav.Link as={Link} to="/categories" className="colorBlack fw-500">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/users" className="colorBlack fw-500">Android</Nav.Link>
                            <Nav.Link as={Link} to="/users" className="colorBlack fw-500">Accessories</Nav.Link>
                            <Nav.Link as={Link} to="/users" className="colorBlack fw-500">Memory & Storage</Nav.Link>

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
                    {/*<Button variant="outline-success borderBlue colorBlue btn-sign-in pe-4 ps-4 pt-1 btnSearchHover" >*/}
                    {/*    <FontAwesomeIcon icon={faUser}/>*/}
                    {/*    <span className="fw-600"> Sign In/Up </span>*/}
                    {/*</Button>*/}

                    {/*----start----*/}
                    <div className="icons d-flex order-xl-3 order-sm-2 ">
                        <NavDropdown title={<Flag name={activeFlag.name} className="d-inline-block" flagImage={activeFlag.flagImage}></Flag>}
                                     id="flagDropDown"
                                     className="black fw-500">

                            {flags.map((flag) => {
                                return (
                                    <NavDropdown.Item
                                        className="colorBlack colorBlueOnHover move-text"
                                        onClick={() => setActiveFlag({name:flag.cca2, flagImage: flag.flags.png})}
                                        onMouseEnter={showPageList} // Show the dropdown on hover
                                    >
                                        <Flag name={flag.cca2} flagImage={flag.flags.png}></Flag>
                                    </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                        <div className="px-1"><FontAwesomeIcon icon={faUser}/></div>
                        <div className="px-1"><FontAwesomeIcon icon={faCartShopping}/></div>
                        <div className="px-1"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>


                        {/*DropDown*/}
                        {/*to edit*/}
                        {/*   <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>*/}

                        {/*<div className="rel">
                            <div className="dropdown ">
                                <button className="btn btn-secondary dropdown-toggle button" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="padding" id="country">LB</span>
                                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/flags/4x3/fk.svg"
                                         alt="" className="w13" id="flg"/>
                                </button>
                                <ul class="dropdown-menu overflow-scroll" id="flags">
                                </ul>
                            </div>
                        </div>*/}
                    </div>
                    {/*----end----*/}
                </Container>
            </Navbar>
        </div>
    );
}
export default AllNavbar;