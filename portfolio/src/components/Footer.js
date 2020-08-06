import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const StickyFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1%;
  background-color: whitesmoke;
`

const Site = styled.div`
  font-family: 'Teko', sans-serif;

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 5px;
  }
`
const Social = styled.a`
  margin: 10px;
  color: black;
`

function Footer() {
  return (
    <StickyFooter className="mt-5">
          <Site>
            This site was made by Jensen Koch.
          </Site>
          <div>
            <Social href="https://www.instagram.com/djentsen/" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Social>
            <Social href="https://www.linkedin.com/in/jensen-koch-a85956196/" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Social>
            <Social href="https://github.com/jtkoch" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Social>
          </div>
    </StickyFooter>
  )
}
 
export default Footer