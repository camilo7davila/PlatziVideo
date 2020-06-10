import React, { PureComponent } from 'react';
import PropType from 'prop-types'
import './media.css'
import foto from '../../images/covers/bitcoin.jpg'

class Media extends PureComponent {
    state = {
        author: 'Camilo Dav'
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         author: props.author
    //     }
    // }
    handleClick = (event) => {
        console.log(this.props.handleClick);
        this.props.openModal(this.props)
        // this.setState({
        //     author: 'Ricardo cely'
        // })
    }
    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={foto} alt="imagen" width={240} height={160} />
                </div>
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.props.author}</p>
            </div>
        )
    }
}

Media.propType = {
    title: PropType.string.isRequired,
    author: PropType.string.isRequired
}

export default Media;