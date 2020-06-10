import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title'
import PlayPausa from '../components/play-pause';
import Timer from '../components/timer';
import Control from '../components/video-player-control';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen'

function leftPad(number) {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number
}

function formattedTime(secs) {
    const minutes = parseInt(secs / 60, 10);
    const secons = parseInt(secs % 60, 10);
    return `${leftPad(minutes.toString())}: ${leftPad(secons.toString())}`;
}

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        durationSec: 0,
        currentTimeSec: 0,
        loading: false,
        volume: 0,
        isVolumeActive: true,
        lastVolumeValue: 0
    }
    toggleClick = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: formattedTime(this.video.duration),
            durationSec: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        // console.log(this.video.currentTime);
        this.setState({
            currentTime: formattedTime(this.video.currentTime),
            currentTimeSec: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: true
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value
    }
    handleVolumeClick = event => {
        if (this.state.isVolumeActive) {
            this.setState({
                isVolumeActive: false,
                volume: this.video.volume
            })
            this.video.volume = 0
        } else {
            this.video.volume = this.state.volume
            this.setState({
                isVolumeActive: true
            })
        }
    }

    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen()
        } else {
            document.webkitExitFullscreen()
        }
    }
    setRef = element => {
        this.player = element
    }
    render() {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title title={this.props.title} />
                <Control>
                    <PlayPausa
                        pause={this.state.pause}
                        handleClick={this.toggleClick}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        duration={this.state.durationSec}
                        value={this.state.currentTimeSec}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumeClick={this.handleVolumeClick}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Control>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer