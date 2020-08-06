import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import tetris from '../images/tetris.jpg'
import timer from '../images/timer.jpg'
import todo from '../images/todo.jpg'
import gol from '../images/gol.jpg'

import Card from '../components/Card'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tetris',
                    subTitle: 'The classic game of tetris built with vanilla JS',
                    imgSrc: tetris,
                    code: 'https://github.com/jtkoch/tetris-app',
                    link: 'https://sleepy-morse-844912.netlify.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Countown Timer',
                    subTitle: 'This is a countdown timer written with React js',
                    imgSrc: timer,
                    code: 'https://github.com/jtkoch/Countdown-Timer',
                    link: 'https://jtkoch.github.io/Countdown-Timer/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Todo',
                    subTitle: 'This is a simple Todo app built with React',
                    imgSrc: todo,
                    code: 'https://github.com/jtkoch/React-Todo/tree/Jensen-Koch',
                    link: 'https://angry-babbage-4ce737.netlify.app/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Conway\'s Game of Life',
                    subTitle: 'The iconic computer science game of cellular automaton',
                    imgSrc: gol,
                    code: 'https://github.com/jtkoch/conways-game-of-life',
                    link: 'https://conways-game-of-life-plum.vercel.app/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-between">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel