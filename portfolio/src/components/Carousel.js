import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import tetris from '../images/tetris.jpg'
import timer from '../images/timer.jpg'
import todo from '../images/todo.jpg'

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
                    link: 'https://sleepy-morse-844912.netlify.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Countown Timer',
                    subTitle: 'This is a countdown timer written with React js',
                    imgSrc: timer,
                    link: 'https://jtkoch.github.io/Countdown-Timer/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Todo',
                    subTitle: 'This is a simple Todo app built with React',
                    imgSrc: todo,
                    link: 'https://angry-babbage-4ce737.netlify.app/',
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
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel