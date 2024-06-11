import './CurrentTrackCard.css';
import {useRef, useState} from "react";

function CurrentTrackCard({
    audioFile
                          }) {



  return (
    <div className="current-track-card hidden">
      <div className="current-track-card__img">
        <img src="http://localhost:9090/images/default.png" alt="current track" />
      </div>
      <div className="current-track-card__info">
        <h3 className="current-track-card__title">
            {audioFile.title}
        </h3>
        <p className="current-track-card__artist">{audioFile.artist}</p>
      </div>
    </div>
  );
}

export default CurrentTrackCard;