import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage  }) {
    return(
        /* jshint ignore:start */
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image} alt="" />
            <div className="videoCard_info">
                <Avatar 
                    className="videoCard_avater" 
                    alt={channel} 
                    src={channelImage}
                />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
        /* jshint ignore:end */
    );
}

export default VideoCard;