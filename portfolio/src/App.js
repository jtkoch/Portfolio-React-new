import React from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import skulllogo from './images/skulllogo.png'
import resume from './images/resume.pdf'

const Navigation = styled.div`
  background-color: whitesmoke;
`
const Logo = styled.img`
  width: 110px;
  margin-left: -1.5%;

  @media (max-width: 500px) {
    margin-left: -7%;
  }
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Jensen Koch',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Jensen Koch',
        subTitle: 'Devour Information, Reproduce Greatness', 
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Container className="p-0" fluid={true}>
        <Navigation>
          <Navbar expand="lg">
            <Logo alt="" src={skulllogo}></Logo>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" >
              <Nav className="ml-auto">
                <Link style={{color: "black"}} className="nav-link" to="/" >Home</Link>
                <Link style={{color: "black"}} className="nav-link" to="/about" >About</Link>
                <Link style={{color: "black"}} className="nav-link" to="/contact" >Contact</Link>
                <a style={{color: "black"}} className="nav-link" href = {resume} target = "_blank" without rel="noopener noreferrer">Resume</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Navigation>

          <Route 
            path="/" exact render={() => <HomePage 
            title={this.state.home.title} 
            subTitle={this.state.home.subTitle} 
            text={this.state.home.text}/>} 
          />
          <Route 
            path="/about" render={() => <AboutPage
            title={this.state.about.title} />}
          />
          <Route 
            path="/contact" render={() => <ContactPage 
            title={this.state.contact.title} />}
          />


        <Footer />

      </Container>
    )
  }
}

export default App