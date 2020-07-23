import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3%;
`

const Information = styled.div`
  padding-bottom: 10%;
  padding-left: 10%;
  padding-right: 10%;

  font-size: 1.2rem;
`
 
function AboutPage(props) {
  return (
    <AboutContainer>
        <Hero title={props.title}/>

        <Information>
          <p>Hello,</p> 
          <p>
            I come from an unconventional career path that has allowed me to pick up useful skills along the way. 
            I originally joined the workforce instead of finishing a degree in college because I felt that the most 
            efficient way for someone like me to get experience and learn was to get out there and try to find what 
            I would like to do as a career. I have worked in food service which has taught me to have great customer 
            service, and be very timely oriented as well as work well in a collaborative environment. I have also 
            worked in technical blue collar jobs from a welding shop to working my way up as an install technician 
            manager overseeing a team of other install techs and making sure that the client is happy while getting 
            everything installed in a timely manner and being as safe as possible. This has all brought me to a point 
            in my life where I felt I was ready to jump back into a form of education. I have always had a genuine 
            interest in software and technology but felt that I needed a 4 year Computer Science degree to actually 
            be able to work in that field, luckily I was wrong! I have been attending an online full stack web 
            development program through Lambda School that has been an amazing shift in my career path and life goals. 
            I look forward to working with software and would love to be given the opportunity to show what I am capable of. 
            I am a great problem solver, love writing code, love helping others through technology, and love the never ending 
            cycle of learning amongst software. 
          </p>
        </Information>
    </AboutContainer>
  )
}
 
export default AboutPage