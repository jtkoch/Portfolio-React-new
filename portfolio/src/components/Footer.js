import React from "react"
import styled from 'styled-components'

const StickyFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1%;
  background-color: #ffbf00;
`

const Site = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`

function Footer() {
  return (
    <StickyFooter className="mt-5">
          <div>
            Jensen Koch
          </div>
          <Site>
            This site was made by Jensen Koch.
          </Site>
    </StickyFooter>
  )
}
 
export default Footer