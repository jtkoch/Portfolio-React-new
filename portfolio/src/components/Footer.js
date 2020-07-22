import React from "react"
import styled from 'styled-components'

const StickyFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1%;
  border-top: 1px solid black;
`

function Footer() {
  return (
    <StickyFooter className="mt-5">
          <div>
            Jensen Koch
          </div>
          <div>
            This site was made by Jensen Koch.
          </div>
    </StickyFooter>
  )
}
 
export default Footer