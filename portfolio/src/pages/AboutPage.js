import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
import Hero from '../components/Hero'

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3%;
  padding-bottom: 7%;
  font-family: 'Josefin Sans', sans-serif;
`
const Information = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  font-size: 1rem;
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
          <h5>
            I'm now attending Lambda School's Full Stack Web Development Program. My strengths are coding in JavaScript Frameworks but I am a lifelong
            learner who strives for growth. I look forward to challenges that will further develop and expand my skill set in web development. 
          </h5>
          <br></br>
          <h5>
            I love to be active. You can find me running, cycling, rock climbing, hiking, camping, and walking my dog Arthur.
          </h5>
          <br></br>
          <h5>
            I also enjoy trying new beers and visiting breweries whenever I can. I have been a barista for the past few years and love the coffee industry. Exploring new 
            coffee shops all over the world is a main priority when travelling. The dream would be to work as a developer and be able to check out new coffee shops and breweries as I write code.
          </h5>
          <br></br>
          <h5>
            I'm a musician and have played the drums in many different ensembles including concert percussion, jazz, funk, metal, country, and folk.
            Music that I listen to most would include metal, jazz, and funk. You can check out my old band below!
          <br></br>
          <br></br>
            <Point>
              <FontAwesomeIcon class="downpoint" icon={faHandPointDown}></FontAwesomeIcon>
            </Point>
          </h5>
          <Band target="_blank" href="https://harperbandmusic.bandcamp.com/">H\RPER</Band>
          <br></br>
          <br></br>
          <h5>
            As a way to improve my growth mindset I listen to podcasts such as the Rich Roll Podcast, Syntax Web Development, and 99% Invisible. 
            My favorite book is "To Shake the Sleeping Self" by Jedidiah Jenkins. 
          </h5>
          <br></br>

        </Information>
    </AboutContainer>
  )
}
 
export default AboutPage