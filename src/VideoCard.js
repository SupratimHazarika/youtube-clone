import { Avatar } from '@material-ui/core'
import './VideoCard.css'
import React from 'react'

function VideoCard({title, views, timestamp, channelImage, channel, image}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" /> 
            <div className="videoCard__info">
                <Avatar 
                  className="videoCard__avatar"
                  alt={channel}
                  src={channelImage}
                  />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard
