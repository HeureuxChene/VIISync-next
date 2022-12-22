import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import style from '../styles/Carrousel.module.css'

const Carrousel = ({ screenWidth, media, chemin, format }) => {

    const [scrollCarrousel, setScrollCarrousel] = useState(0)
    const [mouseDown, setMouseDown] = useState(false)
    const [offsetScroll, setOffsetScroll] = useState(0)
    const [hover, setHover] = useState(false)

    const [clickable, setClickable] = useState(true)

    const getCssVariable = nom => {
        return parseInt(getComputedStyle(document.body).getPropertyValue(nom).replace('px', ''))
    }

    const handleMouseDown = e => {
        document.getElementById(style.scrolling).style.scrollBehavior = 'initial'
        setMouseDown(true)
        setClickable(true)
        setOffsetScroll(e.pageX)
    }

    const handleMouseHold = e => {
        if (scrollCarrousel !== document.getElementById(style.scrolling).scrollLeft) {
            setClickable(false)
        }
        document.getElementById(style.scrolling).scrollLeft = offsetScroll - e.pageX + scrollCarrousel
    }

    const handleMouseUp = () => {
        setMouseDown(false)
        setClickable(true)
    }

    const handleScroll = e => {
        setScrollCarrousel(e.target.scrollLeft)
    }

    const handleBriqueEnter = e => {
        e.target.nextSibling.play()
        e.target.nextSibling.nextSibling.style.opacity = 0
    }

    const handleBriqueLeave = e => {
        e.target.nextSibling.pause()
        e.target.nextSibling.currentTime = 0
        e.target.nextSibling.nextSibling.style.opacity = 1
    }

    useEffect(() => {
        if (mouseDown) {
            addEventListener('mousemove', handleMouseHold)
        }
        return () => removeEventListener('mousemove', handleMouseHold)
    }, [mouseDown])

    useEffect(() => {
        document.getElementById(style.scrollingSlider).style.width = `${document.getElementById(style.slider).offsetWidth}px`
    }, [screenWidth])

    useEffect(() => {
        addEventListener('mouseup', handleMouseUp)
        return () => removeEventListener('mouseup', handleMouseUp)
    }, [])

    return (
        <>
            <div id={style.carrousel} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={e => handleMouseDown(e)}>
                <div id={style.slider} style={{ transform: `translateX(${-scrollCarrousel}px)` }}>
                    {
                        format === '.mp4' ?
                            Object.keys(media).map((key, index) => {
                                return (
                                    <Link href={{ pathname: media[key]['domaine'], query: { filtreProps: media[key]['filtre'] }, hash: '#referencesSection' }} draggable={false} key={index} id={key} className={`${style.brique} lazyText`} style={{ pointerEvents: clickable ? 'initial' : 'none' }}>
                                        <div className={style.briqueHover} onMouseEnter={e => handleBriqueEnter(e)} onMouseLeave={e => handleBriqueLeave(e)} />
                                        <video id={`${key}-video`} className={style.background} muted loop='infinite' src={chemin + key + format} />
                                        <Image alt={key} src={`/media/photo/home/activite/${key}.jpg`} className={style.backgroundImage} width={520} height={720} />
                                        <div className={style.briqueText}>
                                            <h1 className={style.briqueTitre}>
                                                {media[key]['titre']}
                                            </h1>
                                            <h2 className={style.briqueSousTitre}>
                                                {media[key]['soustitre']}
                                            </h2>
                                        </div>
                                    </Link>
                                )
                            }) :
                            Object.keys(media).map((key, index) => {
                                return (
                                    <Link key={index} href={`/${format}/${key}`} draggable={false} className={`${style.brique} lazyText`} style={{ pointerEvents: clickable ? 'initial' : 'none' }}>
                                        <Image alt={key} src={`${chemin + key}/${media[key]['vignette']}`} className={style.backgroundImage} width={1080} height={846} />
                                        <h1 className={style.briqueRefTitre}>
                                            {media[key]['titre']}
                                        </h1>
                                    </Link>
                                )
                            })
                    }
                </div>
                <div id={style.scrolling} onScroll={e => handleScroll(e)}>
                    <div id={style.scrollingSlider} />
                </div>
                <button className={`buttonfleche buttonCarrousel buttonCarrouselLeft ${hover && scrollCarrousel !== 0 && 'buttonVisibleRefLeft'}`} onClick={() => { document.getElementById(style.scrolling).style.scrollBehavior = 'smooth'; document.getElementById(style.scrolling).scrollLeft = Math.round(scrollCarrousel / (getCssVariable('--briqueWidth') + getCssVariable('--briqueGap')) - 1) * (getCssVariable('--briqueWidth') + getCssVariable('--briqueGap')) }}>
                    <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                        <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
                    </svg>
                </button>
                <button className={`buttonfleche buttonCarrousel buttonCarrouselRight ${hover && scrollCarrousel < (getCssVariable('--briqueWidth') + getCssVariable('--briqueGap')) * (Object.keys(media).length - getCssVariable('--briqueNumber')) && 'buttonVisibleRefRight'}`} onClick={() => { document.getElementById(style.scrolling).style.scrollBehavior = 'smooth'; document.getElementById(style.scrolling).scrollLeft = Math.round(scrollCarrousel / (getCssVariable('--briqueWidth') + getCssVariable('--briqueGap')) + 1) * (getCssVariable('--briqueWidth') + getCssVariable('--briqueGap')) }}>
                    <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                        <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Carrousel;