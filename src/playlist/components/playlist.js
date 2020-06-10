import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';
import Volumen from '../../icons/components/volumen';
import Pause from '../../icons/components/pause';
import Fullscreen from '../../icons/components/fullscreen';
import Search from '../../widgets/container/search'
import './playlist.css'


function PlayList(props) {
    const category = props.data.categories
    console.log(props.data);
    return (
        <div className="Categories">
            <Search />
            {/* <Play size={50} color="red"/>
            <Volumen size={60} color="green"/>
            <Pause size={60} color="green"/>
            <Fullscreen size={60} color="green"/> */}
            {
                category.map((list) => {
                    return (
                        <>

                            <div className="Category">
                                <h2 className="Category-title">{list.title}</h2>
                                <p className="Category-description">{list.description}</p>
                                <div className="Playlist" key={list.id}>
                                    {
                                        list.playlist.map((item) => {
                                            return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
                                        })
                                    }
                                </div>
                            </div>

                        </>
                    )
                })
            }
        </div>
    )
}

export default PlayList