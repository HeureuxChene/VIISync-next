import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import style from '../styles/Header.module.css'


const Header = ({ position, headerInvisible }) => {

    const location = useRouter().pathname

    const [topPage, setTopPage] = useState(true)
    const [hover, setHover] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const observerScrollZero = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setTopPage(true)
            }
            else {
                setTopPage(false)
            }
        });
        observerScrollZero.observe(document.getElementById('topPage'));
    }, [])

    return (
        <>
            <header className={`${style.header} ${headerInvisible ? style.headerInvisible : undefined} ${!topPage || toggle ? style.headerHover : undefined}`}>
                <Link href='/#home'>
                    <Image id={style.logo} alt='logo' src='/media/photo/logo.svg' width={100} height={100} />
                </Link>
                <nav onClick={() => setToggle(false)} className={`${style.nav} ${toggle ? style.visibleMobile : style.invisibleMobile}`} style={location === '/design/[designId]' || location === '/video/[videoId]' ? { color: '#000' } : {}}> {/*${toggle ? style.visible : style.invisible} */}
                    <div className={style.navColumn}>
                        <div className={style.linkContainer}>
                            <Link className={`${style.link} ${style.linkRight} ${position === 1 ? style.linkActive : hover === 1 ? style.linkHover : style.linkInactive}`} href='/#presentation' onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                                PRÉSENTATION
                            </Link>
                        </div>
                        <div className={style.linkContainer}>
                            <Link className={`${style.link} ${style.linkRight} ${position === 2 ? style.linkActive : hover === 2 ? style.linkHover : style.linkInactive}`} href='/#activite' onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}>
                                DOMAINES D'ACTIVITÉS
                            </Link>
                        </div>
                    </div>
                    <div id={style.logoEmplacement} />
                    <div className={style.navColumn}>
                        <div className={style.linkContainer} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} onClick={() => setHover(0)}>
                            <Link className={`${style.link} ${style.linkLeft} ${position === 3 || location === '/design' || location === '/design/[designId]' || location === '/video' || location === '/video/[videoId]' ? style.linkActive : hover === 3 ? style.linkHover : style.linkInactive}`} href='/#referenceGraphique'>
                                NOS RÉFÉRENCES
                            </Link>
                            <div className={`${style.linkDropdown} ${hover === 3 ? style.visible : style.invisible} ${!topPage ? style.headerHover : undefined}`}>
                                <Link className={`${style.dropdownItem} ${location === '/design' || location === '/design/[designId]' ? style.dropdownItemActive : style.dropdownItemInactive}`} href='/design'>
                                    DESIGN
                                </Link>
                                <Link className={`${style.dropdownItem} ${location === '/video' || location === '/video/[videoId]' ? style.dropdownItemActive : style.dropdownItemInactive}`} href='/video'>
                                    VIDÉO
                                </Link>
                            </div>
                        </div>
                        <div className={style.linkContainer}>
                            <Link className={`${style.link} ${style.linkLeft} ${position === 4 ? style.linkActive : hover === 4 ? style.linkHover : style.linkInactive}`} href='/#contact' onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)}>
                                CONTACT & DEVIS
                            </Link>
                        </div>
                    </div>
                </nav>
                <div id={style.humburger} onClick={() => setToggle(!toggle)}>
                    <div className={`${style.patteHumburger} ${toggle ? style.patteHumburgerUn : undefined} ${topPage && !toggle && location !== '/design/[designId]' & location !== '/video/[videoId]' ? style.patteHumburgerWhite : undefined}`} />
                    <div className={`${style.patteHumburger} ${toggle ? style.patteHumburgerDeux : undefined} ${topPage && !toggle && location !== '/design/[designId]' & location !== '/video/[videoId]' ? style.patteHumburgerWhite : undefined}`} />
                    <div className={`${style.patteHumburger} ${toggle ? style.patteHumburgerTrois : undefined} ${topPage && !toggle && location !== '/design/[designId]' & location !== '/video/[videoId]' ? style.patteHumburgerWhite : undefined}`} />
                </div>
            </header>
            <div className={`${style.navFondBlur} ${toggle ? style.visibleMobile : style.invisibleMobile}`} />
        </>
    )
}

export default Header