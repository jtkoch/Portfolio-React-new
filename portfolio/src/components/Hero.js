import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid black;
`
const Rows = styled.div`
    padding: 1%;
    width: 100%;
`

const Columns = styled.div`
    padding: 2%;
`

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent m-4 jumbotron-fluid p-0">
            <Main>
                <Rows>
                    <Columns>
                        { props.title && <h1 className="display-1 font-weight-bolder mb-4">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className=" mt-5 font-weight-bold">{props.text}</h3> }

                    </Columns>
                </Rows>
            </Main>
        </Jumbotron>
    )
}

export default Hero