import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
    return(
        /* jshint ignore:start */
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    channelImage="S"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                    timestamp="3 days ago"
                 />

                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    channelImage="S"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                    timestamp="3 days ago"
                 />

                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    channelImage="S"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                    timestamp="3 days ago"
                 />

                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    channelImage="S"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                    timestamp="3 days ago"
                 />

                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    channelImage="S"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                    timestamp="3 days ago"
                 />
            </div>
        </div>
        /* jshint ignore:end */
    );
}

export default RecommendedVideos;