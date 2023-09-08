import React from 'react'
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';

function DisplayContent() {
  return (
      <div style={{display:'flex'}}>
          <div>
              <LeftSidePanel></LeftSidePanel>
          </div>    
          <div>
              <RightSidePanel></RightSidePanel>
          </div>
      </div>
  )
}

export default DisplayContent;