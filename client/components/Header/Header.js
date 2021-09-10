import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Image} from 'react-bootstrap';
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown,faBell} from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

function Header() {
    return (
        <>
        <Head>
          <title >MaGo SocialStore</title>
          <meta name="description" content="NetStore" />
          <link rel="icon" href="/logo.png" />
        </Head>
            
            <Navbar className="borderHeader" bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="/logo.png" alt="Mago SocialNet" className="MagNet ubuntu"/>
                    NestStore
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                <Nav>
                    <Nav.Link className="headerPosition" href="/home">Home</Nav.Link>
                    <Nav.Link className="headerPosition" href="/resumen">News</Nav.Link>
                    <Nav.Link  className="headerPosition" href="/">Log out</Nav.Link>

                    <Link href="/Buy/history">
                        <div className="cart-icon"  >
                            <a><span>{1}</span>
                            <FontAwesomeIcon icon={faCartArrowDown } className="cartStyle" /></a>
                        </div>
                    </Link>

                    <Link href="/Notification/notification" >
                        <div   className="bell-icon">
                            <a><span >{1}</span>
                            <FontAwesomeIcon icon={faBell } className="bellStyle" /></a>
                        </div>
                    </Link>
                 {/*<div className="bell-icon">
                        <span>{1}</span>
                        <FontAwesomeIcon icon={faBell } className="bellStyle" />
                    </div> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Header
