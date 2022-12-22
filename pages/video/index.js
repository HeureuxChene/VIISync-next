import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import style from '../../styles/References.module.css'
import media from '../../json/video.json'
import { useRouter } from 'next/router'
import Dropdown from '../../components/Dropdown'

const Index = ({ setPosition, screenWidth }) => {

    const router = useRouter()
    const filtreProps = router.query.filtreProps
    const [filtre, setFiltre] = useState()

    const [briqueFiltre, setBriqueFiltre] = useState([])

    const [filtreTexte] = useState(['TOUT VOIR', 'MOTION DESIGN', 'EFFETS SPÉCIAUX', 'INCRUSTATION', 'SOUND DESIGN'])

    const numberToTable = nombre => {
        let array = []
        for (let i = 0; i < nombre; i++) {
            array.push(i)
        }
        return array
    }

    useEffect(() => {
        setFiltre(filtreProps)
    }, [filtreProps])

    useEffect(() => {
        setBriqueFiltre([])
        let briqueFiltreTemp = []
        Object.keys(media).map((key, index) => {
            for (let i = 0; i <= Object.keys(media[key]["filtre"]).length + 1; i++) {
                if (filtre == Object.keys(media[key]["filtre"])[i] || filtre == 0) {
                    briqueFiltreTemp.push(true)
                    break
                }
            }
            if (!briqueFiltreTemp[index]) {
                briqueFiltreTemp.push(false)
            }
        })
        setBriqueFiltre(briqueFiltreTemp)
    }, [filtre])

    useEffect(() => {
        document.getElementById('parralax').scrollTop = 0
        setPosition(3)
        if (!filtreProps) {
            setFiltre(1)
        }
    }, [])

    return (
        <>
            <section id='homeRef' className={style.homeRef}>
                <video id={style.homeRefVideo} autoPlay muted loop='infinite' src={`/media/video/ref-video/video-accueil.mp4`} />
                <a href='#referencesSection' className='buttonfleche buttonSection'>
                    <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                        <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
                    </svg>
                </a>
            </section>
            <div id={style.references}>
                <div id='referencesSection' className='anchor' />
                {
                    screenWidth < 600 ?
                        <Dropdown textValeurs={filtreTexte} valeurs={numberToTable(filtreTexte.length)} valeur={filtre} setValeur={setFiltre} />
                        :
                        <ul id={style.referencesListe}>
                            <li onClick={() => setFiltre(0)} className={`${style.referencesItem} ${filtre == 0 ? style.sideLinkActive : style.sideLinkInactive}`}>
                                {filtreTexte[0]}
                            </li>
                            <li onClick={() => setFiltre(1)} className={`${style.referencesItem} ${filtre == 1 ? style.sideLinkActive : style.sideLinkInactive}`}>
                                {filtreTexte[1]}
                            </li>
                            <li onClick={() => setFiltre(2)} className={`${style.referencesItem} ${filtre == 2 ? style.sideLinkActive : style.sideLinkInactive}`}>
                                {filtreTexte[2]}
                            </li>
                            <li onClick={() => setFiltre(3)} className={`${style.referencesItem} ${filtre == 3 ? style.sideLinkActive : style.sideLinkInactive}`}>
                                {filtreTexte[3]}
                            </li>
                            <li onClick={() => setFiltre(4)} className={`${style.referencesItem} ${filtre == 4 ? style.sideLinkActive : style.sideLinkInactive}`}>
                                {filtreTexte[4]}
                            </li>
                        </ul>
                }
                <section id={style.referencesSection}>
                    {
                        Object.keys(media).map((key, index) => {
                            return (
                                <Link key={index} href={`/video/${key}#topPage`} className={`${style.referencesLink} ${briqueFiltre[index] ? style.visible : style.invisible}`}>
                                    <h1 className={style.referencesH1} onMouseEnter={e => e.target.nextSibling.style.transform = 'scale(1.2)'} onMouseLeave={e => e.target.nextSibling.style.transform = 'scale(1)'}>{media[key]['titre']}</h1>
                                    <Image className={style.referencesImg} alt={key} src={`/media/photo/ref-video/${key}/${media[key]['vignette']}`} width={1080} height={846} />
                                </Link>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}

export default Index;