import React from 'react'
import Button from 'react-bootstrap/Button'

function CardInfo(props) {

    return (
        <div className="j-card-info">
            <p className="j-card-title">{props.title}</p>
            <p className="j-card-sub-title">{props.subTitle}</p>
            <Button variant="outline-secondary" className="m-2" size="sm" href={props.code} target=" _blank" rel="noopener noreferrer">Code</Button>
            <Button variant="outline-primary" className="m-2" size="sm" href={props.link} target=" _blank" rel="noopener noreferrer">View</Button>
        </div>
    )
}

export default CardInfo