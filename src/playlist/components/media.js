import React, { Component } from 'react';
import './media.css'

class Media extends Component {
    render() {
        return (
            <div className="Media">
                <div>
                    <img src={require('../../../images/covers/bitcoin.jpg')} alt="imagen" width={260} height={160} />
                </div>
                <h3>¿Por que aprender react?</h3>
                <p>Camilo Dávila...</p>
            </div>
        )
    }
}

export default Media;