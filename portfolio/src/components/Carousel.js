import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import tetris from '../images/tetris.png'
import sailboat from '../images/sailboat.png'
import tarot from '../images/tarot.png'
import gol from '../images/gol.png'

import Card from '../components/Card'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tetris',
                    subTitle: 'The classic game of tetris built with JavaScript',
                    imgSrc: tetris,
                    code: 'https://github.com/jtkoch/tetris-app',
                    link: 'https://sleepy-morse-844912.netlify.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Away At Last',
                    subTitle: 'A website for Away At Last Travel & Tours built with HTML, CSS, JavaScript',
                    imgSrc: sailboat,
                    code: 'https://github.com/jtkoch/away-at-last',
                    link: 'https://www.awayatlasttravel.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Moon Travelers Tarot',
                    subTitle: 'A website for a Tarot & Oracle Company built with React JS and Node JS',
                    imgSrc: tarot,
                    code: 'https://github.com/jtkoch/moon-travelers-tarot',
                    link: 'https://moon-travelers-tarot.vercel.app/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Conway\'s Game of Life',
                    subTitle: 'The iconic computer science game of cellular automaton built with React JS',
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
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel