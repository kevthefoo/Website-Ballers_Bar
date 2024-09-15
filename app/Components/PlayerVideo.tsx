import React from "react";

type PlayerVideoProps = {
    name: string;
    videoUrl: string;
};

const PlayerVideo = ({ name, videoUrl }: PlayerVideoProps) => (
    <div>
        <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

export default PlayerVideo;
