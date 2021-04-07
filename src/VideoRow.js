import React from 'react';
import "./VideoRow.css";

function VideoRow({ views, subs, description, timestamp, channel, title, image, }) {
    return (
        /* jshint ignore:start */
        <div className="videoRow">
            <img 
                src={image}
                alt=""
            />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} • {" "}
                    <span className="videoRow_subs">
                        <span className="videoRow_subsNumber">{subs}</span>
                    </span> {""}
                    {views} views • {timestamp}
                </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
        /* jshint ignore:end */
    );
}

export default VideoRow;