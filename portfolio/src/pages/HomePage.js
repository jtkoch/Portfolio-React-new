import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faSass, faJsSquare, faReact, faWordpress, faPython, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import styled from 'styled-components'


const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 1%;
`
const Fonts = styled.div`
    font-size: 2rem;
    padding-bottom: 2%;
`

function HomePage(props) {
    return (
        <Home>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

                <Fonts>
                    <FontAwesomeIcon className="m-1" icon={faHtml5}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faCss3}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faSass}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faJsSquare}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faReact}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faNodeJs}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faWordpress}></FontAwesomeIcon>
                    <FontAwesomeIcon className="m-1" icon={faPython}></FontAwesomeIcon>
                </Fonts>
            <Carousel />
        </Home>
    )
}

export default HomePage