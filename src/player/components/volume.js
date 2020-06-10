import React from 'react';
import Icon from '../../icons/components/volumen'
import './volume.css'

const Volume = props => {
    return (
        <button className="Volume">
            <div onClick={props.handleVolumeClick}>
                <Icon
                    color="White"
                    size={25}
                />
            </div>
            <div className="Volume-range">
                <input type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume