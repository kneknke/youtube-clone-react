import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
    return (
        /* jshint ignore:start */
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image =""
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programminf tips and tricks that will take your coding skills to the ..."
            />

            <VideoRow 
                views="1.4M"
                subs="659K"
                description="ANG GIMODDI"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's build a Youtube Clone with REACT JS for Beginner"
                image="https://i.ytimg.com/an_webp/jnqJUluQPsg/mqdefault_6s.webp?du=3000&sqp=CMissIMG&rs=AOn4CLBSj0oT0yOSAKhTFnWAW8HI67HINg"
            />

            <VideoRow 
                views="1.4M"
                subs="659K"
                description="ANG GIMODDI"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's build a Youtube Clone with REACT JS for Beginner"
                image="https://i.ytimg.com/an_webp/jnqJUluQPsg/mqdefault_6s.webp?du=3000&sqp=CMissIMG&rs=AOn4CLBSj0oT0yOSAKhTFnWAW8HI67HINg"
            />

            <VideoRow 
                views="1.4M"
                subs="659K"
                description="ANG GIMODDI"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's build a Youtube Clone with REACT JS for Beginner"
                image="https://i.ytimg.com/an_webp/jnqJUluQPsg/mqdefault_6s.webp?du=3000&sqp=CMissIMG&rs=AOn4CLBSj0oT0yOSAKhTFnWAW8HI67HINg"
            />
        </div>
        /* jshint ignore:end */
    );
}

export default SearchPage;