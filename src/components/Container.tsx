import React from 'react'
type Styleprops = {
    styles: React.CSSProperties
}

const Container = (props:Styleprops) => {
  return (
    <div style={props.styles}>text content goes here</div>
  )
}

export default Container