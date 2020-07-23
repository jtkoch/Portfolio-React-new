import React from 'react'
import CardInfo from '../components/CardInfo'
import styled from 'styled-components'

const Project = styled.div`
    @media (max-width: 500px) {
    }
`
const ProjectImg = styled.img`
    padding: 2%;

    @media (max-width: 500px) {
        width: 90%;
        height: 90%;
        
    }
`

function Card(props) {
    return (
        <Project className="j-card" onClick={(e) => props.click(props.item)}>
            <ProjectImg className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </Project>
    )   
}

export default Card