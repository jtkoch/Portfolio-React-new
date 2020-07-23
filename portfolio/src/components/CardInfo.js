import React from 'react'
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const style = useSpring({
        opacity: 1, from: {opacity: 0},
    })

    return (
        <animated.div style={style} className="j-card-info">
            <p className="j-card-title">{props.title}</p>
            <p className="j-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target=" _blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardInfo

// const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//   })
//   return <animated.h1 style={props}>hello</animated.h1>