import React from 'react';
import Icon from '../../icons/components/fullscreen';
import './full-screen.css'

const FullScreen = props => {
    return (
        <div 
            className="FullScreen"
            onClick={props.handleFullScreenClick}
        >
            <Icon
                size={25}
                color="white"
            />
        </div>
    )
}

export default FullScreen