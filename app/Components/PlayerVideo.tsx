import React from "react";

type PlayerVideoProps = {
    name: string;
    videoUrl: string;
};

const PlayerVideo = ({ name, videoUrl }: PlayerVideoProps) => (
    <div>
        <h2>{name}</h2>
        <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

export default PlayerVideo;