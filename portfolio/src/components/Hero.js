import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-bottom: 3%;
`

const Head = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Big = styled.h1`
    font-size: 4.5rem;
    font-weight: 800;
    padding: 0%;

    @media (max-width: 500px) {
        font-size: 3rem;
    }
`
const Small = styled.h3`
    font-size: 1.25rem;
    width: 100%;
    font-weight: 500;
    padding: 0%;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

function Hero(props) {
    return(
        <Main>
            <Head>
                { props.title && <Big>{props.title}</Big> }
                { props.subTitle && <Small>{props.subTitle}</Small> }
                { props.text && <Small>{props.text}</Small> }
            </Head>
        </Main>
    )
}

export default Hero