import Link from "next/link"
import lazyWidth from '../fonction/lazyWidth'
import lazyText from '../fonction/lazyText'
import { useEffect } from "react"
import style from "../styles/Footer.module.css"

const Footer = () => {
    useEffect(() => {
        document.querySelectorAll('.lazyWidth').forEach(e => {
            lazyWidth(e)
        })
        document.querySelectorAll('.lazyText').forEach(e => {
            lazyText(e)
        })
    }, [])

    return (
        <footer>
            <div id={style.footerContent}>
                <div id={style.footerTop}>
                    <div className={`${style.footerZoneText} lazyText`}>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href='/#home'>
                            <h2 className={style.footerH1}>
                                ACCUEIL
                            </h2>
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href='/#presentation'>
                            Présentation
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href='/#activite'>
                            Domaines d&apos;activités
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href='/#referenceGraphique'>
                            Références
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href='/#contact'>
                            Contact
                        </Link>
                    </div>
                    <div className={`${style.footerZoneText} lazyText`}>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href={{
                            pathname: '/design',
                            query: {
                                filtreProps: 1
                            },
                            hash: '#homeRef'
                        }}>
                            <h2 className={style.footerH1}>
                                DESIGN
                            </h2>
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href={{
                            pathname: '/design',
                            query: {
                                filtreProps: 2
                            },
                            hash: '#referencesSection'
                        }}>
                            Identité visuelle
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href={{
                            pathname: '/design',
                            query: {
                                filtreProps: 3
                            },
                            hash: '#referencesSection'
                        }}>
                            Packaging & étiquette
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href={{
                            pathname: '/design',
                            query: {
                                filtreProps: 4
                            },
                            hash: '#referencesSection'
                        }}>
                            Site Internet
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkBlue}`} href={{
                            pathname: '/design',
                            query: {
                                filtreProps: 5
                            },
                            hash: '#referencesSection'
                        }}>
                            Design & mise en page
                        </Link>
                    </div>
                    <div className={`${style.footerZoneText} lazyText`}>
                        <Link className={`${style.footerLink} ${style.footerLinkRed}`} href={{
                            pathname: '/video',
                            query: {
                                filtreProps: 1
                            },
                            hash: '#homeRef'
                        }}>
                            <h2 className={style.footerH1}>
                                VIDÉO
                            </h2>
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkRed}`} href={{
                            pathname: '/video',
                            query: {
                                filtreProps: 2
                            },
                            hash: '#referencesSection'
                        }}>
                            Motion Design
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkRed}`} href={{
                            pathname: '/video',
                            query: {
                                filtreProps: 3
                            },
                            hash: '#referencesSection'
                        }}>
                            Effets spéciaux
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkRed}`} href={{
                            pathname: '/video',
                            query: {
                                filtreProps: 4
                            },
                            hash: '#referencesSection'
                        }}>
                            Incrustation
                        </Link>
                        <Link className={`${style.footerLink} ${style.footerLinkRed}`} href={{
                            pathname: '/video',
                            query: {
                                filtreProps: 5
                            },
                            hash: '#referencesSection'
                        }}>
                            Sound design
                        </Link>
                    </div>
                    <div className={`${style.footerZoneText} lazyText`}>
                        <h2 className={style.footerH1}>
                            RÉSEAUX
                        </h2>
                        <a href="https://www.youtube.com/@set5730" className={`${style.footerLink} ${style.footerLinkRed}`}>
                            <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                                <path d="m12.19 1.88h-9.38c-1.54 0-2.81 1.26-2.81 2.81v5.62c0 1.55 1.27 2.81 2.81 2.81h9.37c1.55 0 2.81-1.27 2.81-2.81v-5.62c.01-1.55-1.26-2.81-2.8-2.81zm-6.57 9.37v-7.5l4.69 3.75z" />
                            </svg>
                            Youtube
                        </a>
                        <a href="https://www.instagram.com/setcinq/?hl=fr" className={`${style.footerLink} ${style.footerLinkRed}`}>
                            <svg height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                                <path d="m10.86 0h-6.72c-2.28 0-4.14 1.86-4.14 4.14v6.72c0 2.28 1.86 4.14 4.14 4.14h6.72c2.28 0 4.14-1.86 4.14-4.14v-6.72c0-2.28-1.86-4.14-4.14-4.14zm0 13.67h-6.72c-1.55 0-2.81-1.26-2.81-2.81v-6.72c0-1.55 1.26-2.81 2.81-2.81h6.72c1.55 0 2.81 1.26 2.81 2.81v6.72c0 1.55-1.26 2.81-2.81 2.81zm-3.36-10.13c-2.13 0-3.87 1.73-3.87 3.87 0 2.13 1.73 3.86 3.87 3.86 2.13 0 3.87-1.73 3.87-3.86 0-2.14-1.74-3.87-3.87-3.87zm0 6.4c-1.4 0-2.53-1.14-2.53-2.53 0-1.4 1.14-2.53 2.53-2.53s2.53 1.14 2.53 2.53-1.13 2.53-2.53 2.53zm4.72-7.25c.18.18.29.43.29.69s-.1.51-.29.69c-.18.18-.43.29-.69.29s-.51-.1-.69-.29c-.18-.18-.29-.43-.29-.69s.1-.51.29-.69c.18-.18.43-.29.69-.29.25.01.51.11.69.29z" />
                            </svg>
                            Instagram
                        </a>
                    </div>
                </div>
                <div id={style.separation} className='lazyWidth' />
                <div id={style.footerBottom}>
                    <p className='lazyText'>© 2022 OYX Tous droits réservés.</p>
                    <p className='lazyText'>Design et développement : OYX</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer