import React from 'react'

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

function HomePage(props) {
    return (
        <Home>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </Home>
    )
}

export default HomePage