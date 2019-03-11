// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav }  from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import small_bridge from '../images/small_bridge.png';
import headerStyles from './header.module.css';

const Header = ({ siteTitle }) => (
  
  <div className={headerStyles.navbar}>
  <Container >
  <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand className={headerStyles.brand} href="#home">Somewhere With The Selkers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ml-auto'>
      <Nav.Link className={headerStyles.navLink} href="#home">HOME</Nav.Link>
      <Nav.Link className={headerStyles.navLink} href="#about">ABOUT</Nav.Link>
      <Nav.Link className={headerStyles.navLink} href="#contact">CONTACT</Nav.Link>
      <div className={headerStyles.navIconContainer}>
      <Nav.Link className={headerStyles.navIcon} href="https://www.instagram.com/SomewhereWithTheSelkers/"><FaInstagram /></Nav.Link>
      <Nav.Link className={headerStyles.navIcon} href="https://twitter.com/WithTheSelkers"><FaTwitter /></Nav.Link>
      <Nav.Link className={headerStyles.navIcon} href="https://www.youtube.com/channel/UCoHflsP-TW02yBMfSVmuclg"><FaYoutube /></Nav.Link>
      </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
