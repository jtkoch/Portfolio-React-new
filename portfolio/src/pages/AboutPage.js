import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
import Hero from '../components/Hero'

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3%;
`
const Information = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`
const Interests = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`
const Band = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
`
const Point = styled.div`
  width: 20px;
`
 
function AboutPage(props) {
  return (
    <AboutContainer>
        <Hero title={props.title}/>

        <Information>
          <Interests>Interests:</Interests>
          <br></br>
          <h3>
            I'm a musician and have played the drums in many different ensembles from concert percussion, jazz, funk, metal, country, folk and have been in 1 semi successfull band. 
            Music that I listen to most would include metal, jazz, and funk. You can check out my old band below
          <br></br>
          <br></br>
            <Point>
              <FontAwesomeIcon class="downpoint" icon={faHandPointDown}></FontAwesomeIcon>
            </Point>
          </h3>
          <Band target="_blank" href="https://harperbandmusic.bandcamp.com/">H\RPER</Band>
          <br></br>
          <br></br>
          <h3>
            I love to be active in the ways of running, cycling, rock climbing, hiking, camping, walking my dog Arthur, and playing any sport I can.
          </h3>
          <br></br>
          <h3>
            I'm into podcasts as well such as Rich Roll, Syntax, and 99% Invisible and my favorite book is "To Shake the Sleeping Self" by Jedidiah Jenkins. 
          </h3>
          <br></br>
          <h3>
            I love beer, and visiting new breweries whenever I can. I am also extremely into coffee. I have been a barista for the past few years and love the coffee industry. I also love exploring new 
            coffee shops all over the world. The dream would be to work as a developer and be able to check out new coffee shops and breweries as I write code.
          </h3>
          <br></br>
          <h3>
            I'm now attending Lambda School's Full Stack Web Development Program and have learned a lot of awesome skills. I especially love coding in node.js and react.js but always
            love learning anything new with web development that I possibly can. 
          </h3>

        </Information>
    </AboutContainer>
  )
}
 
export default AboutPage