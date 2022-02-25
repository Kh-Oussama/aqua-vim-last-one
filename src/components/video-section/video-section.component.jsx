import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ResponsivePlayer from "./responsive-video.component";
import RubberBand from "react-reveal/RubberBand";
import ModalVideo from "react-modal-video";

const VideoSection = () =>  {
    const [isOpen, setOpen] = useState(false)
    return (
      <React.Fragment>
          <RubberBand>
              <div className="white-divider"/>
          </RubberBand>
          <div className="video-section animation-area">

              <ul className="box-area">
                  <li/>
                  <li/>
                  <li/>
                  <li/>
                  <li/>
                  <li/>
              </ul>
              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
              <div className="video-button" onClick={()=> setOpen(true)}>
                  <i className="fas fa-play"></i>
              </div>

          </div>
      </React.Fragment>

    )
}

export default VideoSection;