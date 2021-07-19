import React from 'react'

interface Props {
    backgroundOpacity? : number
}

const BackgroundOverlay: React.FC<Props> = ({backgroundOpacity = 0.4 }) => {
    const style = {
        backgroundColor: 'rgba(0,0,0, ' + backgroundOpacity + ')', 
    }
    return (
        <div className={"background-overlay"} style={style} onClick={() => {}} />
    )
}

export default BackgroundOverlay
