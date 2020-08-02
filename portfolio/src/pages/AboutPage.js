import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3%;
`
const Information = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  font-size: 1.2rem;
`
const Interests = styled.div`
  font-size: 3rem;
  font-weight: 700;
`
const Band = styled.a`
  text-decoration: none;
  font-size: 1.75rem;
`
 
function AboutPage(props) {
  return (
    <AboutContainer>
        <Hero title={props.title}/>

        <Information>
          <Interests>Interests:</Interests>
          <br></br>
          <h2>
            I originally started going to college with a mojor in percussion performance. I have been playing the drums since I was 10 years old and still love to. Music that I listen to 
            most would include metal, jazz, and funk. I love to be active in the ways of running, cycling, rock climbing, hiking, walking my dog Arthur, and playing any sport I can.
          </h2>
          <br></br>
          <h2>You can check out my old band here </h2>
            {/* add font awesome down arrow here */}
          <Band target="_blank" href="https://harperbandmusic.bandcamp.com/">H\RPER</Band>
          <br></br>
          <br></br>
          <h2>
            I love beer, and visiting new breweries whenever I can. I am also extremely into coffee. I have been a barista for the past few years and love the coffee industry. I also love exploring new 
            coffee shops all over the world. The dream would be to work as a developer and be able to check out new coffee shops and breweries as I write code.
          </h2>
          <br></br>
          <h2>
            I'm now attending Lambda School's Full Stack Web Development Program and have learned a lot of awesome skills. 
          </h2>

        </Information>
    </AboutContainer>
  )
}
 
export default AboutPage