import React from 'react'
import { Container, Row } from 'react-bootstrap';
import footerStyles from './footer.module.css';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => (
    <footer>
        <Container>
            <Row>
                <div className={'col-lg-8 col-md-10 mx-auto'}>
                    <ul className= {'list-inline text-center'}>
                        <li className={"list-inline-item"} style={{margin: '0px 10px 0 10px'}}>
                            <a href="https://www.instagram.com/SomewhereWithTheSelkers/">
                                <FaInstagram color={'gray'} size={35} /> 
                            </a>
                        </li>
                        <li className={"list-inline-item"} style={{margin: '0px 10px 0 10px' }}>
                            <a href="https://twitter.com/WithTheSelkers">
                                <FaTwitter color={'gray'} size={35} /> 
                            </a>         
                        </li>
                        <li className={"list-inline-item"} style={{margin: '0px 10px 0 10px' }}>
                            <a href="https://www.youtube.com/channel/UCoHflsP-TW02yBMfSVmuclg">
                                <FaYoutube color={'gray'} size={35} /> 
                            </a>
                        </li>
                    </ul>
                    <p class="copyright text-muted" style={{marginTop: '30px'}}>Copyright &copy; SomewhereWithTheSelkers 2017</p>
                </div>
            </Row>
        </Container>
    </footer>
)

export default Footer;
