import Image from 'next/image'
import { useEffect, useState } from 'react'
import lazyText from '../../fonction/lazyText'
import style from '../../styles/Reference.module.css'
import media from '../../json/design.json'
import Carrousel from '../../components/Carrousel'

export const getStaticPaths = async () => {
    const paths = Object.keys(media).map(key => {
        return {
            params: {
                designId: key
            },
        };
    });

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async ({ params }) => {

    const id = params.designId
    const designData = { id, ...media[params.designId] }
    return {
        props: {
            designData
        },
    }
}

const DesignId = ({ designData, screenWidth }) => {
    
    const [position, setPosition] = useState(0)
    const [details, setDetails] = useState(false)

    const [hover, setHover] = useState(false)
    const [separationWidth, setSeparationWidth] = useState(false)

    useEffect(() => {
        document.querySelectorAll('.lazyText').forEach(e => {
            lazyText(e)
        })
    }, [])

    useEffect(() => {
        document.getElementById('parralax').scrollTo(0,0)
        setPosition(0)
    },[designData])

    return (
        <>
            <section id={style.reference}>
                <h1>
                    {designData.titre}
                </h1>
                <h2>
                    {designData.soustitre}
                </h2>
                <p id={style.referenceP}>
                    {designData.description}
                </p>
                <div id={style.referenceCarrousel} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    {
                        Object.keys(designData.images).map(key => {
                            return (
                                <Image className={style.referenceCarrouselMedia} key={key} style={{ transform: `translateX(${key - position}00%)` }} alt={key} src={`/media/photo/ref-design/${designData.id}/${designData.images[key]}`} width={2880} height={1920} />
                            )
                        })
                    }
                    <span id={style.billeContainer}>
                        {
                            Object.keys(designData.images).map((key, index) => {
                                return (
                                    <button key={key} onClick={() => setPosition(index)} className={`${style.bille} ${index == position && style.billeHover}`}></button>
                                )
                            })
                        }
                    </span>
                    <button disabled={position === 0 && true} className={`buttonfleche buttonCarrousel buttonCarrouselLeft ${hover && position !== 0 && 'buttonVisibleLeft'}`} onClick={() => setPosition(position - 1)}>
                        <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                            <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
                        </svg>
                    </button>
                    <button disabled={position === Object.keys(designData.images).length - 1 && true} className={`buttonfleche buttonCarrousel buttonCarrouselRight ${hover && position !== Object.keys(designData.images).length - 1 && 'buttonVisibleRight'}`} onClick={() => setPosition(position + 1)}>
                        <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                            <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
                        </svg>
                    </button>
                </div>
                <h2 id={style.detail} onClick={() => setDetails(!details)}>
                    D??TAIL DE MISSION
                    <button id={style.detailButton} onClick={() => setSeparationWidth(!separationWidth)}>
                        <div className={style.baton} />
                        <div className={style.baton} style={{ transform: `rotate(${details ? '0deg' : '90deg'})` }} />
                    </button>
                </h2>
            </section>
            {/* <div id={style.detailsListeTop} style={{width: `${separationWidth ? '200' : '0'}px`}} /> */}
            <section id={style.details} className={details ? style.detailVisible : style.detailInvisible}> {/* style={{ height: `${details ? '400' : '0'}px` }} */}
                <ul id={style.detailsListe}>
                    {
                        Object.keys(designData.details).map(key => {
                            return (
                                <li key={key}>
                                    {designData.details[key]}
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section id={style.decouverte}>
                <Image id={style.decouverteBackground} alt='decouverte-autre-reference' src='/media/photo/decouverte-autre-reference.jpg' width='5000' height='3333' />
                <h1 id={style.decouverteH1} className='lazyText'>
                    NOS AUTRES R??F??RENCES
                </h1>
                <Carrousel screenWidth={screenWidth} media={media} chemin='/media/photo/ref-design/' format='design' />
            </section>
        </>
    )
}

export default DesignId