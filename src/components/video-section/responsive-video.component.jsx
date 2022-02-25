import React, {useState} from "react";
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

const ResponsivePlayer = () =>  {
    const [isOpen, setOpen] = useState(false)

        return (
            <div className='player-wrapper animation-area'>

                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                <button className="video-button" onClick={()=> setOpen(true)}>
                    VIEW DEMO
                </button>
                    <ul className="box-area">
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
            </div>
        )
}

export default ResponsivePlayer;