import React from 'react'
import CardInfo from '../components/CardInfo'
import styled from 'styled-components'

const Project = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    
    @media (max-width: 500px) {
        margin-bottom: 100px;
        height: 450px;
    }
`
const ProjectImg = styled.img`
    padding: 1%;

    @media (max-width: 500px) {
        width: 90%;
        height: 90%;
    }
`

function Card(props) {
    return (
        <Project className="j-card" onClick={(e) => props.click(props.item)}>
            <ProjectImg className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} code={props.item.code}/>
        </Project>
    )   
}

export default Card