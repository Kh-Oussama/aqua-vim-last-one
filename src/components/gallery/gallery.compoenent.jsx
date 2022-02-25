import React, { useState, useEffect, useMemo } from 'react';
import { useTransition, a } from 'react-spring';
import shuffle from 'lodash/shuffle';
import useMeasure from './useMeasure';
import useMedia from './useMedia';
import data from './data';
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
// import {VideoScroll} from "react-video-scroll";
// const setStyles = (wrapperEl, videoEl, playbackRate) => {
//     // wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
//     // playbackRate +
//     // 'px'})`
//     // wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
//     // playbackRate +
//     // 'px'})`
// }

function Gallery() {
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
    const [bind, { width }] = useMeasure()
    const [items, set] = useState(data)
    useEffect(() => void setInterval(() => set(shuffle), 2000), [])
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0)
        let gridItems = items.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights))
            const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
            return { ...child, xy, width: width / columns, height: child.height / 2 }
        })
        return [heights, gridItems]
    }, [columns, items, width])
    const transitions = useTransition(gridItems, (item) => item.css, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25
    })
    return (
        <div className="gallery__section">
            {/*<VideoScroll*/}
            {/*    onLoad={props =>*/}
            {/*        setStyles(props.wrapperEl, props.videoEl, props.playbackRate)*/}
            {/*    }*/}
            {/*    playbackRate={500}*/}
            {/*    style={{ position: 'sticky' }}*/}
            {/*>*/}
            {/*    <video*/}
            {/*        tabIndex="0"*/}
            {/*        autobuffer="autobuffer"*/}
            {/*        preload="preload"*/}
            {/*        style={{ width: '100%', objectFit: 'contain' }}*/}
            {/*        playsInline*/}
            {/*    >*/}
            {/*        <source type="video/mp4" src="/images/v.mp4" />*/}
            {/*    </video>*/}
            {/*</VideoScroll>*/}
            <p className="title-p before-title">
                {/*<Fade left cascade>*/}
                {/*    How do we Work*/}
                {/*</Fade>*/}
            </p>
            <h2 className="heading-secondary">Galerie</h2>
            <p className="title-p title-description">
                <Fade left cascade>
                    Parcourez notre galerie, et découvrez nos produits !
                </Fade>
            </p>
            <RubberBand>
                <div className="white-divider"/>
            </RubberBand>
            <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
                {
                    transitions.map(({ item, props: { xy, ...rest }, key }) => (
                    <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                        <div style={{ backgroundImage: item.css }} />
                    </a.div>
                ))}
            </div>
        </div>

    )
}

export default Gallery;
