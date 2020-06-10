import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../playlist/components/playlist'
import Related from '../components/related-layout'
import ModalContainer from '../../widgets/container/modal'
import Modal from '../../widgets/components/modal'
import HandelError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import data from '../../api.json'

class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <HandelError>
                <HomeLayout>
                    <Related />
                    <Categories data={data} handleOpenModal={this.handleOpenModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay={true}
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandelError>
        )
    }
}

export default Home